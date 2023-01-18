import React from 'react';

import {
  CallToAction
} from '../../';

import * as styles from './heroBlock.module.scss';

export default function HeroBlock(props) {
  let {
    color,
    title,
    subtitle,
    text_position,
    text_align,
    image,
    showBottomWave,
    cta,
    strapi_component
  } = props;

  let imageUrl = strapi_component ? image[0].localFile.childImageSharp.fluid.src : image.url;

  return (
    <section className={`${styles.heroBlock} ${styles[text_position]} ${styles[color]} ${showBottomWave ? styles.showWave : ""}`}>
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
          { showBottomWave && 
            <svg viewBox="0 0 200 200" preserveAspectRatio="xMinYMin meet">
              <clipPath id="clip" clipPathUnits="objectBoundingBox">
                <path transform="scale(0.002)" d="M 0 450 C 116 450 190 475 323 475 C 412 474 434 452 500 446 L 500 0 L 0 0 Z"></path>
              </clipPath>
            </svg>
          }
        </div>
      </article>
    </section>
  )
}
