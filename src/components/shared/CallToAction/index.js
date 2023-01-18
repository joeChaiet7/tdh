/**
 * CallToAction
 * Container for buttons
 * @typedef {object} Props
 * @property {object} primary - The type of button to render
 * @property {object} secondary - The size of the button
 */

import React, { useContext } from 'react';
import ModalContext from '../../../context/ModalContext';

import { Button } from '../../';

import * as styles from "./callToAction.module.scss";

export default function CallToAction(props) {
  const {
    handleToggleModal
  } = useContext(ModalContext)

  let {
    title,
    cta 
  } = props;

  return (
    <>
      { title && <div className={styles.title}>{title}</div> }
      <div className={styles.callToAction}>
        {cta && cta.map((item, i) => (
          <React.Fragment key={item.type + '-' + i}>
            {item.type !== 'text' ?
              <Button 
                type={item.type}
                text={item.text}
                destination={(item.action_type !== "video" && item.action_type !== "form") ? item.action_url : null}
                action={(e) => handleToggleModal(item.action_type, item.action_url, "page", e)}
                target={item.action_type === "download" ? "_blank" : ""}
                rel={item.action_type === "download" ? "noreferrer noopener" : ""}
                icon={item.icon}
                iconPosition={item.icon_position}
                theme={item.theme}
              />
            :
              <div className={`${styles.ctaText} ${styles[item.theme]}`}>
                <span>{item.icon}</span> 
                <p>{item.text}</p>
              </div>
            }
          </React.Fragment>
        ))}
      </div>
    </>
  )
}
