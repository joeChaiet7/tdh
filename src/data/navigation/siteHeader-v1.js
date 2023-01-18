import React from 'react';

import {
  IoNewspaperOutline
} from 'react-icons/io5'

import {
  IoChatbubblesOutline,
} from "react-icons/io5";

import {
  BsCardHeading
} from "react-icons/bs";

import {
  CgPill
} from "react-icons/cg"

import {
  BiSupport
} from "react-icons/bi"

const menuItems = [
  {
    id: 0,
    category: "individuals",
    text: "Expert care",
    type: "dropdown",
    indicatorColor: "#331f65",
    cta:{
      title: "Is there a health issue or concern we can help you with right now?",
      primaryLink: {
        destination: "/",
        text: "Talk to a doctor"
      }
    },
    sections: [
      {
        id: "section-1",
        name: "Explore",
        items: [
          {
            id: "0-1",
            destination: "/expert-care/primary-care",
            text: "Primary Care",
            image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/nav/phone-primary.png"
          },
          {
            id: "0-2",
            destination: "/expert-care/mental-health",
            text: "Mental Health",
            image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/nav/phone-mental.png"
          },
          {
            id: "0-3",
            destination: "/expert-care/condition-management",
            text: "Condition Management",
            image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/nav/phone-chronic.png"
          },
          {
            id: "0-4",
            destination: "/expert-care/specialty-wellness",
            text: "Specialty & Wellness Care",
            image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/nav/phone-wellness.png"
          }
        ]
      }
    ]
  },
  {
    id: 1,
    category: "individuals",
    text: "For Individuals",
    type: "dropdown",
    indicatorColor: "#331f65",
    cta:{
      title: "Is there a health issue or concern we can help you with right now?",
      primaryLink: {
        destination: "/",
        text: "Talk to a doctor"
      }
    },
    sections: [
      {
        id: "section-1",
        name: "Care For",
        items: [
          {
            id: "1-1",
            destination: "/individuals/adults",
            text: "For adults",
            image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/nav/adults.png"
          },
          {
            id: "1-2",
            destination: "/individuals/children",
            text: "For children",
            image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/nav/children.png"
          },
          {
            id: "1-3",
            destination: "/individuals/seniors",
            text: "For seniors",
            image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/nav/seniors.png"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    category: "organizations",
    text: "For Organizations",
    type: "dropdown",
    indicatorColor: "#39bee8",
    cta:{
      title: "Our unique approach to whole-person healthcare is worth seeing and believing.",
      primaryLink: {
        destination: "/",
        text: "Learn about our approach"
      },
      secondaryLink: {
        destination: "/",
        text: "Visit Resource Center",
        icon: <IoNewspaperOutline />
      }
    },
    sections: [
      {
        id: "section-1",
        name: "Hospitals & Health Systems",
        items: [
          {
            id: "2-0-0",
            destination: "/organizations/hospitals-health-systems",
            text: "Overview"
          },
          {
            id: "2-1-0",
            destination: "/",
            text: "Platform (Solo)"
          },
          {
            id: "2-2-0",
            destination: "/",
            text: "Solutions"
          },
          {
            id: "2-3-0",
            destination: "/",
            text: "Devices"
          },
          {
            id: "2-4-0",
            destination: "/",
            text: "Resources"
          }
        ]
      },
      {
        id: "section-2",
        name: "Health Plans",
        items: [
          {
            id: "2-0-1",
            destination: "/organizations/health-plans",
            text: "Overview"
          },
          {
            id: "2-1-1",
            destination: "/",
            text: "Mental Health"
          },
          {
            id: "2-2-1",
            destination: "/",
            text: "Primary Care"
          },
          {
            id: "2-3-1",
            destination: "/",
            text: "Condition Management"
          },
          {
            id: "2-4-1",
            destination: "/",
            text: "Resources"
          }
        ]
      },
      {
        id: "section-3",
        name: "Employers",
        items: [
          {
            id: "2-0-2",
            destination: "/organizations/employers",
            text: "Overview"
          },
          {
            id: "2-1-2",
            destination: "/",
            text: "Mental Health"
          },
          {
            id: "2-2-2",
            destination: "/",
            text: "Primary Care"
          },
          {
            id: "2-3-2",
            destination: "/",
            text: "Condition Management"
          },
          {
            id: "2-4-2",
            destination: "/",
            text: "Resources"
          }
        ]
      }
    ]
  }
];

const additionMenuItems = [
  {
    id: 0,
    category: "individuals",
    name: "Support",
    items: [
      {
        id: 0,
        destination: "/",
        text: "Insurance",
        icon: <BsCardHeading />
      },
      {
        id: 1,
        destination: "/",
        text: "Prescriptions",
        icon: <CgPill />
      },
      {
        id: 2,
        destination: "/",
        text: "FAQs",
        icon: <IoChatbubblesOutline />
    
      },
      {
        id: 3,
        destination: "/",
        text: "Member Support",
        icon: <BiSupport />
      }
    ]
  },
  {
    id: 1,
    category: "organizations",
    name: "Additional Resources",
    items: [
      {
        id: 0,
        destination: "/",
        text: "Whole-Person Care Model",
        icon: <BsCardHeading />
      },
      {
        id: 1,
        destination: "/",
        text: "Resource Center",
        icon: <CgPill />
      }
    ]
  }
];

export { menuItems, additionMenuItems } ;