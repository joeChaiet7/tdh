import React from 'react'
import useGetIcon from '../../../hooks/useGetIcon';

import * as styles from './iconGrid.module.scss';

const IconItem = ({ item, stack }) => {
  const { handleGetIcon } = useGetIcon();

  return (
    <div className={`${styles.iconItem} ${styles[stack]}`}>
      <div className={styles.icon}>
        {handleGetIcon(item.icon)}
      </div>
      
      <div className={styles.content}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.desc}>{item.description}</p>
      </div>
    </div>
  )
}
  
export default function IconGrid(props) {

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
    <section className={styles.iconGrid}>
      <div className={`${styles.container} ${checkRemainder(items)}`}>
        {items && items.map(item => (
          <IconItem 
            key={item.id}
            item={item} 
            stack={icon_stack}
          />
        ))}
      </div>
    </section>
  )
}
