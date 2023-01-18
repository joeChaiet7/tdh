/**
 * TabsServices
 * AEM component
 * Horizontally oriented tabs component.
 * @typedef {object} Props
 * @property {string} title - The title of the Tabs Component 
 * @property {string} subtitle - The subtitle of the Tabs Component 
 * @property {Array} items - The items for each tab in the Tabs Component 
 */

import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown'

import { 
  CallToAction,
  PhoneImage,
  TabsMobile,
  SecondaryCta
} from '../../';

import * as styles from './tabsServices.module.scss';

export default function TabsServices(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState();
  const [tabClicked, setTabClicked] = useState(false);
  const [progress, setProgress] = useState(0);

  const contentRef = useRef();

  let {
    title,
    subtitle,
    items,
    secondaryCta,
    strapi_component
  } = props;


  const handleUpdateTab = (item, index) => {
    if(contentRef.current){
      contentRef.current.classList.remove("active");
      
      setTimeout(() => {
        setActiveTab(item);
        setCurrentIndex(index);
        contentRef.current.classList.add("active");
      }, 10)
    }
  }

  useEffect(() => {    
    if(items){
      handleUpdateTab(items[currentIndex], currentIndex)
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  useEffect(() => {
    if(items){
      let interval;

      if(!tabClicked){
        clearInterval(interval)
        setProgress(0);
        let amount = 0;
        interval = setInterval(() => {
          if(amount >= 100){
            clearInterval(interval)
            setProgress(0)

            if(currentIndex === items.length - 1){
              setCurrentIndex(0);
              handleUpdateTab(items[0], 0)
            }else{
              setCurrentIndex(prevState => prevState + 1);
              handleUpdateTab(items[currentIndex + 1], currentIndex + 1)
            }
          }else{
            amount += 10;
            setProgress(prevCount => prevCount + 10);
          }
        }, 1000)
      }else{
        setProgress(100)
      }

      return () => clearInterval(interval);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  return (
    <section className={styles.tabsServices}>
      <div className={styles.heading}> 
        {title && <div className={styles.title}>{title}</div>}
        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className={styles.content} ref={contentRef}>
        <div className={`${styles.list} ${styles.desktop}`}>
          <ul>
            { items && items.map((item, i) => (
              <li 
                key={item.id} 
                className={`${styles.listItem} ${activeTab && activeTab.id === item.id ? styles.active : ""}`}
              >
                <button 
                  onClick={() => {
                    handleUpdateTab(item, i);
                    setTabClicked(true);
                  }}
                >
                  { item.title }
                </button>
              </li>
            ))}
        
          </ul>
        </div>

        { activeTab && 
          <div 
            className={styles.tabItem} 
          >
            <div className={styles.itemImage} key={`image-${activeTab.id}`}>
              <PhoneImage
                theme={activeTab.theme}
                image={strapi_component ? activeTab.image.localFile.childImageSharp.fluid.src :  activeTab.image.url}
                alt={activeTab.image.alt}
              />
            </div>

            <div className={styles.itemBody} key={`body-${activeTab.id}`}>
              {!tabClicked &&
                <div className={styles.timer}>
                  <div 
                    className={styles.timerInner} 
                    style={{ width: `${progress}%` }} 
                  />
                </div>
              }

              <div className={styles.itemTitle}>{ activeTab && activeTab.title }</div>

              { activeTab && <ReactMarkdown>{activeTab.description}</ReactMarkdown>}
              
              { activeTab && 
                <div className={styles.itemCta}>
                  <CallToAction 
                    cta={activeTab.cta}
                  />
                </div>
              }

              {activeTab && activeTab.additional_text && 
                <div className={styles.additional}>
                  <ReactMarkdown>{activeTab.additional_text}</ReactMarkdown>
                </div>
              }
            </div>
          </div>
        }

      </div>

      <div className={`${styles.list} ${styles.mobile}`}>
        <TabsMobile
          items={items}
        />
      </div>

      {secondaryCta &&
        <SecondaryCta {...secondaryCta} />
      }
      
    </section>
    )
}
 