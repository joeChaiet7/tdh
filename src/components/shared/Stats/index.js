
import React from 'react';
import useGetIcon from '../../../hooks/useGetIcon';
import ReactMarkdown from 'react-markdown';

import { 
  CallToAction,
  GenericText
} from '../../';

import * as styles from './stats.module.scss';

export default function Stats(props) {
  let {
    theme,
    text,
    text_align,
    items,
    image,
    cta,
    disclaimer
  } = props;

  const { handleGetIcon } = useGetIcon();

  return (
    <section className={styles.stats}>
      <article className={`${styles.container} ${image ? "" : styles.noImage}`}>
        <div className={styles.left}>
          <GenericText
            theme={theme}
            text={text}
            text_align={text_align}
          />
          
          <div className={`${styles.items} ${items && items.length > 3 ? styles.twoColumn : styles.threeColumn}`}>
            {items && items.map((item, i) => (
              <div key={item.id} className={`${styles.item} ${styles[item.type]}`}>
                <div className={`${styles.itemTitle} ${styles[item.theme]}`}>
                  {item.type === 'stat' && 
                    <>
                      <div className={styles.itemStat}>
                        <span>{item.stat_value.toLocaleString()}</span>
                        <span className={`${item.stat_metric === "$" ? styles.dollar : styles.metricEnd} ${item.stat_metric.length > 3 ? styles.smallText : ""}`}>{item.stat_metric}</span>
                      </div>
                      <div className={`${styles.itemShape} ${styles[item.bubble_color]}`} />
                    </>
                  }
                  
                  {item.type === 'icon' && 
                    <div className={styles.itemIcon}>{handleGetIcon(item.icon)}</div>
                  }

                </div>
                <div className={`${styles.itemText} ${styles[item.theme]}`} lang="en">{item.description}</div>
              </div>
            ))}
          </div>
          
          {cta && 
            <div className={styles.cta}>
              <CallToAction
                cta={cta}
              />
            </div>
          }
        </div>

        {image && 
          <div className={styles.right}>
            <img src={image.url} alt={image.alt} aria-hidden={true} />
          </div>
        }
      </article>
      
      {disclaimer &&
        <div className={`${styles.disclaimer} ${styles[theme]}`}>
          <ReactMarkdown>{disclaimer}</ReactMarkdown>
        </div>
      }
    </section>
  )
}
