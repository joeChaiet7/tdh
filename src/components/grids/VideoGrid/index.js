import React, { useContext } from 'react'
import ModalContext from '../../../context/ModalContext';
import useGetIcon from '../../../hooks/useGetIcon';

import * as styles from './videoGrid.module.scss';

const VideoItem = ({ item }) => {
  const { handleGetIcon } = useGetIcon();

  const {
    handleToggleModal
  } = useContext(ModalContext)

  return (
    <div className={styles.videoItem}>
      <button 
        className={styles.image}
        onClick={() => handleToggleModal("video", item.video_url)}
      >
        {item.video_url && 
          <>
            <div className={styles.overlay} />
            <div className={styles.playBtn}>
              {handleGetIcon("play solid")}
            </div>
          </>
        }
        <img src={item.image.url} alt={item.image.alt} />
      </button>

      <div className={styles.content}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.desc}>{item.description}</p>
      </div>


      <div className={styles.cta}>
        <button onClick={() => handleToggleModal("video", item.video_url)}>Watch the video {handleGetIcon("arrow forward")}</button>
      </div>
    </div>
  )
}

export default function VideoGrid(props) {
  let {
    title,
    subtitle,
    items
  } = props;

  return (
    <section className={styles.videoGrid}>
      <div className={styles.heading}> 
        {title && <div className={styles.title}>{title}</div>}
        {subtitle && <p>{subtitle}</p>}
      </div>
      
      <div className={`${styles.container}`}>
        {items && items.map(item => (
          <VideoItem 
            key={item.id}
            item={item} 
          />
        ))}
      </div>
    </section>
  )
}
