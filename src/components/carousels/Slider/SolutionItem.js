import React, { forwardRef } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import {
  CallToAction
} from '../../'

import * as styles from './solutionItem.module.scss';

const SolutionItem = forwardRef(({ item, index, isDisabled, activeIndex }, ref) => (
  <a
    title={item.title} 
    aria-label={item.title}
    className={styles.slide}
    ref={ref}
    href={item.destination}
    style={{
      pointerEvents: "none",
      cursor: "default",
      //pointerEvents: isDisabled ? "none" : "auto",
      //cursor: isDisabled ? "default" : "pointer"
    }}
  >
    <div className={`${styles.slideContainer} ${isDisabled ? styles.disabled : ''} ${activeIndex === index ? styles.active : styles.inactive}`}>
      <div className={styles.slideImage}>
        <img src={item.image.url} alt={item.image.alt} />
      </div>

      <div className={styles.slideContent}>
        <div className={styles.slideTitle}>{item.title}</div>

        <div className={styles.slideDescription}>
          <ReactMarkdown>{item.description}</ReactMarkdown>
        </div>
      </div>

      {item.cta &&
        <div>
          <CallToAction cta={item.cta} />
        </div>
      }
    </div>
  </a>
))

export default SolutionItem;
