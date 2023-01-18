import React, { useState, useEffect } from 'react';

import { menuItems } from '../../../data/navigation/siteHeader';

import MobileMenuSection from './MobileMenuSection';
import SiteMobileAuthNav from './SiteMobileAuthNav';
import SiteMobileMenuToggle from './SiteMobileMenuToggle';
import SiteHeaderLocation from './SiteHeaderLocation';

import * as styles from './siteMobileMenu.module.scss';

export default function SiteMobileMenu(props) {
  const [activeToggleItem, setActiveToggleItem] = useState();
  const [windowDimensions, setWindowDimensions] = useState({})

  let toggleItems = [
    {
      id: 0,
      name: "individuals"
    },
    {
      id: 1,
      name: "organizations"
    }
  ]

  let {
    countries,
    activeCountry,
    setActiveCountry,
    isMobileMenuActive
  } = props;

  useEffect(() => {
    setWindowDimensions({width: window.innerWidth, height: window.innerHeight})
  }, []);

  useEffect(() => {
    if (toggleItems) {
      setActiveToggleItem(toggleItems[0])
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div 
      className={`${styles.siteMobileMenu} ${isMobileMenuActive ? styles.opened : ""}`}
      style={{
        "--mobileMenuHeight": `${windowDimensions && windowDimensions.height}px`
      }}
    >
      <div className={styles.card}>
        <SiteMobileMenuToggle 
          toggleItems={toggleItems}
          activeToggleItem={activeToggleItem}
          setActiveToggleItem={item => setActiveToggleItem(item)}
        />

        <div className={styles.body}>
          { menuItems && activeToggleItem && menuItems.map(item => (
            <React.Fragment key={item.id}>

              {item.category === activeToggleItem.name &&
              <>
                {item.category === "individuals" ?
                  <>
                    <MobileMenuSection 
                      key={item.id} 
                      item={item} 
                      activeToggleItem={activeToggleItem}
                    />
                  </>
                :
                  item.sections && item.sections.map((section, i) => (
                    <MobileMenuSection 
                      key={item.id + i} 
                      item={section} 
                      activeToggleItem={activeToggleItem}
                    />
                  ))
                }
              </>
               
              }
            </React.Fragment>
          ))}

          {/*{activeToggleItem && additionalMenuItems && additionalMenuItems.map(section => (
            section.category === activeToggleItem.name && 
            <div 
              key={section.id}
              className={`${styles.supportContainer}`}
            >
              <section className={styles.supportContainerSection}>
                <div className={styles.supportContainerLink}>
                  <div className={styles.supportContainerLinkInner}>
                    { section.name &&
                      <div className={styles.h3}>{section.name}</div>
                    }

                    <ul className={styles.list}>
                      { section.items && section.items.map(item => (
                        <li key={item.id} className={styles.listItem}>
                          <a href={item.destination}>
                          { item.icon &&
                            <span className={styles.iconContainer}>
                              { item.icon }
                            </span>
                          }
            
                          <span>
                            { item.text }
                          </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
            
          ))}*/}

          <div className={`${styles.locationContainer}`}>
            <SiteHeaderLocation 
              countries={countries}
              activeCountry={activeCountry}
              setActiveCountry={setActiveCountry}
            />  
          </div>
        </div>
      </div>

      <SiteMobileAuthNav isMobileMenuActive={isMobileMenuActive} />

    </div>
  )
}
