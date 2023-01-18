import React from 'react';

import "./siteHeader.scss";

export default function SiteMenuSection({ section }) {

  return (
    <section className="SiteMenuSection">
      <div className="SiteMenuSection__body">
        {/* section.name &&
          <div className="SiteMenuSection__title">{section.name}</div>
        */}
        
        <ul className="SiteMenuSection__list">
          {section && section.items && section.items.map(item => (
            <li key={item.id} className="SiteMenuSection__listItem">
              <a href={item.destination}>
              { item.icon &&
                <span className="iconContainer">
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
    </section>
  )
}
