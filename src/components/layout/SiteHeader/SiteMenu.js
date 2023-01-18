import React from 'react'

import {
  IoArrowForward
} from 'react-icons/io5';

import * as styles from './siteMenu.module.scss';

export default function SiteMenu(props) {
  let {
    activeMenu,
    handleMenuHover,
    menuImage,
    setMenuImage
  } = props;

  return (
    <div 
      className={`${styles.siteMenu} ${activeMenu ? styles.opened : styles.closed}`}
      id="menuContainer"
      onMouseEnter={(e) => handleMenuHover(e, activeMenu)}
      onMouseLeave={(e) => handleMenuHover(e, activeMenu)}
    >
      <div className={styles.container}>
        <div className={styles.nav}>
          { activeMenu &&  activeMenu.sections.map(section => (
            <div className={styles.section} key={section.id}>
              <p key={section.name}>{ section.name }</p>

              <ul role="menu">
                { section.items.map((item, i) => (
                  <li
                    key={item.id}
                    style={{
                      animationDelay: `${i * 0.25}s`
                    }}
                  >
                    <a 
                      role="menuitem"
                      href={item.destination}
                      onMouseEnter={() => setMenuImage({ url: item.image, alt: item.text })}
                      //onMouseLeave={() => setMenuImage({})}
                    >
                      { item.text } 
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          { (activeMenu && activeMenu.sections.length < 2) && menuImage.url &&
            <div className={styles.itemImage}>
              <img key={menuImage.url} src={menuImage.url} alt={menuImage.alt} />
            </div>
          }
        </div>

        <div className={styles.cta}>
          {(activeMenu && activeMenu.cta) &&
            <div className={styles.ctaInner}>
              <div className={styles.h3}>{ activeMenu.cta.title }</div>
              { activeMenu.cta.primaryLink &&
                <a href={activeMenu.cta.primaryLink.destination} className={styles.primary}>
                  {activeMenu.cta.primaryLink.text}
                  <IoArrowForward />
                </a>
              }

              { activeMenu.cta.secondaryLink &&
                <a href={activeMenu.cta.secondaryLink.destination} className={styles.secondary}>
                  {activeMenu.cta.secondaryLink.icon}
                  {activeMenu.cta.secondaryLink.text}
                </a>
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}
