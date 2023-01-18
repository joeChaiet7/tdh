import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { 
  CallToAction
} from '../../';

import * as styles from './accordionOverlap.module.scss';

export default function AccordionOverlap(props) {
  const [activeItem, setActiveItem] = useState();

  let {
    theme,
    title,
    subtitle,
    disclaimer,
    default_image,
    //image,
    cta,
    cta_title,
    items
  } = props;

  function toggleItem(item){
    setActiveItem('');
    if(item === activeItem){
      setActiveItem('');
    }else{
      setActiveItem(item);
    }
  }

  return (
    <section className={styles.accordionOverlap}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heading}>
            {title && <div className={styles.title}>{title}</div>}

            {subtitle && <p>{subtitle}</p>}
          </div>

          <ul>
            { items && items.map((item, i) => (
              <li 
                key={item.id} 
                className={`${styles.item} ${activeItem && activeItem.id === item.id ? styles.opened : styles.closed} ${styles[theme]}`}
              >
                <button
                  className={`${styles.itemButton} ${activeItem && activeItem.id === item.id ? styles.active : ''}`}
                  onClick={() => toggleItem(item)}
                  type="button"
                  tabIndex={0}
                > 
                  {item.title}

                  <svg 
                    className={`${styles.icon} ${ activeItem && activeItem.id === item.id ? styles.opened : styles.closed }`} 
                    viewBox="0 0 100 100" 
                    width="25" 
                    height="25"
                  >
                    <rect className={`${styles.rectangle} ${styles.horizontal}`} y="42" width="100" height="20" rx="10px" ry="10px" strokeLinejoin="round"></rect>
                    <rect className={`${styles.rectangle} ${styles.vertical}`} y="0" x="42" width="20" height="100" rx="10px" ry="10px" strokeLinejoin="round"></rect>
                  </svg>
                </button>

                <div className={styles.itemContent}>
                  { item && item.description &&
                    <p>{ item.description }</p>
                  }
                </div>
              </li>
            ))}
          </ul>

          { cta && 
            <div className={styles.cta}>
              <CallToAction
                title={cta_title}
                cta={cta}
              />
            </div>
          }
        </div>

        <div className={styles.right}>
          { ((!activeItem || (activeItem && !activeItem.image)) && default_image) &&
            <div className={`${styles.itemImage}`}>
              <img 
                src={default_image.url}  
                alt={default_image.alt}
                aria-hidden="true" 
              />
            </div>
          }
          
          { (activeItem && activeItem.image) && 
            <div className={`${styles.itemImage}`}>
              <img 
                src={activeItem.image.url}  
                alt={activeItem.image.alt}
                aria-hidden="true" 
              />
            </div>
          }

          { (activeItem && activeItem.stat) && 
            <div className={`${styles.itemStat} ${styles[activeItem.stat.color]}`}>
              <div className={styles.itemValue}>{activeItem.stat.value}{activeItem.stat.metric}</div>
              <div className={styles.itemDesc}>{activeItem.stat.description}</div>
            </div>
          }
        </div>
      </div>

      {disclaimer &&
        <div className={styles.disclaimer}>
          <ReactMarkdown>{disclaimer}</ReactMarkdown>
        </div>
      }
    </section>
  )
}
