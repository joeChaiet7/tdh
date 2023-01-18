import React, { useEffect, useRef, useState, useContext } from 'react';
import ModalContext from '../../../context/ModalContext';
import useGetIcon from '../../../hooks/useGetIcon';

import Player from '@vimeo/player';

//import TestVideo from '../../assets/video/test-vid.mp4';
import * as styles from './videoModal.module.scss';

const VideoModal = ({ videoUrl }) => {
  const [video, setVideo] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const { handleGetIcon } = useGetIcon();

  const videoRef = useRef();

  const {
    showModal,
    handleToggleModal,
  } = useContext(ModalContext);

  useEffect(() => {
    if(videoRef.current){
      if(videoUrl.includes("vimeo")){
        const vimeoPlayer = new Player(videoRef.current);
        setVideo(vimeoPlayer)

        vimeoPlayer.on("play", function(){
          setIsPlaying(true);
        })
        
        vimeoPlayer.on("pause", function(){
          setIsPlaying(false);
        })
      }
    }

    //Reset video on modal close
    if(!showModal && video){
      if(isPlaying){
        video.pause().then(function(){
          setIsPlaying(false);
          setVideo();
          video.unload();
        })
      }

      //videoRef.current.pause();
      //videoRef.current.srcObject = null;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoRef, showModal])

  function handleFormatVimeoUrl(url){
    let formatUrl = url.split('?')[0];
    let newUrl = new URL(url);

    let params = newUrl.searchParams;
    
    //let params = new URLSearchParams(newUrl)

    let h = params.get('h');
    let appId = params.get('app_id')

    return formatUrl + `?h=${h}&app_id=${appId}&sidedock=0`;
  }
  
  return (
    <div className={styles.video}>
      <button className={styles.close} onClick={() => handleToggleModal()}>
        { handleGetIcon("close") }
      </button>

      {/*<video ref={videoRef} controls autoPlay muted> 
        <source src={TestVideo} type="video/mp4" />
      </video>*/}

      { videoUrl && 
        <div className={styles.iframe}>
          { videoUrl.includes("vimeo") &&
            <iframe
              ref={videoRef}
              title='Whole-person virtual care for all'
              src={`${ videoUrl && handleFormatVimeoUrl(videoUrl) }`}
              allowFullScreen={true}
            />
          }   

          { videoUrl.includes("youtube") &&
            <iframe
              ref={videoRef}
              title='Whole-person virtual care for all'
              src={videoUrl}
              allowFullScreen={true}
            />
          }   
        </div>
      }
      
    </div>
  )
}

export default VideoModal;