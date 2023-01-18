import React, { forwardRef } from 'react';
import useGetIcon from '../../../hooks/useGetIcon';

import {
  CallToAction
} from '../../'

import * as styles from './caseStudyItem.module.scss';

const CaseStudyItem = forwardRef(({ item, index, isDisabled, activeIndex, handleToggleModal }, ref) => {
  let { handleGetIcon } = useGetIcon();

    return (
      <article
        className={styles.slide}
        ref={ref}
      >
        <div className={`${styles.slideContainer} ${isDisabled ? styles.disabled : ''} ${activeIndex === index ? styles.active : styles.inactive}`}>

          <div className={styles.slideContent}>
            <div>
              <p className={styles.slideSubtitle}>{item.subtitle}</p>
              <div className={styles.slideTitle}>{item.title}</div>

              {item.description && 
                <div className={styles.slideDescription}>
                  <div><span/>{item.description}<span/></div>
                </div>
              }
            </div>

            {item.cta &&
              <div className={styles.cta}>
                <CallToAction cta={item.cta} />
              </div>
            }
          </div>

          <button
            className={styles.slideImage}
            onClick={() => handleToggleModal("video", item.video_url)}
            disabled={!item.video_url}
            aria-label={`View the ${item.title} case study`}
          >
            {item.video_url && 
              <>
                <div className={styles.overlay} />
                <div className={styles.playBtn}>
                  {handleGetIcon("play solid")}
                </div>
              </>
            }

            <img src={item.image.url} alt={item.image.alt} loading='lazy' aria-hidden={true} />
          </button>
        </div>

      </article>
    )
  }
);

export default CaseStudyItem;
