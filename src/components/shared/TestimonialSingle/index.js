import React from 'react'

import { 
  CallToAction
} from '../../';

import * as styles from './testimonialSingle.module.scss';

export default function TestimonialSingle(props) {
  let {
    subtitle,
    title,
    text,
    cta,
    image
  } = props;
  return (
    <section className={styles.testimonialSingle}>
      <article className={styles.container}>
        <div className={styles.image}>
          <img src={image.url} alt={image.alt} />
        </div>
        
        <div className={styles.content}>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>
            <p>{text}</p>
          </div>

          <div className={styles.cta}>
            <CallToAction primary={cta}/>
          </div>
        </div>
      </article>
    </section>
  )
}
