import React, { useRef, useEffect, useState } from 'react';
import useGetIcon from '../../../hooks/useGetIcon';

import * as styles from "./siteHeaderLocation.module.scss";

export default function SiteHeaderLocation(props) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  let {
    activeCountry,
    countries,
    scrollDir
  } = props;

  let { handleGetIcon } = useGetIcon();

  let locationRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(locationRef.current && !locationRef.current.contains(e.target)){
        setIsDropdownVisible(false);
      }
    }

    const handleHideOnScroll = () => {
      if(locationRef.current){
        let select = locationRef.current.querySelector('[data-type="locationSelect"]');

        if(isDropdownVisible){
          select.style.display = "none"
        }else {
          select.style.display = "inline-block"
        }
      }
    }

    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('scroll', handleHideOnScroll, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
      document.removeEventListener('scroll', handleHideOnScroll, true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(locationRef.current){
      let select = locationRef.current.querySelector('[data-type="locationSelect"]');

      if(scrollDir === "down" && isDropdownVisible){
        //select.style.display = "none"
        select.style.top = "-200px"
        setIsDropdownVisible(false)
      }

      if(scrollDir === "up" && !isDropdownVisible){
        //select.style.display = "inline-block"
        select.style.top = "75px" //Same height as Nav height

      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationRef, scrollDir])

  return (
    <div className={styles.siteHeaderLocation} ref={locationRef}>
      <button onClick={() => setIsDropdownVisible(prevState => !prevState)}>
        <div>
          <span className={styles.iconContainer}>
            {handleGetIcon("location")}
          </span>
          
          <div className={styles.label}>
            <p>Location</p>
          </div>
           
        </div>

        <div className={styles.active}>
          { activeCountry && activeCountry.text }
          
          <span className={`${styles.chevron} ${isDropdownVisible ? styles.opened : styles.closed}`}>
          {handleGetIcon("chevron down")}
          </span>
        </div>
      </button>

      <div data-type="locationSelect" className={`${styles.select} ${isDropdownVisible ? styles.opened : styles.closed}`}>
        { countries.map(country => (
          <a
            key={country.id}
            className={styles.item}
            href={country.value}
          >
            {country.text}
          </a>
        ))}
      </div>
    </div>
  )
}
