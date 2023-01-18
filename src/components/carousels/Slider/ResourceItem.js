import React, { forwardRef } from 'react';
import ReactMarkdown from 'react-markdown';

import * as styles from './resourceItem.module.scss';

const ResourceItem = forwardRef(({ item, index, isDisabled, handleGetIcon, activeIndex }, ref) => {
  return (
    <a
      title={item.title} 
      aria-label={item.title}
      className={styles.slide}
      ref={ref}
      href={item.destination}
      style={{
        pointerEvents: (activeIndex !== index || isDisabled) ? "none" : "auto",
        cursor: (activeIndex !== index || isDisabled) ? "default" : "pointer"
      }}
    >
      <div className={`${styles.slideContainer} ${isDisabled ? styles.disabled : ''} ${activeIndex === index ? styles.active : styles.inactive}`}>
        <div className={styles.slideImage}>
          <img src={item.image.url} alt={item.image.alt} />
        </div>

        <div className={styles.slideContent}>
          <div className={styles.slideType}>
            <p>{handleGetIcon(item.type)} {item.type}</p>
          </div>
          
          <div className={styles.slideTitle}>{item.title}</div>

          <div className={styles.slideDescription}>
            <ReactMarkdown>{item.description}</ReactMarkdown>
          </div>
        </div>

        {item.destination &&
          <div className={styles.slideCta}>
            Learn more {handleGetIcon("arrow forward")}
          </div>
        }
      </div>
    </a>
  )
})

export default ResourceItem;