/**
 * SiteFooterSection
 * The section of links within the Primary and Secondary group of links
 * @typedef {object} Props
 * @property {object} section - The menu items to be used in the footer
 */

import React, { useContext } from 'react';
import ModalContext from '../../../context/ModalContext';

import * as styles from "./siteFooterMenuSection.module.scss";

export default function SiteFooterMenuSection({ section }) {
  const { handleToggleModal } = useContext(ModalContext)

  return (
    <section>
      <div>
        { section.name && 
          <div className={styles.title}>{section.name}</div>
        }
        
        <ul className={styles.list}>
          {section.items.map(item => (
            <li key={item.id} className={styles.listItem}>

              {item.action_type === "link" && 
                <a href={item.action_url} rel={item.action_target === "new window" ? "noopener noreferrer" : ""} target={item.action_target === "_blank" ? "" : ""}>
                  { item.text }
                </a>
              }

              {item.action_type === "form" && 
                <button onClick={(e) => handleToggleModal("form", item.action_url, "footer", e)}>
                  { item.text }
                </button>
              }
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
 