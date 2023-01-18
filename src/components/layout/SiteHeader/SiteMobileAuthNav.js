import React from 'react';

import SiteHeaderNavItem from './SiteHeaderNavItem';

import * as styles from "./siteMobileAuthNav.module.scss";

export default function SiteMobileAuthNav(props) {
  let {
    isMobileMenuActive
  } = props;

  return (
    <div className={`${styles.mobileAuthNav} ${isMobileMenuActive ? styles.active : ''}`}>
      <ul className={styles.navList}>
        <SiteHeaderNavItem 
          item={{
            text: "Get started",
            destination: "https://member.teladoc.com/registrations/get_started",
            type: "button",
            icon: "arrow forward"
          }}
        />
      </ul>
    </div>
  )
}
