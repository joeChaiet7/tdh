/**
 * Circle
 * Shape used in parent components.
 * @typedef {object} Props
 * @property {string} size - The size of the shape
 * @property {string} color - The color of the shape
 */

import React, { useState, useEffect } from 'react';

import * as styles from './shapes.module.scss';

export default function Circle(props) {
  const [shapeSize, setShapeSize] = useState({ width: 0, height:0 });

  let {
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
      className={styles.circle}
      style={{
        width: shapeSize.width,
        height: shapeSize.height,
        background: `linear-gradient(90deg, #351f65 50%, ${color} 50%)`,
        boxShadow: `0 0 25px 15px ${color+'19'}`
      }}
    />
  )
}
