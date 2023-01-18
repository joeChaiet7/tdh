import React from 'react';
import useGetIcon from '../../../hooks/useGetIcon';

import * as styles from './eyebrow.module.scss'

export default function Eyebrow(props) {
  let {
    text,
    icon 
  } = props;

  const { handleGetIcon } = useGetIcon();

  return (
    <div className={styles.eyebrow}>
      <div className={styles.inner}>
        { handleGetIcon(icon) } { text }
      </div> 
    </div>
  )
}
