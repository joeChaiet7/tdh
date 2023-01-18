import React from 'react';
import ReactMarkdown from 'react-markdown'

import {
  CallToAction
} from '../../';

import * as styles from './genericText.module.scss';

export default function GenericText(props) {
  let {
    text,
    text_align,
    disclaimer,
    list_type,
    list_columns,
    theme,
    cta
  } = props;

  function handleColumns(col){
    let colText;

    switch(col){
      case 1:
        colText = "One"
        break;
      case 2:
        colText = "Two"
        break;
      case 3:
        colText = "Three"
        break;
      default:
        colText = 2;
    }
    
    return colText;
  }

  
  return (
    <section className={styles.genericText}>
      <article>
        {text && <div className={`${styles.text} ${styles[text_align]} ${styles[theme]} ${styles[list_type]} ${list_columns ? styles[`col${handleColumns(list_columns)}`] : ""} `}><ReactMarkdown>{text}</ReactMarkdown></div>}

        {cta &&
          <div className={styles.cta}>
            <CallToAction cta={cta} />
          </div>
        }

        {disclaimer &&
          <div className={styles.disclaimer}>
            <ReactMarkdown>{disclaimer}</ReactMarkdown>
          </div>
        }
      </article>
    </section>
  )
}
