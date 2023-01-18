/**
 * Loader
 * Simple SVG loading spinner.
 */

import React from 'react';

import * as styles from './loader.module.scss'

export default function Loader() {
  const spinnerSize = 40;

  return (
    <div className={styles.loader}>
      <svg width="100" height="100" x={`${spinnerSize}px`} y={`${spinnerSize}px`} viewBox={`0 0 ${spinnerSize} ${spinnerSize}`} className={styles.spinner}>
        <path className={styles.shapeB} d="M40,20 a20,20 0 0,1 -20,20"></path>
        <path className={styles.shapeA} d="M20,0 a20,20 0 0,1 20,20"></path>
        <path className={styles.shapeD} d="M0,20 a20,20 0 0,1 20,-20"></path>
        <path className={styles.shapeC} d="M20,40 a20,20 0 0,1 -20,-20"></path>
      </svg>
    </div>
  )
}