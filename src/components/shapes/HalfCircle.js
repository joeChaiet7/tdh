/**
 * HalfCircle
 * Child component
 * Shape used in parent components.
 * @typedef {object} Props
 * @property {string} flat - The location of the flat side of the HalfCircle
 * @property {string} size - The size of the shape
 * @property {string} color - The color of the shape
 */

import React, { useState, useEffect } from 'react';

import * as styles from './shapes.module.scss';

export default function HalfCircle(props) {
  const [shapeSize, setShapeSize] = useState({ width: 0, height:0 });

  let {
    flat,
    size,
    color
  } = props;
  
  useEffect(() => {
    if(size === "small"){
      setShapeSize({ width: 50, height: 50 });
    }

    if(size === "medium") {
      setShapeSize({ width: 100, height: 100 });
    }

    if(size === "large") {
      setShapeSize({ width: 150, height: 150 });
    }

  }, [size]);
  
  return (
    <div 
      className={`${styles.halfCircle} ${styles[flat]}`}
      style={{
        width: (flat === "bottom" || flat === "top") ? shapeSize.width : shapeSize.width / 2 ,
        height: (flat === "bottom" || flat === "top") ? shapeSize.height / 2 : shapeSize.height,
        backgroundColor: `${color}`,
        boxShadow: `0 0 25px 15px ${color+'19'}`
      }}
    />
  )
}
