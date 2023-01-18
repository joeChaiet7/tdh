/**
 * Button
 * Button component used for links or modals.
 * @typedef {object} Props
 * @property {string} type - The type of button to render
 * @property {string} size - The size of the button
 * @property {string} text - The text displayed in the button
 * @property {string} icon - The icon used in the button
 * @property {string} iconPosition - The position of the icon within the button
 * @property {string} destination - If the button links to another page, the destination of that link 
 * @property {object} action - If the button triggers an action, like a modal, the action associated with the button
 * @property {string} theme - The theme of the button
 */

 import React from 'react';
 import useGetIcon from '../../../hooks/useGetIcon';
 
 import * as styles from "./button.module.scss";
 
 export default function Button(props) {
  let { handleGetIcon } = useGetIcon();

   let {
     type,
     text,
     icon,
     iconPosition,
     destination,
     action,
     aria_label,
     target,
     theme
   } = props;
   
   return (
     <>
       { type === "button" && 
         <button 
           className={`${styles.button} ${icon ? styles.hasIcon : ""} ${theme ? styles[theme] : ""}`}
           onClick={action}
           aria-label={text}
         >
 
           {iconPosition === "start" && icon &&
             <span className={`${styles.icon} ${styles.iconStart} ${styles[icon]}`}>{ handleGetIcon(icon) }</span>
           }
 
           { text }
 
           {iconPosition === "end" && icon &&
             <span className={`${styles.icon} ${styles.iconEnd} ${styles[icon]}`}>{ handleGetIcon(icon) }</span>
           }
           
         </button>
       }
 
       { type === "anchor" && 
         <a 
           href={destination} 
           className={`${styles.button} ${icon ? styles.hasIcon : ""} ${theme ? styles[theme] : ""}`}
           aria-label={destination && destination.includes("https://member.teladoc.com/registrations/get_started") ? "Get started" : aria_label ? aria_label : text}
           target={target === "new window" ? "_blank" : ""}
           rel={target === "new window" ? "noreferrer noopener" : ""}
         >
           {iconPosition === "start" && icon &&
             <span className={`${styles.icon} ${styles.iconStart} ${styles[icon]}`}>
               { handleGetIcon(icon) }
             </span>
           }
 
           { text }
 
           {iconPosition === "end" && icon && 
             <span className={`${styles.icon} ${styles.iconEnd} ${styles[icon]}`}>
               { handleGetIcon(icon) }
             </span>
           }
         </a>
       }
     </>
   )
 }
 