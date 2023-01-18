import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  CallToAction
} from '../../';

import * as styles from './quote.module.scss';

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
    <section className={`${styles.quote} ${styles[text_position]} ${styles[color]}`}>
      <article className={styles.container}>
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
      </article>
    </section>
  )
}
