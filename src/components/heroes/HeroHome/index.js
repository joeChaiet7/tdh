/**
 * HeroHome
 * Child component
 * Hero component with an image in a circle shape positioned in the top right corner.
 * @typedef {object} Props
 * @property {string} title - The title of the Hero Component 
 * @property {string} subtitle - The subtitle of the Hero Component 
 * @property {string} text_position - The horizontal positioning of the Hero text
 * @property {string} text_align - The text alignment of the Hero Component
 * @property {string} image - The image used in the Hero Component
 * @property {object} cta - The call to action used in the Hero Component 
 */

import React, { useState, useEffect } from 'react';

import { 
  CallToAction
} from '../../';

import * as styles from  './heroHome.module.scss';

export default function HeroHome(props) {
  const [activeImage, setActiveImage] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideShowStarted, setSlideshowStarted] = useState(false);

  let {
    title,
    subtitle,
    text_position,
    cta,
    image,
    images,
    strapi_component
  } = props;

  let hero_images = strapi_component ? image : images;

  useEffect(() => {
    setActiveImage(hero_images[0])
    setCurrentIndex(0)
  }, [hero_images])

  useEffect(() => {
    let interval;

    clearInterval(interval)
    let amount = 0;

    interval = setInterval(() => {
      if(amount >= 100){
        clearInterval(interval)
        
        if(currentIndex === hero_images.length - 1){
          setCurrentIndex(0);
          setActiveImage(hero_images[0])
        }else{
          setCurrentIndex(prevState => prevState + 1);
          setActiveImage(hero_images[currentIndex + 1])
        }
      }else{
        amount += 20;
      }
    }, 1000)
    
    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImage])

  useEffect(() => {
    if(currentIndex > 0){
      setSlideshowStarted(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  function handleActiveStyle(i, imageId, activeImageId){
    if(!slideShowStarted && i === 0){
      return styles.start
    }

    if(activeImageId === imageId){
      return styles.active
    }else{
      return styles.inactive
    }
  }

  return (
    <section className={`${styles.heroHome} ${styles[text_position]}`}>
      <article className={styles.container}>      
        { activeImage &&
          <div className={styles.images}>
            
            {hero_images && hero_images.map((image, i) => {

              let imageUrl = strapi_component ? image.localFile.childImageSharp.fluid.src : image.url
              //let imageAlt = strapi_component ? "" : image.alt
              let imageId = strapi_component ? image.localFile.id : image.id;
              let activeImageId = strapi_component ? activeImage.localFile.id : activeImage.id;

              return (
                <div 
                  key={imageId} 
                  className={`${styles.imageShape} ${handleActiveStyle(i, imageId, activeImageId)}`}
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                    zIndex: hero_images.length + 5 - i
                  }}
                />
              )
            })}
          </div>
        }

        <div className={styles.content}>
          <div>
            { title && <h1 className={styles.title}>{ title }</h1> }
            { subtitle && <p>{ subtitle }</p> }
          </div>

          { cta && 
            <div className={styles.cta}>
              <CallToAction cta={cta} />
            </div>
          }
        </div> 

        {/*<div className={styles.pavers}>
          <img src={Pavers} alt="Teladoc Health pavers" />
          <img src={Pavers} alt="Teladoc Health pavers" />
        </div>*/}

      </article>
    </section>
  )
}