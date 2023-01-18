import React from 'react'

import * as styles from './imageGrid.module.scss';

const ImageItem = ({ item, stack }) => {

  return (
    <div className={`${styles.imageItem} ${styles[stack]}`}>
      <div className={styles.image}>
        {item.image &&
          <img src={item.image.url} alt={item.image.alt} />
        }
      </div>
   
      <div className={styles.content}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.desc}>{item.description}</p>
      </div>
    </div>
  )
}
  
export default function ImageGrid(props) {

  let {
    icon_stack,
    items
  } = props;

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
    <section className={styles.imageGrid}>
      {items && 
        <div className={`${styles.container} ${checkRemainder(items)}`}>
          {items.map(item => (
            <ImageItem 
              key={item.id}
              item={item} 
              stack={icon_stack}
            />
          ))}
        </div>
      }
    </section>
  )
}
