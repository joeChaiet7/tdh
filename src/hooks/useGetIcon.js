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

    console.log(icon)
  }

  return { handleGetIcon }
}