import React from 'react';

import * as styles from './waveBackground.module.scss';

export default function WaveBackground({ top, bottom, color, children }) {

  function handleGetHex(color){
    if(color === "dark") {
      return "#351f65"
    }

    if(color === "grey") {
      return "#eff2f7"
    }

    if(color === "white") {
      return "#ffffff"
    }
  }

  return (
    <div className={`${styles.waveBackground} ${styles[color]}`}>  
       {top &&
          <div className={styles.topShape}>
            <svg 
              className={styles.waveTop} 
              style={{ 
                transform: `scaleX(${top.flipX ? -1 : 1})`
              }} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1440 100"
            >
              <path style={{ fill: `${top.fill_color ? handleGetHex(top.fill_color) : "#fff"} `}} fillOpacity="1" d="M 0 45 C 121.951 45.536 201.16 39.669 328.774 33.801 C 532.122 17.063 678.265 6.952 933.303 2 C 1118.254 1.335 1270.434 9.636 1378.343 29.465 L 1440 40 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 Z"></path>
            </svg>
          </div>
        }  

      <section className={styles.content}>
        {children}
      </section>

      {bottom && 
        <div className={styles.bottomShape}>
          <svg 
            className={styles.waveBottom} 
            style={{ 
              transform: `scaleX(${bottom.flipX ? -1 : 1})`
            }}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 100"
          >
            <path style={{ fill: `${bottom.fill_color ? handleGetHex(bottom.fill_color) : "#fff"}` }} fillOpacity="1" d="M 0 45 C 121.951 44.464 201.16 50.331 328.774 56.199 C 532.122 72.937 678.265 83.048 933.303 88 C 1118.254 88.665 1270.434 80.364 1378.343 60.535 L 1440 50 L 1440 100 L 1360 100 C 1280 100 1120 100 960 100 C 800 100 640 100 480 100 C 320 100 160 100 80 100 L 0 100 Z"></path>
          </svg>
        </div>
      }
    </div>
  )
}
