import React, { useState } from 'react';
import useGetIcon from '../../../hooks/useGetIcon';

import * as styles from './accordionTile.module.scss';

export default function AccordionTile(props) {
  const [activeItem, setActiveItem] = useState();

  const { handleGetIcon } = useGetIcon();

  let {
    title,
    subtitle,
    default_image,
    //image,
    items
  } = props;

  function toggleItem(item){
    if(item === activeItem){
      setActiveItem('');
    }else{
      setActiveItem(item);
    }
  }

  return (
    <section className={styles.accordionTile}>
    
      <div className={styles.container}>
        <div className={styles.list}>
          <div className={styles.heading}>
            {title && <div className={styles.title}>{title}</div>}

            {subtitle && <p>{subtitle}</p>}
          </div>

          <ul>
            { items && items.map((item, i) => (
              <li 
                key={item.id} 
                className={`${styles.item} ${activeItem && activeItem.id === item.id ? styles.opened : styles.closed}`}
              >
                <button
                  className={`${styles.itemButton} ${activeItem && activeItem.id === item.id ? styles.active : ''}`}
                  onClick={() => toggleItem(item)}
                  type="button"
                  tabIndex={0}
                > 
                  {item.icon && handleGetIcon(item.icon)}
                  {item.title}
                </button>

                <div className={styles.itemContent}>
                  { item && item.description &&
                    <p>{ item.description }</p>
                  }
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.itemImage}>
          <img 
            src={activeItem ? activeItem.image?.url : default_image?.url}  
            alt={activeItem ? activeItem.image?.alt : "Why trust Teladoc Health?"}
          />
          
          { (activeItem && activeItem.stat) && 
            <div className={`${styles[activeItem.statcolor]}`}>
              <div>{activeItem.stat.value}{activeItem.stat.metric}</div>
              <div>{activeItem.stat.description}</div>
            </div>
          }
        </div>
      </div>
    </section>
  )
}
