import React, { useEffect, useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown';
import useInView from '../../../hooks/useInView';

import * as styles from './statsGrid.module.scss';

const StatsCircleItem = ({ item, handleGetColor, offset }) => {
  return (
    <div className={`${styles.statsItem} ${styles.circle}`}>
      <div className={styles.stat}>
        <p className={styles.value}>{item.stat_value}{item.stat_metric}</p>

        {item.image ?
          <div 
            className={`${styles.leftImage}`}
            style={{
              "--maskAmount": `${100 - item.stat_value}%`,
              transform: `translateY(${offset <= 0 ? offset * 0.5 : 0}px)`,
              //width: `${100 - item.stat_value}%`
            }}
          >
            <div className={styles.shapeImage} style={{ backgroundImage: `url(${item.image.url})`}} />
          </div>
        :
          <div 
            className={`${styles.left}`}
            style={{
              transform: `translateY(${offset <= 0 ? offset * 0.5 : 0}px)`
            }}
          >
            <div 
              className={styles.shape} 
              style={{
                background: `linear-gradient(90deg, ${handleGetColor(item.accent)} 0, ${handleGetColor(item.accent)} ${100 - item.stat_value}%, transparent ${100 - item.stat_value}%, transparent 100%)`
              }}
            />
          </div>       
        }

        <div 
          className={styles.fill} 
          style={{
            background: `linear-gradient(90deg, transparent 0, transparent ${100 -  item.stat_value}%, #351f65 ${100 -  item.stat_value}%, #351f65 100%)`
          }}
        />
      </div>

      <div className={styles.desc}>
        <ReactMarkdown>{item.description}</ReactMarkdown>
      </div>
    </div>
  )
}

const StatsDonutItem = ({ index, item, isInView, handleGetColor }) => {
  const [circle, setCircle] = useState(0);
  const [stroke, setStroke] = useState(0);

  let componentDelay = 1;
  let svgDelay = 0.8;
  let radius = 110;

  useEffect(() => {
    if(item){
      let fill = item.stat_value;
      let circle = 2 * Math.PI * radius; //2 * PI * radius
      
      let stroke = (circle/100) * fill;
  
      setCircle(circle);
      setStroke(stroke);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item])

  return (
    <div 
      className={`${styles.statsItem} ${styles.donut} ${isInView ? styles.visible : ""} `}
      style={{transitionDelay: `${ index/componentDelay }s`}}
    >
      <div className={styles.itemInner}>
        <svg height="300" width="300">
          <circle cx="150" cy="150" r={radius} fill={handleGetColor("darkPurple")} />
          <circle 
            cx="150" 
            cy="150" 
            r={radius} 
            fill="none" 
            style={{ animationDelay: `${index * svgDelay}s`}} 
            strokeWidth="20" 
            stroke={handleGetColor(item.accent)} 
            strokeDasharray={`${stroke}, ${circle}`}
            className={styles.statStroke}
          />
          <text 
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            className={styles.statValue}
          >
            {item.stat_value}{item.stat_metric}
          </text>
        </svg>
      </div>

      <div className={styles.desc}>
        <ReactMarkdown>{item.description}</ReactMarkdown>
      </div>
    </div>
  )
}
  
export default function StatsGrid(props) {
  const [offset, setOffset] = useState(0);

  let {
    title,
    additional_text,
    items
  } = props;

  const statsRef = useRef();
  const isInView = useInView(statsRef);

  useEffect(() => {
    if(statsRef){
      const threshold = 50;
      function handleScroll(){
        setOffset((statsRef.current.getBoundingClientRect().top - threshold) * 0.25);
      }

      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [offset, statsRef, isInView]);

  function handleGetColor(color){
    if(color === 'blue'){
      return '#39bee8';
    }

    if(color === 'green'){
      return '#0fad26';
    }

    if(color === 'purple'){
      return '#6240E8';
    }

    if(color === 'pink'){
      return '#ca01be';
    }

    return '#351f65'
  }

  function checkRemainder(values){
    if(values.length % 2 === 0 && values.length % 3 === 0){
      return styles.threeColumn;
    }

    if(values.length % 2 === 0) {
      return styles.twoColumn;
    }

    if(values.length % 3 === 0) {
      return styles.threeColumn
    }

    return styles.threeColumn;
  }

  return (
    <section className={styles.statsGrid} ref={statsRef}>
      <div className={styles.heading}>
        {title && <div className={styles.title}>{title}</div>}
      </div>

      <div className={`${styles.container} ${checkRemainder(items)}`}>
        {items && items.map((item, i) => (
          <React.Fragment key={item.id}>
            {item.type === "circle" &&  
              <StatsCircleItem 
                item={item} 
                offset={offset}
                handleGetColor={handleGetColor}
                isInView={isInView}
              />
            }

            {item.type === "donut" &&  
              <StatsDonutItem 
                index={i}
                item={item} 
                offset={offset}
                handleGetColor={handleGetColor}
                isInView={isInView}
              />
            }
          </React.Fragment>
        ))}
      </div>

      {additional_text && 
        <div className={styles.additional}>
          <ReactMarkdown>{additional_text}</ReactMarkdown>
        </div>
      }
    </section>
  )
}
