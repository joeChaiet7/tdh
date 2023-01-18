/**
 * TeaserVideo
 * Container for text and video.
 * @typedef {object} Props
 * @property {string} title - The title of the component 
 * @property {string} text_position - The subtitle of the component 
 * @property {string} content - The subtitle of the component
 * @property {Array} list - The data for each tile in the component
 * @property {object} cta - The subtitle of the component
 * @property {object} image - The subtitle of the component
 */

import React, { useContext, useState, useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import ReactMarkdown from 'react-markdown';
import ModalContext from '../../../context/ModalContext';
import useGetIcon from '../../../hooks/useGetIcon';

import {
  CallToAction
} from '../../';

import * as styles from './teaserVideo.module.scss';

export default function TeaserVideo(props) {
  const [vimeoVid, setVimeoVid] = useState();
  //const [isPlaying, setIsPlaying] = useState(true);

  let { handleGetIcon } = useGetIcon();

  const {
    showModal,
    handleToggleModal
  } = useContext(ModalContext)

  const homeVideoRef = useRef();

  function toggleVimeoPlay() {
    if (vimeoVid) {
      if (!showModal) {
        vimeoVid.play().then(function () {
          //setIsPlaying(true);
        })
      } else {
        vimeoVid.pause().then(function () {
          //setIsPlaying(false);
        })
      }
    }
  }

  useEffect(() => {
    toggleVimeoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal])

  useEffect(() => {
    if (homeVideoRef.current) {
      const vimeoPlayer = new Player(homeVideoRef.current);
      setVimeoVid(vimeoPlayer)
    }
  }, [homeVideoRef])

  let {
    title,
    text_position,
    text,
    list_type,
    cta,
    video_size,
    video_url,
    show_play_button,
    page,
    theme
  } = props;

  return (
    <section className={`${styles.teaserVideo} ${styles[text_position]} ${styles[page]} ${styles[theme]}`}>
      <article className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>

          {text && <div className={`${styles.text} ${styles[list_type]}`}><ReactMarkdown>{text}</ReactMarkdown></div>}

          {cta &&
            <div className={styles.cta}>
              <CallToAction cta={cta} />
            </div>
          }
        </div>

        {video_url &&
          <button
            className={`${styles.video} ${show_play_button ? "" : styles.noHover} ${styles[video_size]}`}
            onClick={() => handleToggleModal("video", video_url)}
          >
            <div>
              {show_play_button &&
                <div className={styles.playIcon}>
                  <span>
                    {handleGetIcon("play solid")}
                  </span>
                </div>
              }

              {video_url.includes("vimeo") ?
                <iframe
                  ref={homeVideoRef}
                  title='Whole-person virtual care for all'
                  src={`${video_url}&background=1`}
                  allowFullScreen={true}
                  //width="640"
                  //height="360"
                />
              :
                <video playsInline autoPlay muted loop id="hero-vid">
                  <source src={video_url} type="video/mp4" />
                </video>
              }
            </div>
          </button>
        }
      </article>
    </section>
  )
}
