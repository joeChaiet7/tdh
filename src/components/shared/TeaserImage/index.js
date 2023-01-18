/**
 * Teaser (Teaser v3)
 * AEM component
 * Container for text and image.
 * @typedef {object} Props
 * @property {string} title - The title of the component 
 * @property {string} text_position - The subtitle of the component 
 * @property {string} content - The subtitle of the component
 * @property {Array} list - The data for each tile in the component
 * @property {object} cta - The subtitle of the component
 * @property {object} image - The subtitle of the component
 */

import React from 'react';

import { 
  CallToAction,
  GenericText
} from '../../';

import * as styles from './teaserImage.module.scss';

export default function TeaserImage(props) {
  let {
    title,
    subtitle,
    text_position,
    text_align,
    text,
    list_type,
    list_columns,
    cta,
    image,
    image_position,
    page
  } = props;

  return (
    <section className={`${styles.teaserImage} ${styles[text_position]} ${styles[image_position]} ${styles[page]}`}>
      <article className={styles.container}>
        <div className={styles.content}>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <div className={styles.title}>{title}</div>
          
          {text && 
            <div className={`${styles.text} ${styles[text_align]}`}>
              <GenericText text={text} list_type={list_type} list_columns={list_columns} />
            </div>
          }

          {cta &&
            <div className={styles.cta}>
              <CallToAction cta={cta} />
            </div>
          }
        </div>

        <div className={styles.image}>
          {image &&
            <img
              src={image.url}
              alt={image.alt}
            />
          }
        </div>
      </article>
    </section>
  )
}
