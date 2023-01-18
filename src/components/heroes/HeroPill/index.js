
/**
 * HeroPill
 * Hero component with an image in a pill shape.
 * @typedef {object} Props
 * @property {string} title - The title of the Hero Component 
 * @property {string} subtitle - The subtitle of the Hero Component 
 * @property {string} text_position - The horizontal positioning of the Hero text
 * @property {string} text_align - The text alignment of the Hero Component
 * @property {string} image - The image used in the Hero Component
 * @property {object} cta - The call to action used in the Hero Component 
 */

import React, { useContext, useState, useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import useGetIcon from '../../../hooks/useGetIcon';

import { 
  CallToAction
} from '../../';

import ModalContext from '../../../context/ModalContext';

//import VideoMP4 from '../../../static/video/test-vid.mp4';

import * as styles from './heroPill.module.scss'

export default function HeroPill(props) {
  const [vimeoVid, setVimeoVid] = useState();
  const [isPlaying, setIsPlaying] = useState(true);

  let { handleGetIcon } = useGetIcon();

  const {
    showModal,
    handleToggleModal
  } = useContext(ModalContext)

  const homeVideoRef = useRef();

  let {
    title,
    subtitle,
    text_position,
    image,
    video_url,
    cta,
    theme
  } = props;
  
  function toggleVimeoPlay(){
    if(vimeoVid){
      if(!isPlaying){
        vimeoVid.play().then(function(){
          setIsPlaying(true);
        })
      }else{
        vimeoVid.pause().then(function(){
          setIsPlaying(false);
        })
      }
    }
  }

  useEffect(() => {
    toggleVimeoPlay();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal])

  useEffect(() => {
    if(homeVideoRef.current){
      const vimeoPlayer = new Player(homeVideoRef.current);
      setVimeoVid(vimeoPlayer)
    }
  }, [homeVideoRef])

  return (
    <>       
      <section className={`${styles.heroPill} ${styles[text_position]} ${styles[theme]}`}>
        <article className={styles.container}>  
          <div className={styles.content}>
            <div>
              { title && <h1>{ title }</h1> }
              { subtitle && <p>{ subtitle }</p> }
            </div>

            { cta && 
              <div className={styles.cta}>
                <CallToAction cta={cta} />
              </div>
            }
          </div>    

          {image && 
            <div className={styles.image}
            >
              <img src={image.url} alt={image.alt} />
            </div>
          }  

          {video_url && 
            <button 
              className={styles.video}
              onClick={() => handleToggleModal("video", video_url)}
            >
              <div className={styles.imageInner}>
                <div className={styles.playIcon}>
                  <span>
                    {handleGetIcon("play solid")}
                  </span>
                </div>

                <iframe
                  ref={homeVideoRef}
                  title='Whole-person virtual care for all'
                  src={`${ video_url }?autoplay=1&loop=1&autopause=0&muted=1&controls=0&sidedock=0`}
                  frameBorder={0}
                  allowFullScreen={true}
                  width="640"
                  height="360"
                />

                {/*<video playsInline autoPlay muted loop id="hero-vid">
                  <source src={VideoMP4} type="video/mp4" />
                </video>*/}
              </div>
            </button>
          }
        </article>
      </section>
    </>
  )
}
