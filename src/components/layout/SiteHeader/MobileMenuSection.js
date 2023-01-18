import React, { useState, useEffect } from 'react'
import useGetIcon from '../../../hooks/useGetIcon';

import * as styles from './mobileMenuSection.module.scss';

export default function MobileMenuSection(props) {
  const [activeMenu, setActiveMenu] = useState();
  const [menuItems, setMenuItems] = useState([])

  let { handleGetIcon } = useGetIcon();

  let {
    item,
    activeToggleItem
  } = props;

  function handleMenuDropdown(id){
    activeMenu === id ? setActiveMenu() : setActiveMenu(id);
  }

  useEffect(() => {
    setActiveMenu();
  }, [activeToggleItem])

  useEffect(() => {
    if(item){
      if(activeToggleItem.name === "individuals"){
        if(item.sections.length > 1){
          setMenuItems(item.sections)
        }else{
          setMenuItems(item.sections[0].items)
        }
      }
  
      if(activeToggleItem.name === "organizations"){
        setMenuItems(item.items)
      }
    }
  
  }, [activeToggleItem, item]);
  
  return (
    <section className={styles.mobileMenuSection} key={item.id}>
      <div className={styles.link}>
        <div 
          className={`${styles.linkContainer} ${activeMenu === item.id ? styles.active : ""}`} 
          onClick={() => handleMenuDropdown(item.id)}
          onKeyDown={() => handleMenuDropdown(item.id)}
        >
          <span className={styles.linkTitle}>
            { item.icon &&
              <span className={styles.iconContainer}>
                { item.icon }
              </span>
            }

            <p className={styles.linkTitle}>
              { activeToggleItem.name === "individuals" ?
                item.text
              :
                item.name
              }
            </p>
          </span>

          <span className={`${styles.iconContainer} ${activeMenu === item.id ? styles.opened : styles.closed }`}>
            {handleGetIcon("chevron down")}
          </span>
        </div>
      </div>
  
      <div>    
        <div 
          className={styles.subLinkContainer} 
          style={{
            height: activeMenu === item.id ? menuItems.length * 45 : "0",
            marginTop: activeMenu === item.id ? "1rem" : "0",
          }}
        > 
          { menuItems && menuItems.map(item => (
            <a
              key={item.id}
              className={styles.link} 
              href={item.destination}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
