import React from 'react';

import * as styles from './gradientBackground.module.scss';

export default function GradientBackground({ children }) {
  return (
    <div className={styles.gradientBackground}>
      {children}
    </div>
  )
}
