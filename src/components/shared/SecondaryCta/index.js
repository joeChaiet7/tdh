import React from 'react';
import useGetIcon from '../../../hooks/useGetIcon';

import * as styles from './secondaryCta.module.scss';

export default function SecondaryCta(props) {

  let {
    icon,
    text,
    link_text,
    link_destination
  } = props;

  const { handleGetIcon } = useGetIcon();

  return (
    <div className={styles.secondaryCta}>
      <div className={styles.icon}>
        {handleGetIcon(icon)}
      </div>

      <div className={styles.text}>
        {text}
      </div>

      <div className={styles.link}>
        <a href={link_destination}>{link_text} {handleGetIcon("arrow forward")}</a>
      </div>
    </div>
  )
}
