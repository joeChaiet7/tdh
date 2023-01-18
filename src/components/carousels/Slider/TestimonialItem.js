import React, { forwardRef } from 'react';
import useGetIcon from '../../../hooks/useGetIcon';

import {
  CallToAction
} from '../../'

import * as styles from './testimonialItem.module.scss';

const TestimonialItem = forwardRef(({ item, index, isDisabled, activeIndex, handleToggleModal }, ref) => {
  let { handleGetIcon } = useGetIcon();

  return (
    <article
      className={styles.slide}
      ref={ref}
    >
      <div className={`${styles.slideContainer} ${isDisabled ? styles.disabled : ''} ${activeIndex === index ? styles.active : styles.inactive}`}>

        <div className={styles.slideContent}>
          <p className={styles.slideSubtitle}>{item.subtitle}</p>
          <div className={styles.slideTitle}>{item.title}</div>

          <div className={styles.slideDescription}>
            <div><span/>{item.description}<span/></div>
          </div>

          {item.cta &&
            <CallToAction cta={item.cta} />
          }
        </div>

        <button
          className={`${styles.slideImage}`}
          onClick={() => handleToggleModal("video", item.video_url)}
          disabled={!item.video_url}
          aria-label={item.video_url ? "Play the testimonial video" : item.title}
        >
          {item.video_url && 
            <>
              <div className={styles.overlay} />
              <div className={styles.playBtn}>
                {handleGetIcon("play solid")}
              </div>
            </>
          }
          <img src={item.image.url} alt={item.image.alt} loading='lazy' />
        </button>
       
      </div>
    </article>
  )}
);

export default TestimonialItem;
