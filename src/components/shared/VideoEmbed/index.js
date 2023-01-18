import React, { useRef, useState, useEffect } from 'react';
import useGetIcon from '../../../hooks/useGetIcon';

import Player from '@vimeo/player';
//import YouTube from 'react-youtube';

import * as styles  from './videoEmbed.module.scss';

export default function VideoEmbed(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [vimeoVid, setVimeoVid] = useState();
  const [currentVolume, setCurrentVolume] = useState();
  const [fadeState, setFadeState] = useState("initial");
  
  // eslint-disable-next-line no-unused-vars
  const [youTubeVid, setYouTubeVid] = useState();


  const vimeoRef = useRef();
  const videoRef = useRef();
  const progressRef = useRef();
  const volumeRef = useRef();
  const volumeContainerRef = useRef();

  let { handleGetIcon } = useGetIcon();

  useEffect(() => {
    if (vimeoRef.current) {
      const vimeoPlayer = new Player(vimeoRef.current);
      setVimeoVid(vimeoPlayer)

      vimeoPlayer.on("play", function () {
        setIsPlaying(true);
      })

      vimeoPlayer.on("pause", function () {
        setIsPlaying(false);
      })
    }
  }, [vimeoRef])

  useEffect(() => {
    let video = videoRef.current;
    if (!video) return;

    if (video) {
      video.addEventListener("timeupdate", () => {
        let curr = (video.currentTime / video.duration) * 100;

        setCurrentTime(curr)
      })

      video.addEventListener("ended", () => {
        let curr = (video.currentTime / video.duration) * 100;
        setIsPlaying(false);
        setCurrentTime(curr)
      })
    }

    return () => {
      video.removeEventListener("timeupdate", function (e) { });
      video.removeEventListener("ended", function (e) { });
    }
  }, [])

  useEffect(() => {
    let progress = progressRef.current;
    let video = videoRef.current;

    if (!video) return;

    if (progress && video) {
      setCurrentVolume(25);

      progress.addEventListener("click", (e) => {
        const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = progressTime;
      })
    }

    return () => {
      progress.removeEventListener("click", function (e) { })
    }
  }, []);

  let {
    title,
    video_url
  } = props;

  /*function handleYouTubeReady(e) {
    setYouTubeVid(e.target);
  }*/

  function togglePlay(e) {    
    if (video_url.includes("vimeo")) {
      if (!isPlaying) {
        vimeoVid.play().then(function () {
          setIsPlaying(true);
        })
      } else {
        vimeoVid.pause().then(function () {
          setIsPlaying(false);
        })
      }
    }

    if (video_url.includes("youtube")) {
      if (!isPlaying) {
        youTubeVid.playVideo();
        setIsPlaying(true)
      } else {
        youTubeVid.pauseVideo();
        setIsPlaying(false)
      }
    }

    if (!video_url.includes('vimeo') && !video_url.includes("youtube")) {
      if (!videoRef.current.paused && !videoRef.current.ended) {
        setIsPlaying(false);
        videoRef.current.pause();
      } else {
        setIsPlaying(true);
        videoRef.current.play();
      }

      setFadeState("on")

      setTimeout(() => {
        setFadeState("off");
      }, 2000);

    }
  }

  function handleVolumeChange(e) {
    let video = videoRef.current;
    video.volume = e.target.value / 100;
    setCurrentVolume(e.target.value);
  }

  return (
    <article className={`${styles.videoEmbed} ${isPlaying ? styles.playing : styles.paused} ${title && title.length > 0 ? styles.extraPadding : ""}`}>
      <div className={styles.container}>
        {video_url.includes("vimeo") &&
          <div className={styles.iframe}>
            <iframe
              ref={vimeoRef}
              width="640"
              height="360"
              title={title ? title : "Teladoc Health video"}
              src={video_url}
              allow="autoplay"
              allowFullScreen
            />
          </div>
        }

        {video_url.includes("youtube") &&
          <div className={styles.iframe}>
            {/*<YouTube
              videoId={video_url.split('embed/')[1]}
              title={title ? title : "Teladoc Health video"}
              onReady={(e) => handleYouTubeReady(e)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={(e) => console.error(e)}
            />*/}
            
            <iframe 
              width="560" 
              height="315" 
              src={video_url} 
              title={title ? title : "Teladoc Health video"}
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            />
          </div>
        }

        {(!video_url.includes("youtube") && !video_url.includes("vimeo")) &&
          <>
            <div className={styles.video} onClick={(e) => togglePlay(e)} onKeyDown={(e) => togglePlay(e)}>
              <video ref={videoRef}>
                <source src={`${video_url}`} type="video/mp4" />
              </video>
            </div>

            <div className={styles.controls}>
              <div className={styles.playPause}>
                <button onClick={(e) => togglePlay(e)} >
                  {isPlaying ?
                    <>
                      { handleGetIcon("pause") }
                    </>
                  :
                    <>
                      {handleGetIcon("play solid") }
                    </>
                  }
                </button>
              </div>

              <div className={styles.timeline}>
                <div className={styles.timelineBar} ref={progressRef}>
                  <div className={styles.timelineInner} style={{ width: `${currentTime}%` }} />
                </div>
              </div>

              <div className={`${styles.volume} ${styles.volume['volume-' + currentVolume]}`} ref={volumeContainerRef}>
                <span className={styles.volumeBar}></span>
                <span className={styles.volumeBar}></span>
                <span className={styles.volumeBar}></span>
                <span className={styles.volumeBar}></span>

                <input
                  ref={volumeRef}
                  type="range"
                  min="0"
                  max="100"
                  step="25"
                  defaultValue={videoRef.current && videoRef.current.volume}
                  onChange={handleVolumeChange}
                />
              </div>

            </div>
          </>
        }

        {video_url && !video_url.includes("youtube") &&
          <button
            className={`${styles.playBtn} ${isPlaying ? styles.hide : ""}`}
            onClick={(e) => togglePlay(e)}
            style={{
              width: video_url.includes("vimeo") ? "85px" : "auto",
              height: video_url.includes("vimeo") ? "85px" : "auto"
            }}
          >
            <div
              className={`${styles.playIcon} ${fadeState === "initial" ? "" : fadeState === "on" ? styles.fade : styles.hide}`}
            >
              {isPlaying ?
                <>
                  { handleGetIcon("pause") }
                </>
              :
                <span>
                  {handleGetIcon("play solid") }
                </span>
              }
            </div>
          </button>
        }

        { title &&
          <div className={styles.title}>
            <div>{ title }</div>
          </div>
        }
      </div>
    </article>
  )
}