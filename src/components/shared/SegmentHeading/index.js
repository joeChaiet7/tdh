import React from 'react';
import ReactMarkdown from 'react-markdown'

import * as styles from './segmentHeading.module.scss';

const SegmentHeading = React.forwardRef((props, ref) => {
  let {
    type,
    text,
    showHeading
  } = props;
  
  return (
    <section 
      ref={ref}
      className={`${styles.segmentHeading} ${styles[type]} ${showHeading ? styles.active : ""}`}
    >
      <article>
        <div className={`${styles.text} ${styles[text.alignment]}`}><ReactMarkdown>{text.text}</ReactMarkdown></div>

        {type === "fill" && 
          <div className={styles.circle} />
        }
      </article>
    </section>
  )
})

export default SegmentHeading;