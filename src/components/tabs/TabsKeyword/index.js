import React, { useState, useEffect, useRef, useCallback } from 'react';
import useGetIcon from '../../../hooks/useGetIcon';

import {
  TabsMobile
} from '../../';

import * as styles from './tabsKeyword.module.scss';

export default function TabsKeyword(props) {
  const [activeItem, setActiveItem] = useState();
  const [activeIndex, setActiveIndex] = useState();
  //const [menuTarget, setMenuTarget] = useState();
  const [indicatorTarget, setIndicatorTarget] = useState();
  const [titleWidth, setTitleWidth] = useState();

  const titleRef = useRef();
  const indicatorRef = useRef();
  const itemRefs = useRef([]);

   //Add each element to the itemRefs array to be observed
   const addNode = useCallback((node) => itemRefs.current.push(node), []);

  let {
    title,
    subtitle,
    items
  } = props;

  const { handleGetIcon } = useGetIcon();

  useEffect(() => {
    if(items){
      setActiveItem(items[0]);
      setActiveIndex(0);
    }
  }, [items])

  useEffect(() => {
    function setIndicatorPosition(){

      if(activeItem){
        let targetEl = itemRefs.current[activeIndex];

        //Find center of active button
        let target = {}, diff;
        let indicatorLocation = indicatorRef.current.getBoundingClientRect().x;
        let center = targetEl.getBoundingClientRect().x;

        target.start = targetEl.offsetLeft;
        target.width = targetEl.getBoundingClientRect().width;

        //If button center location is less than indicator's position, translate negative, else translate positive
        diff = indicatorLocation - center;

        if (center < indicatorLocation) {
          target.center = indicatorLocation - Math.abs(diff);
        } else {
          target.center = indicatorLocation + Math.abs(diff);
        }

        setIndicatorTarget(target);
      }
    }

   setIndicatorPosition();

   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

  useEffect(() => {
    if(titleRef.current){
      setTitleWidth(titleRef.current.getBoundingClientRect().width);
    }
  }, [titleRef, activeItem])

  function handleActiveItem(e, item, index){
    e.persist();

    //setMenuTarget(e);
    setActiveItem(item);
    setActiveIndex(index);
  }
  
  return (
    <section className={styles.tabsKeyword}>
      <div className={styles.heading}> 
        { title && 
          <div className={styles.title}>
            <div>
              { title }
            </div>
            
            { activeItem && 
              <div className={`${styles.highlight} ${styles.desktop}`} key={activeItem.title} style={{ "--titleWidth": `${titleWidth}px` }}>
                <span ref={titleRef}>
                  {activeItem.title}
                </span>
              </div> 
            }
          </div>        
        }

        { subtitle && <p>{subtitle}</p> }
      </div>

      <div className={styles.desktop}>
        <div className={`${styles.list}`}>  
          { items && items.map((item, i) => (
            <button 
              ref={addNode}
              key={item.id} 
              className={`${activeItem && (item.id === activeItem.id) ? styles.active : ""}`}
              onClick={(e) => handleActiveItem(e, item, i)}>
              <span className={styles.buttonIcon}>{handleGetIcon(item.icon)}</span>
              <span className={styles.buttonTitle}>{item.title}</span>
            </button>
          ))}

          <div 
            ref={indicatorRef} 
            className={styles.indicator} 
            style={{
              "--indicatorInitialLocation": `${indicatorTarget && indicatorTarget.start + 65}px`,
            }} 
          />
        </div>

        { activeItem &&
          <div className={styles.description}>
            <div key={activeItem.id}>
              { activeItem.description }
            </div>
          </div>
        }
      </div>

      <div className={`${styles.list} ${styles.mobile}`}>
        <TabsMobile
          items={items}
        />
      </div>
    </section>
  )
}
