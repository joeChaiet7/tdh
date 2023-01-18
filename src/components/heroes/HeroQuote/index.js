import React from 'react'

import {
  GenericText
} from '../../'

import * as styles from './heroQuote.module.scss'

export default function HeroQuote(props) {
  let {
    title,
    //subtitle,
    text,
    text_position,
    text_align,
    person_name,
    person_role,
    image,
    //cta 
  } = props;

  return (
    <section className={`${styles.heroQuote} ${styles[text_position]}`}>
      <article className={styles.container}>  
        <div className={styles.content}>
          <div className={`${styles.text} ${styles[text_align]}`}>
            {title && <div className={styles.title}>{title}</div>}

            <GenericText text={text} text_align={text_align} />
            <div className={styles.person}>
              <p>{person_name}</p>
              <p>{person_role}</p>
            </div>
          </div>

          <div className={styles.image}>
            {image &&
              <img
                src={image.url}
                alt={image.alt}
              />
            }
          </div>
        </div>
         
      </article>
    </section>
  )
}
