/**
 * Slider
 * Scrollable paginated carousel for a number of tiles.
 * @typedef {object} Props
 * @property {string} title - The title of the Carousel Component 
 * @property {string} subtitle - The subtitle of the Carousel Component 
 * @property {Array} items - The items for each tile in the Carousel Component 
 */

import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import ModalContext from '../../../context/ModalContext';
import useGetIcon from '../../../hooks/useGetIcon';

import TestimonialItem from './TestimonialItem';
import SolutionItem from './SolutionItem';
import CaseStudyItem from './CaseStudyItem';
import TestimonialCard from './TestimonialCard';
import ResourceItem from './ResourceItem'; 

import {
  SecondaryCta
} from '../../'

import * as styles from './slider.module.scss'

export default function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const testimonialsRef = useRef();
  const itemRefs = useRef([]);
  const forwardRef = useRef();
  const backRef = useRef();
  const indicatorsRef = useRef();

  let { handleGetIcon } = useGetIcon();

  const {
    handleToggleModal
  } = useContext(ModalContext)

  //Add each slide element to the itemRefs array to be observed
  const addNode = useCallback((node) => itemRefs.current.push(node), []);

  let {
    type,
    title,
    subtitle,
    items,
    rating,
    showRating,
    disclaimer,
    secondaryCta
  } = props;

  useEffect(() => {
    if(items){
      let activeIdx;
      
      if (items.length >= 3) {
        activeIdx = Math.round((items.length) / 2) - 1;
      } else {
        activeIdx = 0;
      }

      if (activeIdx > 0) {
        updateIndex(activeIdx)
      }

      setActiveIndex(activeIdx)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  //Handle scroll on mouse click & drag
  useEffect(() => {
    const scrollEl = testimonialsRef.current;
    const forwardEl = forwardRef.current;
    const backEl = backRef.current;
    const indicatorsEl = indicatorsRef.current;

    let startX, scrollLeft, timer;

    let isScrolling = false,
      isDown = false,
      isClicked = false

    if (scrollEl) {
      if (forwardEl) {
        forwardEl.addEventListener("click", e => {
          isClicked = true;
        })
      }

      if (backEl) {
        backEl.addEventListener("click", e => {
          isClicked = true;
        })
      }

      if (indicatorsEl) {
        indicatorsEl.addEventListener("click", e => {
          isClicked = true;
        })
      }

      scrollEl.addEventListener("mousedown", e => {
        isDown = true
        startX = e.pageX - scrollEl.offsetLeft
        scrollLeft = scrollEl.scrollLeft
      })

      scrollEl.addEventListener("mouseup", e => {
        if (isScrolling) {
          setIsDisabled(true)
          e.preventDefault()
        }

        isDown = false
        isScrolling = false
      })

      scrollEl.addEventListener("mousemove", e => {
        if (!isDown) {
          setIsDisabled(false)
          return
        }

        e.preventDefault()
        isScrolling = true
        setIsDisabled(true)

        const x = e.pageX - scrollEl.offsetLeft
        const walk = x - startX
        scrollEl.scrollLeft = scrollLeft - (walk * 5)
      })

      scrollEl.addEventListener("scroll", e => {
        if (timer !== null) {
          clearTimeout(timer)
        }

        timer = setTimeout(function () {
          isClicked = false;
        }, 100)

        if (!isClicked) {
          handleScrollChange()
        }
      }, false);
    }

    return () => {
      scrollEl.removeEventListener("mousemove", function (e) { })
      scrollEl.removeEventListener("mouseup", function (e) { })
      scrollEl.removeEventListener("mousedown", function (e) { })
      scrollEl.removeEventListener("scroll", function (e) { })
      forwardEl.removeEventListener("click", e => { })
      backEl.removeEventListener("click", e => { })
      indicatorsEl.removeEventListener("click", e => { })

      clearTimeout(timer);
    }
  }, [backRef, forwardRef, indicatorsRef]);

  const updateIndex = (newIndex) => {
    let carousel = testimonialsRef.current,
      currentEl = itemRefs.current[activeIndex];
    
    if(currentEl){

      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= items.length) {
        newIndex = items.length - 1;
      }

      //Get slide width + gap width 
      let elWidth = currentEl.getBoundingClientRect().width + 64;
    
      //Use scrollLeft to move the new element into view
      carousel.scrollLeft = elWidth * newIndex;

      setActiveIndex(newIndex);
    }
  }

  function handleScrollChange() {
    let windowWidth = window.innerWidth;

    itemRefs.current.forEach((item, i) => {
      let elementLeft = item.getBoundingClientRect().left,
        visibleOffset = (windowWidth / 2) - (item.getBoundingClientRect().width / 2),
        hideOffset = visibleOffset - item.getBoundingClientRect().width;

      if (elementLeft <= visibleOffset && elementLeft >= hideOffset) {
        setActiveIndex(i)
      }
    })
  }

  return (
    <section
      className={styles.testimonialsSlider}
      style={{
        '--itemCount': items && items.length
      }}
    >
      <div className={styles.heading}>
        {title && <div className={styles.title}>{title}</div>}

        {subtitle && <p>{subtitle}</p>}
      </div>

      {showRating &&
        <div className={styles.rating}>
          <div className={styles.stars}>
            <div className={styles.starsOuter}>
              <div className={styles.starsInner} style={{ width: `${(rating.value / rating.total) * 100}%` }}>
              </div>
            </div>
          </div>

          <a href="/" target="_blank" rel="noreferrer noopener">Trustpilot reviews</a>
        </div>
      }

      <div className={styles.container}>
        <div
          className={styles.slider}
          ref={testimonialsRef}
        >
          {(type && items) && items.map((item, i) => (
            <React.Fragment key={item.id}>
              {type === "resources" && 
                <ResourceItem
                  item={item}
                  index={i}
                  ref={addNode}
                  isDisabled={isDisabled}
                  activeIndex={activeIndex}
                  handleGetIcon={handleGetIcon}
                />
              }

              {type === "testimonial cards" && 
                <TestimonialCard
                  item={item}
                  index={i}
                  ref={addNode}
                  isDisabled={isDisabled}
                  activeIndex={activeIndex}
                  handleToggleModal={handleToggleModal}
                  handleGetIcon={handleGetIcon}
                />
              }

              {type === "testimonials" && 
                <TestimonialItem
                  item={item}
                  index={i}
                  ref={addNode}
                  isDisabled={isDisabled}
                  activeIndex={activeIndex}
                  handleToggleModal={handleToggleModal}
                />
              }

              {type === "solutions" && 
                <SolutionItem
                  item={item}
                  index={i}
                  ref={addNode}
                  isDisabled={isDisabled}
                  activeIndex={activeIndex}
                />
              }

              {type === "case study" && 
                <CaseStudyItem
                  item={item}
                  index={i}
                  ref={addNode}
                  isDisabled={isDisabled}
                  activeIndex={activeIndex}
                  handleToggleModal={handleToggleModal}
                />
              }
            </React.Fragment>
          ))}
        </div>

        <button
          ref={backRef}
          style={{
            visibility: activeIndex > 0 ? 'visible' : 'hidden'
          }}
          className={styles.back}
          onClick={() => updateIndex(activeIndex - 1)}
          aria-label="Go to previous carousel item"
        >
          {handleGetIcon("arrow back")}
        </button>

        <button
          ref={forwardRef}
          style={{
            visibility: items && (activeIndex < items.length - 1) ? 'visible' : 'hidden'
          }}
          className={styles.forward}
          onClick={() => updateIndex(activeIndex + 1)}
          aria-label="Go to next carousel item"
        >
          {handleGetIcon("arrow forward")}
        </button>
      </div>

      {items && items.length > 1 &&
        <div
          className={styles.indicators}
          ref={indicatorsRef}
        >
          {items && items.map((item, i) =>
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

      {secondaryCta &&
        <SecondaryCta {...secondaryCta} />
      }

      {disclaimer && 
        <div className={styles.disclaimer}>
          <ReactMarkdown>{disclaimer}</ReactMarkdown>
        </div>
      }
    </section>
  )
}
