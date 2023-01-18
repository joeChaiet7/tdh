import React from 'react';

import * as styles from './titleRow.module.scss';

export default function TitleRow(props) {
  let {
    title,
    subtitle
  } = props;

  return (
    <section className={styles.titleRow}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            {title && title}
          </div>
        </div>

        <div className={styles.subtitle}>
          <div>
            {subtitle && subtitle}
          </div>
        </div>
      </div>
    </section>
  )
}
