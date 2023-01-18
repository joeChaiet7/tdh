import React from 'react'

import {
  CallToAction
} from '../../';

import * as styles from './solutionGrid.module.scss';

const SolutionItem = ({ item }) => {

  return (
    <a 
      href={item.destination} 
      target={item.target}
      rel={item.rel}
      className={`${styles.solutionItem}`}
    >
      <div className={styles.image} style={{ backgroundImage: `url(${item.image.url})`}} />

      <div className={styles.content}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.desc}>{item.description}</p>
      </div>
    </a>
  )
}
  
export default function SolutionGrid(props) {

  let {
    title,
    subtitle,
    items,
    cta
  } = props;

  /*
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
  }*/

  return (
    <section className={styles.solutionGrid}>
      <div className={styles.heading}>
        {title && <div className={styles.title}>{title}</div>}
        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className={`${styles.container}`}>
        {items && items.map(item => (
          <SolutionItem 
            key={item.id}
            item={item} 
          />
        ))}
      </div>

      <div className={styles.cta}>
        <CallToAction cta={cta} />
      </div>
    </section>
  )
}
