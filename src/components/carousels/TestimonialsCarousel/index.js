/**
 * Testimonials Carousel
 * Paginated carousel for a number of tiles.
 * @typedef {object} Props
 * @property {string} title - The title of the Carousel Component 
 * @property {string} subtitle - The subtitle of the Carousel Component 
 * @property {Array} items - The items for each tile in the Carousel Component 
 */

import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown'
import useGetIcon from '../../../hooks/useGetIcon';

import {
  CallToAction
} from '../../';

import * as styles from './testimonialsCarousel.module.scss'

const DoctorItem = ({ item }) => {
  let { handleGetIcon } = useGetIcon();

  return (
    <article 
      className={`${styles.slideWrapper}`}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.subtitle}>{item.subtitle}</p>
          <div className={styles.title}>{item.title}</div>
          <p className={styles.role}>{item.role}</p>
          <p>{item.description}</p>

        {item.cta && 
          <a href={item.cta[0].action_url}>
            {item.cta[0].text}
            {handleGetIcon("arrow forward")}
          </a>
        }
        </div>
      </div>
    </article>
  )
};

export default function TestimonialsCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState();

  const forwardRef = useRef();
  const backRef = useRef();
  const indicatorsRef = useRef();

  let { handleGetIcon } = useGetIcon();

  let {
    title,
    subtitle,
    carouselHeading,
    items,
    additional_text,
    additional_cta
  } = props;

  /**
 * Handle responsive adjustments on window resize.
 */
  /*   useEffect(() => {
      
    //Calculate margin-left
    function findMargin(){
      let currentEl;
      if(activeIndex >= 0){
        currentEl = itemRefs.current[activeIndex];
        setContentPosition({
          top: currentEl.offsetTop, 
          left: currentEl.getBoundingClientRect().left + 48, 
          height: currentEl.getBoundingClientRect().height
        }) 
          //x position plus __content padding-left, and y position - padding-top + extra spacing
      }
    }

    //Add event listener for window resize
    window.addEventListener("resize", findMargin)

    //findMargin()
    setActiveItem(items[activeIndex]);


    return () => window.removeEventListener("resize", findMargin)
  }, []);  */

  useEffect(() => {
    setActiveItem(items[activeIndex]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex])

  const updateIndex = (newIndex) => {
    if(newIndex < 0){
      newIndex = items.length - 1;
    }else if(newIndex >= items.length){
      newIndex = 0;
    }

    setActiveIndex(newIndex);
    setActiveItem(items[newIndex]);
  }

  return (
    <section 
      className={`${styles.carousel} ${styles.testimonials}`}
      style={{
        '--itemCount': items && items.length
      }}        
    >

      {(title || subtitle) && 
        <div className={styles.heading}>
          {title && <div className={styles.title}>{title}</div>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      }

      {carouselHeading && 
        <div className={styles.carouselHeading}>{carouselHeading}</div>
      }

      <div 
        className={styles.testimonialsItem}
      >
        { activeItem && 
          <div className={styles.activeImage} key={activeItem.id}>
            <img src={activeItem.image.url} alt={activeItem.name}/>
          </div>
        }

        <div className={styles.itemInner}>
          {items && items.length > 1 && 
            <div 
              className={styles.navigation}
            >
              <div className={styles.buttons}>
                <button
                  ref={backRef}
                  className={styles.back} 
                  onClick={() => updateIndex(activeIndex - 1)}
                  aria-label="Go to previous carousel item"
                >
                  {handleGetIcon("arrow back")}
                </button>
                  
                <button
                  ref={forwardRef}
                  className={styles.forward} 
                  onClick={() => updateIndex(activeIndex + 1)}
                  aria-label="Go to next carousel item"
                >
                  {handleGetIcon("arrow forward")}
                </button>
              </div>

              { items && items.length > 1 && 
                <div 
                  className={styles.indicators}
                  ref={indicatorsRef}
                >
                  { items && items.map((item, i) => 
                    <button 
                      key={item.id}
                      className={`${styles.indicatorItem} ${activeIndex === i ? styles.active : ''}`}
                      onClick={() => updateIndex(i)}
                      aria-label="Change carousel slide"
                    >
                    </button>
                  )}
                </div>
              }
            </div>
          }
          { activeItem && 
            <DoctorItem 
              key={activeItem.id}
              item={activeItem} 
              activeIndex={activeIndex}
              //ref={addNode}
            />
          }
        </div>
        
      </div>

      {additional_text && 
        <div className={styles.additional}>
          <ReactMarkdown>{additional_text}</ReactMarkdown>

          {additional_cta &&
            <div className={styles.additionalCta}>
              <CallToAction cta={additional_cta} />
            </div>
          }
        </div>
      }
    </section>
  )
}
