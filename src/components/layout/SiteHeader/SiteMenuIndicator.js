import React from 'react';

import * as styles from "./siteMenuIndicator.module.scss";

const SiteMenuIndicator = React.forwardRef((props, ref) => {
  let {
    indicatorTarget,
    activeMenu
  } = props;

  return (
    <div 
      ref={ref}
      className={styles.siteMenuIndicator}
      style={{
        "--indicatorInitialLocation": `${indicatorTarget && indicatorTarget.start + 16}px`,
        "--indicatorWidth": `${indicatorTarget && indicatorTarget.width - 32}px`,
        "--indicatorColor": `${activeMenu && activeMenu.indicatorColor}`
      }} 
    />
  )
});

export default SiteMenuIndicator;