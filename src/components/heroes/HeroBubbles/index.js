
/**
 * HeroBubbles
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
import ModalContext from '../../../context/ModalContext';

import { 
  CallToAction,
} from '../../';

//import VideoMP4 from '../../../static/video/test-vid.mp4';

import * as styles from './heroBubbles.module.scss'

export default function HeroBubbles(props) {
  const [vimeoVid, setVimeoVid] = useState();
  const [isPlaying, setIsPlaying] = useState(true);

  const {
    showModal,
  } = useContext(ModalContext)

  const homeVideoRef = useRef();

  let {
    title,
    subtitle,
    text_position,
    images,
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [homeVideoRef])

  return (
    <>       
      <section className={`${styles.heroBubbles} ${styles[text_position]} ${styles[theme]}`}>
        <article className={styles.container}>  
          <div className={styles.content}>
            <div className={styles.heading}>
              { title && <h1>{ title }</h1> }
              { subtitle && <p>{ subtitle }</p> }
            </div>

            { cta && 
              <div className={styles.cta}>
                <CallToAction cta={cta} />
              </div>
            }
          </div>    

          {images && 
            <div className={styles.images}
            >
              {images.map((image, i) => (
                <img key={image.id} className={styles.imageShape} src={image.url} alt={image.alt} />
              ))}
            </div>
          }  
        </article>
      </section>
    </>
  )
}
