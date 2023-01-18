import React, { forwardRef } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import CallToAction from '../../shared/CallToAction';

import * as styles from './testimonialCard.module.scss';

const TestimonialCard = forwardRef(({ item, index, isDisabled, activeIndex }, ref) => (
  
  <div
    className={styles.slide}
    ref={ref}
    style={{
      pointerEvents: item.destination || !isDisabled ? "auto" : "none",
      //cursor: item.destination || !isDisabled ? "pointer" : "default"
    }}
  >
    <div className={`${styles.slideContainer} ${isDisabled ? styles.disabled : ''} ${activeIndex === index ? styles.active : styles.inactive}`}>
      <div className={styles.slideContent}>
        {item.image ?
          <div className={styles.slideImage}>
            <img src={item.image.url} alt={item.image.alt} />
          </div>
        :
          <div className={styles.quote}><span /></div>
        }
    
        <div className={styles.slideDescription}>
          <ReactMarkdown>{item.description}</ReactMarkdown>
        </div>
      </div>

      <div className={styles.slideTitle}>
        <p>{item.name}</p>
        {item.role && <p className={styles.role}>{item.role}</p>}
        {item.company && <p className={styles.company}>{item.company}</p>}

        {item.destination &&
          <div className={styles.cta}>
            <CallToAction
              cta={
                [
                  {
                    type: "anchor",
                    text: "Read more",
                    icon: "arrow forward",
                    icon_position: "end",
                    action_type: "link",
                    action_url: item.destination,
                    theme: "transparent"
                  }
                ]
              }
            />
          </div>
        }
      </div>
    </div>
  </div>
))

export default TestimonialCard;