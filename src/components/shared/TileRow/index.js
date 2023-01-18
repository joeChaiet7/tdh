import React from 'react';

import {
  CallToAction
} from '../../';

import * as styles from './tileRow.module.scss';

const TileItem = ({ item }) => (
  item &&
  <div className={styles.item}>
    <div className={styles.itemImage} style={{ backgroundImage: `url(${item.image.url})`}} />
    <div className={styles.itemContent}>
      {item.title && <div className={styles.itemTitle}>{item.title}</div>}
      {item.description && <p className={styles.itemDesc}>{item.description}</p>}
    </div>
  </div>
)

export default function TileRow(props) {
  let {
    title,
    subtitle,
    items,
    cta
  } = props;
  
  return (
    <section className={styles.tileRow}>
      <article className={styles.container}>
        <div className={styles.heading}>
          {title && <div className={styles.title}>{title}</div>}
          {subtitle && <p>{subtitle}</p>}
        </div>

        <div className={styles.items}>
          {items && items.map((item, i) => (
            <TileItem key={item.id} item={item} />
          ))}
        </div>

        {cta && 
          <div className={styles.cta}>
            <CallToAction cta={cta} />
          </div>
        }
      </article>
    </section>
  )
}
