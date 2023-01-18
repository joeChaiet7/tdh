import React, { useState } from 'react';

import SiteSearch from './SiteSearch';

import {
  IoClose
} from 'react-icons/io5';

import * as styles from './globalSearch.module.scss';

const  TeladocLogo = "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/logos/Teladoc_Health_Logo.png";

export default function GlobalSearch(props) {
  const [showResults, setShowResults] = useState(false);
  
  let {
    isSearchVisible,
    setIsSearchVisible
  } = props;
  
  return (
    <>
      <div className={`${styles.globalSearch} ${isSearchVisible ? styles.active : styles.hidden}`} >
        <div className={styles.container}>
          <div className={styles.logo} >
            <a href="/">
              <title>Teladoc Health Logo</title>
              {/*<img src={(theme === "transparent" && !isScrolled) || isMobileMenuActive ? TeladocLogoWhite : TeladocLogo} alt="Teladoc Health" />*/}
              <img src={TeladocLogo} alt="Teladoc Health" />
            </a>
          </div>

          <div className={styles.search}>
            <SiteSearch 
              setShowResults={setShowResults}
            />
          </div>

          <button
            className={styles.close}
            onClick={() => setIsSearchVisible(false)}
          >
            <IoClose />
          </button>
        </div>
      </div>

      <div 
        className={styles.overlay} 
        style={{
          opacity: showResults ? 1 : 0,
          visibility: showResults ? "visible" : "hidden"
        }} 
      />
    </>
  )
}
