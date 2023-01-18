import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowRightToBracket,
  faChevronDown,
  faHeart,
  faPlay,
  faStarSharp,
  faTags,
  faTrophy,
  faPhone,
  faXmark,
  faCircleCheck,
  faPiggyBank,
  faBullhorn
} from '@fortawesome/pro-regular-svg-icons'

import {
  faArrowLeft,
  faArrowRight,
  faMagnifyingGlass,
  faCheck,
  faPause,
  faPlay as faPlaySolid,
  faLayerGroup,
  faCircleUser,
  faSuitcaseMedical,
  faCircleNotch,
  faFileLines,
  faSignalBars,
  faArrowPointer,
  faVideo
} from '@fortawesome/pro-solid-svg-icons'

import {
  faLocationDot,
} from '@fortawesome/sharp-solid-svg-icons'

import {
  faHandHoldingMedical,
  faHandHoldingHeart,
  faLightbulb,
  faListCheck,
  faNotesMedical,
  faBadgeCheck,
  faUserGroup,
  faUserDoctor,
  faBuilding,
  faLaptop,
  faLaptopMedical,
  faDollarCircle,
  faUserDoctorMessage,
  faUser,
  faCheck as faCheckThin,
  faHeart as faHeartThin
} from '@fortawesome/pro-light-svg-icons' 

import { 
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
  faApple,
  faGooglePlay
} from '@fortawesome/free-brands-svg-icons'

import * as styles from '../styles/icons.module.scss'

