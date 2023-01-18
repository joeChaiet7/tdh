import React, { useRef, useState, useCallback, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import ScrollContext from '../../../context/ScrollContext';

import {
  StickyView,
  HalfCircle,
  Circle,
  Drop,
  CallToAction
} from '../..';

import * as styles from './verticalCarousel.module.scss';

const BezelImage = "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/phones/phone_bezel-v2.png";

export default function VerticalCarousel(props) {
  const [activeItem, setActiveItem] = useState();
  const [scrollingElement, setScrollingElement] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [popupState, setPopupState] = useState();
  const [popupImage, setPopupImage] = useState();

  const imageRefs = useRef([]);
  const sliderRef = useRef();
  const carouselRef = useRef();

  let { 
    caption,
    items
  } = props;

  const addNode = useCallback((node) => imageRefs.current.push(node), []);

  const itemHeight = 2000;

  function scrollingElRef(ref){
    setScrollingElement(ref);
  }

  useEffect(() => {
    scrollingElRef(sliderRef)
  }, [sliderRef])

  useEffect(() => {
    if(activeItem){
      updateIndex(activeItem.id)
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem])

  const updateIndex = (newIndex) => {
    let carousel = carouselRef.current,
    currentEl = imageRefs.current[activeIndex];
    
    if(newIndex < 0){
      newIndex = 0;
    }else if(newIndex >= items.length){
      newIndex = items.length - 1;
    }

    //Get slide width + gap width
    let elWidth = currentEl.getBoundingClientRect().width;

    //Use scrollLeft to move the new element into view
    carousel.scrollLeft = elWidth * newIndex;
    setActiveIndex(newIndex);
  }

  useEffect(() => {
    if(activeItem){
      setPopupState('shrink')

      let timer = setTimeout(() => {
        setPopupImage(activeItem.popup_image);
        setPopupState('grow')
      }, 1200)
  
      return () => clearTimeout(timer)
    }   
  }, [activeItem])

  function handleTheme(theme){
    if(theme === "specialty"){
      return
    }

    if(theme === "chronic"){
      //RGB(202, 1, 190)
      return "#ca01be"
    }

    if (theme === "primary-care"){
      //RGB(98, 64,232)
      return "#6240e8"
    }

    if(theme === "mental-health"){
      //RBG(15, 173, 38)
      return "#0fad26"
    }

    if(theme === "employers"){
      return "#6240E8";
    }

    //RGB(53, 31, 101)
    return "#351f65"
  }

  return (
    <ScrollContext.Provider value={{ scrollingElement }}>
      <section className={styles.verticalCarousel} ref={sliderRef}>
        <div className={styles.container}>
          <div className={styles.left} style={{ height: `${items.length * itemHeight}px`}}>
            <div>
              <div className={styles.carousel} ref={carouselRef}>
                {items && items.map((item, i) => (
                  <React.Fragment key={item.id}>
                    <img 
                      src={item.image.url} 
                      alt={item.title} 
                      ref={addNode}
                      className={styles.slideImage}
                      style={{
                        zIndex: 10 + -i
                      }}
                    />
                  </React.Fragment>
                ))}

                {activeItem && 
                  <div className={styles.slidePopup}>
                    <div 
                      key={activeItem.id}
                      className={`${styles.slidePopupInner} ${styles[popupState]}`}
                    >
                      <img src={popupImage && popupImage} alt="" />
                    </div>
                  </div>
                }

                <div className={styles.shapes}>
                  <span className={`${styles.dropB} ${styles.topLeft}`}>
                    <Drop
                      orientation="vertical"
                      corner="topLeft"
                      size="medium"
                      color={handleTheme("primary-care")}
                    />
                  </span>

                  <span className={`${styles.circle} ${styles.topLeft}`}>
                    <Circle
                      size="small"
                      color={handleTheme("mental-health")}
                    />
                  </span>

                  <span className={`${styles.dropB} ${styles.bottomRight}`}>
                    <Drop
                      orientation="vertical"
                      corner="bottomRight"
                      size="large"
                      color='#351f65'
                    />
                  </span>

                  <span className={styles.halfCircle}>
                    <HalfCircle
                      flat="bottom"
                      size="large"
                      color={handleTheme("chronic")}
                    />
                  </span>
                </div>
              </div>

              { items && items.length > 1 && 
                <div 
                  className={styles.indicators}
                >
                  { items && items.map((item, i) => 
                    <button 
                      key={item.id}
                      className={`${styles.indicatorItem} ${ activeIndex === i ? styles.active : ''}`}
                      onClick={() => updateIndex(i)}
                      aria-label="indicator"
                    >
                    </button>
                  )}
                </div>
              }

              { carouselRef && carouselRef.current && 
                <>
                  <img 
                    src={BezelImage} 
                    alt="" 
                    className={styles.bezel}
                    style={{
                      height: carouselRef && carouselRef.current && carouselRef.current.getBoundingClientRect().height,
                      width: carouselRef && carouselRef.current && carouselRef.current.getBoundingClientRect().width
                    }}
                  />

                  {/*<div 
                    className={styles.overlay}
                    style={{
                      height: carouselRef && carouselRef.current && carouselRef.current.getBoundingClientRect().height,
                      width: carouselRef && carouselRef.current && carouselRef.current.getBoundingClientRect().width
                    }}
                  />*/}
                </>
              }

              {caption && 
                <div className={styles.caption}>
                  <ReactMarkdown>{caption}</ReactMarkdown>
                </div>
              }

            </div>
          </div>
          
          <div className={styles.right} ref={sliderRef}>
            {items && items.map((item, i) => (
              <StickyView 
                height={itemHeight} 
                totalHeight={items.length * itemHeight}
                key={item.id} 
                item={item}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              >
                <div className={styles.slideInner}>
                  <div className={styles.slideImageMobile}>
                    <img 
                      src={BezelImage} 
                      alt="" 
                      className={styles.bezel}
                    />
                    <img src={item.image.url} alt={item.image.alt} />
                  </div>

                  <div className={styles.slideContent}>
                    <div className={`${styles.slideShape} ${styles[item.accent]}`}/>
                    {item.number && <div className={styles.slideNumber}>{item.number}</div> }
                    <div className={styles.slideTitle}>{item.title} </div>

                    <ReactMarkdown>{item.description}</ReactMarkdown>

                    <div className={styles.slideCta}>
                      <CallToAction cta={item.cta} />
                    </div>
                  </div>                    
                </div>
              </StickyView>
            ))}
          </div>
        </div>
      </section>
    </ScrollContext.Provider>
  )
}
