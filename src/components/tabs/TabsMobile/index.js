/**
 * TabsMobile
 * Tabs component used for mobile
 * @typedef {object} Props
 * @property {Array} items - The data for each tab in the Tabs Component 
 */

import React, { useState } from 'react';
import useGetIcon from '../../../hooks/useGetIcon';

import { 
  CallToAction
} from '../../';

import * as styles from './tabsMobile.module.scss';

export default function TabsMobile({ items }) {
  const [activeTab, setActiveTab] = useState();

  const { handleGetIcon } = useGetIcon();

  function toggleItem(item){
    if(item === activeTab){
      setActiveTab('');
    }else{
      setActiveTab(item);
    }
  }

  return (
    <ul className={styles.tabsMobile}>
      { items && items.map((item, i) => (
        <li 
          key={item.id} 
          className={`${styles.listItem} ${activeTab && activeTab.id === item.id ? styles.opened : styles.closed}`}
        >
          <button
            className={`${styles.button} ${activeTab && activeTab.id === item.id ? styles.active : ''}`}
            onClick={() => toggleItem(item)}
            type="button"
            tabIndex={0}
          >
            <div className={styles.title}>
              {item.icon && handleGetIcon(item.icon)}
              { item.title }
            </div>

            <svg 
              className={`${styles.itemIcon} ${activeTab && activeTab.id === item.id ? styles.opened : styles.closed}`} 
              viewBox="0 0 100 100" 
              width="15" 
              height="15"
            >
              <rect className={`${styles.rectangle} ${styles.horizontal}`} y="45" width="100" height="15" rx="10px" ry="10px" strokeLinejoin="round"></rect>
              <rect className={`${styles.rectangle} ${styles.vertical}`} y="0" x="45" width="15" height="100" rx="10px" ry="10px" strokeLinejoin="round"></rect>
            </svg>
          </button>

          <div className={styles.content}>

            { item && item.description &&
              <p>{ item.description }</p>
            }

            { item && item.image && typeof item.image !== 'object' &&
              <div className={styles.image}>
                <img src={item.image} alt={item.imageAlt} />
              </div>
            }

            { item && item.cta &&
              <div className={styles.cta}>
                <CallToAction 
                  cta={item.cta}
                />
              </div>
            }
          </div>
        </li>
      ))}
    </ul>
  )
}
 