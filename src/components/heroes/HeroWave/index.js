import React from 'react';

import {
  CallToAction
} from '../../';

import * as styles from './heroWave.module.scss';

export default function HeroWave(props) {
  let {
    color,
    title,
    subtitle,
    text_position,
    text_align,
    image,
    cta,
    strapi_component
  } = props;

  let imageUrl = strapi_component ? image[0].localFile.childImageSharp.fluid.src : image.url;

  return (
    <section className={`${styles.heroWave} ${styles[text_position]} ${styles[color]}`}>
      <article className={styles.container}>  
        <div className={styles.content}>
          <div className={`${styles.heading} ${styles[text_align]}`}>
            { title && <h1 className={styles.title}>{ title }</h1> }
            { subtitle && <p>{ subtitle }</p> }
          </div>

          { cta && 
            <div className={styles.cta}>
              <CallToAction cta={cta} />
            </div>
          }
        </div>   

        <div className={styles.image}>
          <img src={imageUrl} alt={image.alt} />
         
        </div>
      </article>

      <svg 
        className={styles.clipPath}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 200"
      >
        <path fillOpacity="1" fill="white" d="M 0 45 C 121.951 44.464 201.16 50.331 328.774 56.199 C 532.122 72.937 678.265 83.048 933.303 88 C 1118.254 88.665 1270.434 80.364 1378.343 60.535 L 1440 50 L 1440 200 L 1360 200 C 1280 200 1120 200 960 200 C 800 200 640 200 480 200 C 320 200 160 200 80 200 L 0 200 Z"></path>
      </svg>
    </section>
  )
}
