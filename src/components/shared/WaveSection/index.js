import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  CallToAction
} from '../../';

import * as styles from './waveSection.module.scss';

export default function WaveSection(props) {
  let {
    color,
    title,
    text,
    text_position,
    text_align,
    image,
    image_caption,
    cta,
    strapi_component
  } = props;

  let imageUrl = strapi_component ? image[0].localFile.childImageSharp.fluid.src : image.url;

  return (
    <section className={`${styles.waveSection} ${styles[text_position]} ${styles[color]}`}>
      <article className={styles.container}>
        <svg className={styles.waveTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M 0 45 C 121.951 45.536 201.16 39.669 328.774 33.801 C 532.122 17.063 678.265 6.952 933.303 2 C 1118.254 1.335 1270.434 9.636 1378.343 29.465 L 1440 40 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 Z"></path></svg>  

        <div className={styles.content}>
          <div className={`${styles.heading} ${styles[text_align]}`}>
            { title && <h1 className={styles.title}>{ title }</h1> }

            { text && 
              <div className={styles.quotation}>
                <ReactMarkdown>{text}</ReactMarkdown>            
              </div>
            }
          </div>

          { cta && 
            <div className={styles.cta}>
              <CallToAction cta={cta} />
            </div>
          }
        </div>   

        <div className={styles.image}>
          {image_caption &&
            <div className={styles.caption}>
              <ReactMarkdown>{image_caption}</ReactMarkdown>
            </div>
          }
          <img src={imageUrl} alt={image.alt} />
        </div>
        <svg className={styles.waveBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#fff" fillOpacity="1" d="M 0 225 C 121.951 224.464 201.16 230.331 328.774 236.199 C 532.122 252.937 678.265 263.048 933.303 268 C 1118.254 268.665 1270.434 260.364 1378.343 240.535 L 1440 230 L 1440 280 L 1360 280 C 1280 280 1120 280 960 280 C 800 280 640 280 480 280 C 320 280 160 280 80 280 L 0 280 Z"></path></svg>
      </article>
    </section>
  )
}
