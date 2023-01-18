/**
 * SiteLocationMenu (Country Selector)
 * Child component
 * Select element to choose locale to set the site language.
 * @typedef {object} Props
 * @property {function} setActiveCountry - The title of the Hero Component 
 * @property {object} countries - The subtitle of the Hero Component 
 */

import React from 'react';
import useGetIcon from '../../../hooks/useGetIcon';

import "./siteHeader.scss";

export default function SiteLocationMenu(props) {
  let {
    setActiveCountry,
    countries
  } = props;

  let { handleGetIcon } = useGetIcon();

  function handleCountrySelect(country){
    setActiveCountry(country)
  }

  return (
    <div>
      <label htmlFor="location-select">
        <span className='iconContainer'>
          {handleGetIcon("location")}
        </span>
        
        Location
      </label>
      
      <div id="location-select" >
        {countries.map(country => (
          <a
            key={country.id}
            href={country.value}
          >
            {country.text}
          </a>
        ))}
      </div>

      <select 
        id="location-select" 
        name="location"
        onChange={e => handleCountrySelect(e.target.value)}
      >
        {countries.map(country => (
          <option
            key={country.id}
            value={country.value}
          >
            {country.text}
          </option>
        ))}
      </select>
    </div>
  )
}
