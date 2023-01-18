import React from 'react';

import * as styles from './siteMenuIcon.module.scss';

export default function SiteMenuIcon(props) {
  let {
    toggleMobileMenu,
    isMobileMenuActive
  } = props;

  return (
    <button className={`${styles.siteMenuIcon} ${isMobileMenuActive ? styles.menuOpened : styles.menuClosed}`} onClick={toggleMobileMenu}>
      <svg className={styles.container} viewBox='0 0 90 90' width="80" onClick={toggleMobileMenu}>
        <path
          className={styles.line}
          d="m 30,27 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -15.071429,-15.071429"
        />

        <path
          className={styles.line}
          d="m 70,45 h -90"
        />

        <path
          className={styles.line}
          d="m 30,63 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -15.071429,15.071429"
        />
      </svg>
      {/*<div className="item item--top" />
      <div className="item item--middle" />
      <div className="item item--bottom" />*/}
    </button> 
  )
}
