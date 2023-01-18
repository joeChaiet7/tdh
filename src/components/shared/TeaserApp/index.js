/**
 * TeaserApp
 * Container for text and image of a phone.
 * @typedef {object} Props
 * @property {string} title - The title of the component 
 * @property {string} text_position - The subtitle of the component 
 * @property {string} content - The subtitle of the component
 * @property {Array} list - The data for each tile in the component
 * @property {object} cta - The subtitle of the component
 * @property {object} image - The subtitle of the component
 */

import React from 'react';
import ReactMarkdown from 'react-markdown'

import {
  CallToAction,
  PhoneImage
} from '../../';

import * as styles from './teaserApp.module.scss';

export default function TeaserApp(props) {
  let {
    theme,
    title,
    text_position,
    text,
    list_type,
    showRating,
    rating,
    cta,
    image,
    image_theme,
  } = props;

  return (
    <section className={`${styles.teaserApp} ${styles[theme]} ${styles[text_position]}`}>
      <article className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>

          {showRating &&
            <div className={styles.rating}>
              <div className={styles.stars}>
                <div className={styles.starsOuter}>
                  <div className={styles.starsInner} style={{ width: `${(rating.value / rating.total) * 100}%` }}>
                  </div>
                </div>
              </div>

              <p>{rating.value} out of 5 stars</p>
            </div>
          }

          {text && <div className={`${styles.text} ${styles[list_type]}`}><ReactMarkdown>{text}</ReactMarkdown></div>}

          {cta &&
            <div className={styles.cta}>
              <CallToAction cta={cta} />
            </div>
          }
        </div>

        <div className={styles.image}>
          {image &&
            <PhoneImage
              theme={image_theme}
              image={image.url}
            />
          }
        </div>
      </article>
    </section>
  )
}
