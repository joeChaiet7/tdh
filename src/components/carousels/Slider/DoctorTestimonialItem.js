import React, { forwardRef } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import * as styles from './doctorTestimonialItem.module.scss';

const DoctorTestimonialItem = forwardRef(({ item, index, isDisabled, activeIndex }, ref) => (
  <div
    className={styles.slide}
    ref={ref}
    style={{
      pointerEvents: "none",
      cursor: "default",
      //pointerEvents: isDisabled ? "none" : "auto",
      //cursor: isDisabled ? "default" : "pointer"
    }}
  >
    <div className={`${styles.slideContainer} ${isDisabled ? styles.disabled : ''} ${activeIndex === index ? styles.active : styles.inactive}`}>
      {item.image ?
        <div className={styles.slideImage}>
          <img src={item.image.url} alt={item.image.alt} />
        </div>
      :
        <div className={styles.quote}><span /></div>
      }

      <div className={styles.slideContent}>
        <div className={styles.slideDescription}>
          <ReactMarkdown>{item.description}</ReactMarkdown>
        </div>

        <div className={styles.slideTitle}>
          <p>{item.title}</p>
          {item.role && <p>{item.role}</p>}
        </div>
      </div>
    </div>
  </div>
))

export default DoctorTestimonialItem;