export default function useGetIcon() {
  const handleGetIcon = (icon) => {
    let faIcon;

    /* Brands */
    if(icon === "brand facebook"){
      faIcon = faFacebook;
    }

    if(icon === "brand instagram"){
      faIcon = faInstagram;
    }

    if(icon === "brand linkedIn"){
      faIcon = faLinkedin;
    }

    if(icon === "brand twitter"){
      faIcon = faTwitter;
    }

    if(icon === "brand youtube"){
      faIcon = faYoutube;
    }

    /* Misc */
    if(icon === "apps") {
      return (
        <>
          <FontAwesomeIcon icon={faApple} />
          <FontAwesomeIcon icon={faGooglePlay} />
        </>
      )
    }

    if(icon === "arrow forward"){
      faIcon = faArrowRight;
    }

    if(icon === "arrow back"){
      faIcon = faArrowLeft;
    }

    if(icon === 'building'){
      faIcon = faBuilding;
    }

    if(icon === 'bulb'){
      faIcon = faLightbulb;
    }

    if(icon === 'case study'){
      faIcon = faSignalBars;
    }

    if(icon === 'check'){
      faIcon = faCheck;
    }

    if(icon === 'check thin'){
      faIcon = faCheckThin;
    }

    if(icon === 'check cloud'){
      faIcon = faBadgeCheck;
    }

    if(icon === 'check list'){
      faIcon = faListCheck;
    }

    if(icon === "chevron down"){
      faIcon = faChevronDown;
    }

    if(icon === "circle check"){
      faIcon = faCircleCheck;
    }

    if(icon === "circle notch"){
      faIcon = faCircleNotch;
    }

    if(icon === 'close'){
      faIcon = faXmark;
    }

    if(icon === 'doctor'){
      faIcon = faUserDoctor;
    }

    if(icon === 'doctor chat'){
      faIcon = faUserDoctorMessage;
    }

    if(icon === "dollar circle"){
      faIcon = faDollarCircle;
    }

    if(icon === 'hand health'){
      faIcon = faHandHoldingMedical;
    }

    if(icon === 'hand heart'){
      faIcon = faHandHoldingHeart;
    }

    if(icon === "heart"){
      faIcon = faHeart;
    }

    if(icon === "heart thin"){
      faIcon = faHeartThin;
    }

    if(icon === 'insights'){
      faIcon = faFileLines;
    }

    if(icon === 'interactive'){
      faIcon = faArrowPointer;
    }

    if(icon === "laptop"){
      faIcon = faLaptop;
    }

    if(icon === "laptop medical"){
      faIcon = faLaptopMedical;
    }

    if(icon === "layers"){
      faIcon = faLayerGroup;
    }

    if(icon === "location"){
      faIcon = faLocationDot;
    }

    if(icon === "login"){
      faIcon = faArrowRightToBracket;
    }

    if(icon === "medical briefcase"){
      faIcon = faSuitcaseMedical;
    }

    if(icon === "medical tile") {
      faIcon = faNotesMedical;
    }

    if(icon === 'megaphone'){
      faIcon = faBullhorn;
    }

    if(icon === "phone"){
      faIcon = faPhone;
    }

    if(icon === "pause"){
      faIcon = faPause;
    }

    if(icon === "people"){
      faIcon = faUserGroup;
    }

    if(icon === "piggy bank"){
      faIcon = faPiggyBank;
    }

    if(icon === "play"){
      faIcon = faPlay;
    }

    if(icon === "play solid"){
      faIcon = faPlaySolid;
    }

    if(icon === "price tag"){
      faIcon = faTags;
    }

    if(icon === "search") {
      faIcon = faMagnifyingGlass;
    }

    if(icon === "star") {
      faIcon = faStarSharp;
    }

    if(icon === "stars (3)") {
      return (
        <>
          <FontAwesomeIcon icon={faStarSharp} />
          <FontAwesomeIcon icon={faStarSharp} />
          <FontAwesomeIcon icon={faStarSharp} />
        </>
      );
    }

    if(icon === "trophy"){
      faIcon = faTrophy;
    }

    if(icon === "user"){
      faIcon = faUser;
    }

    if(icon === "user circle"){
      faIcon = faCircleUser;
    }

    if(icon === "video"){
      faIcon = faVideo;
    }

    if(icon === 'white paper'){
      faIcon = faFileLines;
    }

    /* TDH Icons */

    if(icon === 'tdh connector'){
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 730.17 730.17"><g className="cls-1" style={{isolation: "isolate"}}><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g className="cls-2" style={{mixBlendMode: "overlay"}}><path className="cls-3" d="M424.9,4.91a137.09,137.09,0,0,1-9.68,176.21c81,22,140.54,96,140.54,184,0,105.3-85.37,190.67-190.67,190.67a100.62,100.62,0,0,0,0,174.41c201.63,0,365.08-163.45,365.08-365.08C730.17,183.83,598.08,33.45,424.9,4.91Z"/><path className="cls-3" d="M277.79,643A137.91,137.91,0,0,1,315,549.06c-81-22-140.55-96-140.55-184,0-105.31,85.37-190.68,190.68-190.68A100.62,100.62,0,0,0,365.09,0C163.46,0,0,163.46,0,365.09,0,546.34,132.1,696.72,305.27,725.27A137.66,137.66,0,0,1,277.79,643Z"/></g></g></g></g></svg>
    }

    if(icon === "tdh diabetes meter"){
      return <img src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/icons/tdh_diabetes_meter_icon.png" alt="" />
    }

    if(icon === "tdh heart white"){
      return <img src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/icons/heart-icon-white.png" alt="" />
    }

    if(icon === "tdh hypertension meter"){
      return <img src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/icons/tdh_hypertension_meter_icon.png" alt="" />
    }

    if(icon === "tdh shield"){
      return <img src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/icons/tdh_shield_icon.png" alt="" />
    }

    if(icon === "tdh scale"){
      return <img src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/icons/tdh_scale_icon.png" alt="" />
    }

    if(icon === "tdh thumbs up"){
      return <div className={styles.imageIcon}>
        <img src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/icons/tdh_thumbs-up_icon.png" alt="" />
      </div>
    }

    /* Device Icons */

    if(icon === "tdh diabetes device") {
      return ( 
        <div className={styles.imageIcon}>
          <img src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/expert-care/condition-management/ccm_diabetes-device.png" alt="" />
          <div className={styles.shape} />
        </div>
      )
    }

    if(icon === "tdh diabetes prevention") {
      return (
        <div className={styles.imageIcon}>
          <img src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/expert-care/condition-management/ccm_diabetes-prevention.png" alt="" />
          <div className={styles.shape} />
        </div>
      )
    }

    if(icon === "tdh hypertension device") {
      return (
        <div className={styles.imageIcon}>
          <img src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/expert-care/condition-management/ccm_hypertension-device.png" alt="" />
          <div className={styles.shape} />
        </div>
      )
    }

    if(icon === "tdh weight device") {
      return (
        <div className={styles.imageIcon}>
          <img src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/expert-care/condition-management/ccm_weight-device.png" alt="" />
          <div className={styles.shape} />
        </div>
      )
    }

    if(faIcon){
      return <FontAwesomeIcon icon={faIcon} />
    }else{
      return
    }

  

  }

  return { handleGetIcon }
}