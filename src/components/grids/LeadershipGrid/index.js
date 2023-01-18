import React from 'react'

import * as styles from './leadershipGrid.module.scss';

const LeadershipItem = ({ item }) => {

  return (
    <a href={item.destination} className={styles.leadershipItem}>
      <div className={styles.image}>
        <img src={item.image.url} alt={item.image.alt} />
      </div>

      <div className={styles.person}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.role}>{item.role}</p>
      </div>
    </a>
  )
}

// eslint-disable-next-line no-unused-vars
const LeadershipItemSvg = ({ item }) => (
  <a href={item.destination} className={styles.leadershipItemSvg}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 150" width="215" className={styles.leadershipImage}>
      <defs>
        <clipPath id="maskImage" clipPathUnits="userSpaceOnUse">
          {/*<path d="M 100 63 A 50 50 0 1 1 0 70 L 0 0 C 0 0 0 0 48 0 c 27 0 52 42 52 70 z" />*/}
          <path d="M 0 95 A 50 50 90 1 0 100 95 L 100 0 L 0 0 l 0 95 z" />
        </clipPath>
        <clipPath id="maskBackground" clipPathUnits="userSpaceOnUse">
          {/*<path d="M 190 101 C 190 131 165 151 140 151 C 115 151 90 131 90 101 L 90 51 H 140 C 170 51 190 76 190 101 Z" />*/}
          <path d="M 190 125 C 190 145 175 175 140 175 C 105 175 90 145 90 125 L 90 51 H 113 C 156 51 190 76 190 125 Z" />
        </clipPath>
      </defs>
      <g clipPath='url(#maskImage)' transform="translate(0 -7)">
        {/* Background */}
        <path className={styles.circle} transform="translate(-90 -30)"  d="M 190 125 C 190 145 175 175 140 175 C 105 175 90 145 90 125 L 90 51 H 113 C 156 51 190 76 190 125 Z" />

        {/* Foregroud */}
        <image width="120" height="144" x="-15" y="0" fill="none" className={styles.foreground} href="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/transparent/andy-puterbaugh-transparent.png" />
      </g>
    </svg>

    <div className={styles.person}>
      <p className={styles.name}>{item.name}</p>
      <p className={styles.role}>{item.role}</p>
    </div>
  </a>
)

export default function LeadershipGrid(props) {
  let {
    title,
    items
  } = props;

  function sortArray(array){
    let sortedItems = array.sort((item1, item2) => item1.name.split(' ')[1] > item2.name.split(' ')[1] ? 1 : -1);
    let ceoIndex = sortedItems.map(item => item.name.split(' ')[1]).indexOf("Gorevic")

    sortedItems.unshift(sortedItems.splice(ceoIndex, 1)[0]);

    return sortedItems;
  }

  return (
    <section className={styles.leadershipGrid}>
      <div className={styles.heading}>
        {title && <div className={styles.title}>{title}</div> }
      </div>

      <div className={styles.container}>
        {items && sortArray(items).map(item => (
          <LeadershipItem 
            key={item.id}
            item={item} 
          />
        ))}
      </div>
    </section>
  )
}
