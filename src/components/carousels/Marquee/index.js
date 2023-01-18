import React from 'react';

import { 
  CallToAction,
  SecondaryCta
} from '../../';

import * as styles from './marquee.module.scss';

export default function Marquee(props) {
  let {
    title,
    items,
    cta,
    cta_title,
    secondaryCta
  } = props;

  return (
    <div style={{ padding: "2rem 0" }}>
      {title && 
        <div className={styles.heading}>
          <div className={styles.title}>{title}</div>
        </div>
      }

      {cta && 
        <div className={styles.cta}>
          <CallToAction title={cta_title} cta={cta} />
        </div>
      }

      <section 
        className={`${styles.marquee} ${styles.awards}`}
        style={{
          '--itemCount': items.length,
          '--slidesInView': 4
        }}        
      >
       
        <div className={styles.container}>
          {items && items.map((item, i) => (
            <div key={item.id} className={styles.slide}>
              <img src={item.image.url} alt={item.image.alt} />
            </div>
          ))}
          
          {/* Repeat */}
          {items && items.map((item, i) => (
            <div key={`repeat-%${item.id}`} className={styles.slide}>
              <img src={item.image.url} alt={item.image.alt} />
            </div>
          ))}
        </div>
      </section>
      
      {secondaryCta &&
        <SecondaryCta {...secondaryCta} />
      }
    </div>
  )
}
