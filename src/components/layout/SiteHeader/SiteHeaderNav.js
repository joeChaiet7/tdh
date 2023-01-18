import React from 'react';

import SiteHeaderNavItem from './SiteHeaderNavItem';

import * as styles from './siteHeaderNav.module.scss';
//import "../../styles/global.scss";

export default function SiteHeaderNav(props) {
  let {
    items,
    activeItem,
    handleMenuHover
  } = props;

  return (
    <nav className={styles.siteHeaderNav}>
      <ul className={styles.list}>
        { items && items.map(item => (
          <SiteHeaderNavItem 
            key={item.id} 
            item={item} 
            activeItem={activeItem}
            handleMenuHover={(e, item) => handleMenuHover(e, item)}
          />
        )) }
      </ul>
    </nav>
  )
}
