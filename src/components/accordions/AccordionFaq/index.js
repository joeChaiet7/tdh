/**
 * Accordion
 * Accordion component for list items
 * @typedef {object} Props
 * @property {Array} items - The items for each list item in the Accordion Component 
 */

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'

import { 
  CallToAction
} from '../../';

import * as styles from './accordionFaq.module.scss';

export default function AccordionFaq(props) {
  const [activeItem, setActiveItem] = useState();

  let {
    title,
    subtitle,
    cta,
    disclaimer,
    items
  } = props;

  function toggleItem(item) {
    if (item === activeItem) {
      setActiveItem('');
    } else {
      setActiveItem(item);
    }
  }

  return (
    <section className={styles.accordionFaq}>
      <div className={styles.container}>
        <div className={styles.heading}>
          {title && <div className={styles.title}>{title}</div>}

          {subtitle && <p>{subtitle}</p>}
        </div>

        <div className={styles.list}>
          <ul>
            {items && items.map((item, i) => (
              <li
                key={item.id}
                className={`${styles.item} ${activeItem && (activeItem.id === item.id) ? styles.opened : styles.closed}`}
              >
                <button
                  className={`${styles.itemButton} ${activeItem && (activeItem.id === item.id) ? styles.active : ""}`}
                  onClick={() => toggleItem(item)}
                  type="button"
                  tabIndex={0}
                >
                  <div className={styles.itemHeading}>
                    {item.title}
                  </div>

                  <svg
                    className={`${styles.itemIcon} ${activeItem && (activeItem.id === item.id) ? styles.opened : styles.closed}`}
                    viewBox="0 0 100 100"
                    width="15"
                    height="15"
                  >
                    <rect className={`${styles.rectangle} ${styles.horizontal}`} y="45" width="100" height="15" rx="10px" ry="10px" strokeLinejoin="round"></rect>
                    <rect className={`${styles.rectangle} ${styles.vertical}`} y="0" x="45" width="15" height="100" rx="10px" ry="10px" strokeLinejoin="round"></rect>
                  </svg>
                </button>

                <div className={styles.itemContent}>

                  {item.description &&
                    <ReactMarkdown>{item.description}</ReactMarkdown>
                  }

                  {item.image &&
                    <div>
                      <img src={item.image.url} alt={item.image.alt} />
                    </div>
                  }

                  {item && item.cta &&
                    <div className={styles.itemCta}>
                      <CallToAction
                        cta={item.cta}
                      />
                    </div>
                  }
                </div>
              </li>
            ))}
          </ul>
          
          {disclaimer && 
            <div className={styles.disclaimer}>
              <ReactMarkdown>{disclaimer}</ReactMarkdown>
            </div>
          }
        </div>
      </div>

      {cta &&
        <div className={styles.cta}>
          <CallToAction
            primary={{
              type: "button",
              text: "Sign in for more FAQs",
              action_type: "link",
              action_url: "https://member.teladoc.com/signin",
              theme: "purple"
            }}
          />
        </div>
      }
    </section>
  )
}
