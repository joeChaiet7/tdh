import React from 'react';

import {
  HalfCircle,
  Circle,
  Drop
} from '../../'

import * as styles from "./phoneImage.module.scss";

export default function PhoneImage({ image, theme }) {
  function handleTheme(theme){
    if(theme === "specialty"){
      return
    }

    if(theme === "chronic"){
      //RGB(202, 1, 190)
      return "#ca01be"
    }

    if (theme === "primary-care"){
      //RGB(98, 64,232)
      return "#6240e8"
    }

    if(theme === "mental-health"){
      //RBG(15, 173, 38)
      return "#0fad26"
    }

    if(theme === "employers"){
      return "#6240E8";
    }

    //RGB(53, 31, 101)
    return "#351f65"
  }

  return (
    <article className={styles.phoneImage}>
      <span className={`${styles.dropB} ${styles.topLeft}`}>
        <Drop
          orientation="vertical"
          corner="topLeft"
          size="medium"
          color={
            theme === "specialty" ? "#0fad26" 
            : theme === "app" ? "#39bee8"
            : handleTheme(theme)}
        />
      </span>

      <span className={`${styles.circle} ${styles.topLeft}`}>
        <Circle
          size="small"
          color={
            theme === "specialty" ? "#ca01be" 
            : theme === "app" ? "#0fad26"
            : handleTheme(theme)
          }
        />
      </span>

      <span className={`${styles.dropB} ${styles.bottomRight}`}>
        <Drop
          orientation="vertical"
          corner="bottomRight"
          size="large"
          color={theme === "app" ? "#ca01be" : '#351f65'}
        />
      </span>

      <span className={styles.halfCircle}>
        <HalfCircle
          flat="bottom"
          size="large"
          color={
            theme === "specialty" ? "#6240E8" 
            : theme === "app" ? "#6240E8"
            : handleTheme(theme)
          }
        />
      </span>

      <img src={image} alt="" />
    </article>
  )
}
