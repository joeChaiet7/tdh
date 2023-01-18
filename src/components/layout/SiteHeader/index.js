import React, { useRef, useState, useEffect, useContext } from 'react';
import OverflowContext from '../../../context/OverflowContext';
import useGetIcon from '../../../hooks/useGetIcon';

import SiteMenuIcon from './SiteMenuIcon';
import SiteHeaderNav from './SiteHeaderNav';
import SiteMenuIndicator from './SiteMenuIndicator';
import SiteHeaderNavItem from './SiteHeaderNavItem';
import SiteMenu from './SiteMenu';
import SiteMobileMenu from './SiteMobileMenu';
import GlobalSearch from '../../shared/GlobalSearch';
import SiteSearch from '../../shared/GlobalSearch/SiteSearch';

import { menuItems } from '../../../data/navigation/siteHeader';

import * as styles from "./siteHeader.module.scss";

const  TeladocLogo = "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/logos/Teladoc_Health_Logo.png";

export default function SiteHeader({ theme }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState();
  const [menuImage, setMenuImage] = useState({});
  const [menuTarget, setMenuTarget] = useState();
  const [indicatorTarget, setIndicatorTarget] = useState();
  const [activeCountry, setActiveCountry] = useState();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState();
  const [windowDimensions, setWindowDimensions] = useState({});

  const { setSiteOverflow } = useContext(OverflowContext);
  let { handleGetIcon } = useGetIcon();

  const indicatorRef = useRef();

  const countries = [
    {
      id: 0,
      text: "US - English",
      value: "en"
    },
    {
      id: 1,
      text: "US - Spanish",
      value: "us-es"
    },
    {
      id: 2,
      text: "ES - Spanish",
      value: "es"
    },
    {
      id: 3,
      text: "CA - English",
      value: "ca"
    },
    {
      id: 4,
      text: "CA - French",
      value: "ca-fr"
    }
  ]

  useEffect(() => {
    setWindowDimensions({width: window.innerWidth, height: window.innerHeight})
  }, []);

  useEffect(() => {
    if(countries){
      setActiveCountry(countries[0]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * Handle responsive adjustments on window resize
   */
   useEffect(() => {
    function handleResize() {
      setIsMenuVisible(false);
      setActiveMenu();
      setMenuTarget();

      if(window.innerWidth > 1028){
        setIsMobileMenuActive(false);
      }

      if(window.innerWidth < 1028){
        setIsSearchVisible(false);
      }
    }

    //Add event listener for window resize
    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, []);

  //Check scroll direction
  useEffect(() => {
    const threshold = 50;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if(Math.abs(scrollY - lastScrollY) < threshold){
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    }

    const onScroll = () => {
      setIsSearchVisible(false);

      if(!ticking){
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [scrollDir])

  useEffect(() => {
    if(isMobileMenuActive){
      setSiteOverflow("hidden")
    }else{
      setSiteOverflow("unset")
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileMenuActive]);

  useEffect(() => {
    function setIndicatorPosition(){
      if((menuTarget && menuTarget.target) && indicatorRef.current){        
        //Find center of active button
        let target = {}, diff;
        let indicatorLocation = indicatorRef.current.getBoundingClientRect().x;
        let center = menuTarget.target.getBoundingClientRect().x;

        target.start = menuTarget.target.offsetLeft;
        target.width = menuTarget.target.getBoundingClientRect().width;
  
        //If button center location is less than indicator's position, translate negative, else translate positive
        diff = indicatorLocation - center;
  
        if(center < indicatorLocation){
          target.center = indicatorLocation - Math.abs(diff);
        }else{
          target.center = indicatorLocation + Math.abs(diff);
        }
    
        setIndicatorTarget(target);
      }else{
        //setIndicatorTarget()
      }
    }

   setIndicatorPosition(menuTarget);

   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMenu]);

  function handleMenuHover(e, item){
    e.persist()
    setMenuImage({});
    if(e.type === "mouseenter" || e.type === "click"){
      e.target.setAttribute("aria-expanded", "true");
      setIsMenuVisible(true);
      setActiveMenu(item);
      setMenuTarget(e);
    }else{
      e.target.setAttribute("aria-expanded", "false");
      setIsMenuVisible(false);
      setActiveMenu();
      setMenuTarget();
    }
  }

  function toggleMobileMenu() {
    if (isMobileMenuActive) {
      setIsMobileMenuActive(false)
    } else {
      setIsMobileMenuActive(true)
    }
  }
  
  return (
    <>
      <GlobalSearch 
        isSearchVisible={isSearchVisible} 
        setIsSearchVisible={setIsSearchVisible}
      />

      <header 
        className={`${styles.siteHeader} ${isMenuVisible ? styles.dropdownOpen : styles.dropdownClosed} ${isMobileMenuActive ? styles.mobileMenuOpen : ""} ${scrollDir === "down" ? styles.hide : styles.show} ${styles[theme]}`}
        //className={`SiteHeader SiteHeader${isMenuVisible ? "--dropdownOpen" : "--dropdownClosed"} SiteHeader${isMobileMenuActive ? "--mobileMenuOpen" : "--mobileMenuClosed"} SiteHeader--${isHome && !isScrolled ? "transparent" : theme}`}
        style={{
          "--mobileMenuHeight": `${windowDimensions && windowDimensions.height}px`
        }}
      >
        <div className={styles.container}>
          <div className={styles.inner}>

            <div className={styles.primary}>
              <div className={styles.mobileMenuHeader}>
                
                {/* Mobile Menu Nav */}
                <nav>
                  <SiteMenuIcon 
                    isMobileMenuActive={isMobileMenuActive} 
                    toggleMobileMenu={toggleMobileMenu}
                  />
                </nav>

                { isMobileMenuActive && 
                  <SiteSearch 
                    setShowResults={() => {
                      //do nothing
                    }}
                  />
                }
              </div>
              
              <SiteHeaderNav 
                items={menuItems} 
                activeMenu={activeMenu}
                handleMenuHover={handleMenuHover}
              />

              <SiteMenuIndicator
                ref={indicatorRef}
                indicatorTarget={indicatorTarget}
                activeMenu={activeMenu}
              />
            </div>

           <div
              className={styles.logo}
              style={{
                display: isMobileMenuActive ? "none" : "flex"
              }}
            >
              <a
                href="/"
              >
                <title>Teladoc Health Logo</title>
                <img src={TeladocLogo} alt="Teladoc Health" />
              </a>
            </div>

            <div className={styles.secondary}>
              {/*<div className={`${styles.locationContainer} ${styles.desktop}`}>
                <SiteHeaderLocation 
                  countries={countries}
                  activeCountry={activeCountry}
                  setActiveCountry={setActiveCountry}
                  scrollDir={scrollDir}
                />
              </div>*/}

              <nav 
                className={styles.authNav}
                style={{
                  display: isMobileMenuActive ? "none" : "flex"
                }}
              >
                <ul className={styles.authNavList}>
                  <SiteHeaderNavItem 
                    id={styles["login"]}
                    item={{
                      id: 0,
                      text: "Log in",
                      destination: "https://member.teladoc.com/signin",
                      type: "button",
                      icon: "login",
                      iconPosition: "start"
                    }} 
                  /> 
              
                  <SiteHeaderNavItem 
                    id={styles["register"]}
                    item={{
                      id: 0,
                      text: "Sign up",
                      destination: "https://member.teladoc.com/registrations/get_started",
                      type: "button"
                    }} 
                  /> 
                </ul>
              </nav>

              <div className={`${styles.searchContainer} ${styles.desktop}`}>
                <button onClick={() => setIsSearchVisible(prevState => !prevState)}>
                  {handleGetIcon("search")}
                </button>
              </div>
            </div>
          </div>

          <SiteMenu 
            activeMenu={activeMenu} 
            handleMenuHover={handleMenuHover}
            menuImage={menuImage}
            setMenuImage={setMenuImage}
          />
        </div>

        <SiteMobileMenu
          items={menuItems}
          countries={countries}
          activeCountry={activeCountry}
          setActiveCountry={setActiveCountry}
          isMobileMenuActive={isMobileMenuActive}
          mobileMenuHeight={windowDimensions && windowDimensions.height}
        />

        <div className={styles.circle} />
      </header>

      <div 
        className={styles.overlay} 
        style={{
          opacity: isMobileMenuActive ? 1 : 0,
          visibility: isMobileMenuActive ? "visible" : "hidden"
        }} 
      />

    </>
  )
}
