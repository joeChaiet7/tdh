import React from 'react';
import useGetIcon from '../../../hooks/useGetIcon';

import * as styles from "./siteHeaderNavItem.module.scss";

export default function SiteHeaderNavItem(props) {
  let {
    id,
    item,
    activeMenu,
    handleMenuHover
  } = props;

  let { handleGetIcon } = useGetIcon();

  return (
    <li id={id}>

      { item.type === "dropdown" &&
        <button 
          className={`${styles.link} ${activeMenu && item.id === activeMenu.id ? styles.active : "" }`} 
          onMouseEnter={(e) => handleMenuHover(e, item)}
          onMouseLeave={(e) => handleMenuHover(e, item)}
          onClick={(e) => handleMenuHover(e, item)}
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="menuContainer"
        >
          { item.text }
        </button>
      }

      { item.type === "link" && 
        <a 
          className={`${styles.link} ${(item.icon && item.iconPosition === "start") ? styles.iconStart : styles.iconEnd}`} 
          href={item.destination}
        >
          {item.iconPosition === "start" &&
            handleGetIcon(item.icon)
          }

          { item.text }

          {item.iconPosition === "end" &&
            handleGetIcon(item.icon)
          }
        </a>
      }
        
      { item.type === "button" && 
        <a 
          className={`${styles.button} ${item.icon ? styles.withIcon : ''}`}
          href={item.destination}
        >
          {item.iconPosition === "start" &&
            handleGetIcon(item.icon)
          }

          { item.text }

          {item.iconPosition === "end" &&
            handleGetIcon(item.icon)
          }
        </a>
      }
    </li>
  )
}
