/**
 * Drop
 * Shape used in parent components.
 * @typedef {object} Props
 * @property {string} orientation - The way the shape is facing (horizontal/vertical)
 * @property {string} corner - The location of the sharp corner of the Drop
 * @property {string} size - The size of the shape
 * @property {string} color - The color of the shape
 */

import React, { useState, useEffect } from 'react'

import * as styles from './shapes.module.scss';

export default function Drop(props) {
  const [shapeSize, setShapeSize] = useState({ width: 0, height:0 });

  let {
    orientation,
    corner,
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
      className={`${styles.drop} ${styles[orientation]} ${styles[corner]}`}
      style={{
        width: (orientation === "horizontal" || orientation === "horizontal") ? shapeSize.width + shapeSize.width/2 : shapeSize.width,
        height: (orientation === "horizontal" || orientation === "horizontal") ? shapeSize.height : shapeSize.height + shapeSize.height/2,
        backgroundColor: color
      }}
    />
  )
}
 