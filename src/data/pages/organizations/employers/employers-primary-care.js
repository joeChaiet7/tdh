const metaData = {
  title: "",
  description: ""
}

const pageData = {
  disclaimer: "*Teladoc Health data"
}

const heroData = {
  type: "pill",
  title: "Primary care for employers",
  subtitle: "Empower sustainable health improvements with a whole-person care experience, from annual exams to more complex care.",
  text_position: "start",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/p360/emp_p360_hero.jpg",
    alt: "Woman smiling while looking at her phone"
  },
  theme: "dark",
  cta: [
    {
      type: "button",
      text: "Get in touch",
      action_type: "form",
      action_url: "4601",
      theme: "purple"
    }
  ]
}

const iconData = {
  title: "",
  icon_stack: "vertical",
  items: [
    {
      id: 0,
      title: "Convenient access to care",
      description: "Meet the demands of employees' busy and diverse lifestyles by making it easy for them to connect.",
      icon: "laptop medical",
    },
    {
      id: 1,
      title: "Cost-effective care navigation",
      description: "Create a concierge-like experience, referring people to in-network care and services based on cost and quality data.",
      icon: "dollar circle",
    },
    {
      id: 2,
      title: "Personalized experiences",
      description: "Optimize engagement with data-driven programs and consumer engagement best practices.",
      icon: "doctor chat",
    },
    {
      id: 3,
      title: "Comprehensive whole-person care",
      description: "Extend access to preventive, urgent, specialty, chronic and mental health care, with referrals to in-person specialists as needed.",
      icon: "user",
    }
  ]
}

const statsData = {
  title: "An experience your employees want drives the outcomes you both need",
  items: [
    {
      id: 0,
      type: "donut",
      stat_value: 37,
      stat_metric: "%",
      description: "of people with diabetes were newly diagnosed via primary care and connected sooner to condition management support*",
      accent: "purple"
    },
    {
      id: 1,
      type: "donut",
      stat_value: 33,
      stat_metric: "%",
      description: "of participants were recommended to other Teladoc Health services, including mental health, nutrition and dermatology and  in-person care*",
      accent: "pink"
    },
    {
      id: 2,
      type: "donut",
      stat_value: 98,
      stat_metric: "%",
      description: "member satisfaction*, keeping the service top-of-mind",
      accent: "green"
    }
  ]
}

const teaserData = {
  theme: "light",
  title: "Seamless, hybrid care from a single app ",
  text: "Offer employees easy on-ramps to expert medical opinions, chronic care support and even referrals to your benefit vendors—all from a single app.",
  text_position: "end",
  showRating: true,
  rating: {
    value: 4.8,
    total: 5,
    date: 'April 23, 2022'
  },
  image_theme: "specialty",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/phones/phone-primary-care_v2.png",
    alt: ""
  },
  cta: [
    {
      type: "button",
      text: "Request a demo",
      action_type: "form",
      action_url: "4601",
      theme: "white"
    }
  ]
}

const testimonialsData = {
  title: "Why people love our primary care solution ",
  items: [
    {
      id: 0,
      title: "Alex",
      subtitle: "Primary Care",
      description: "We needed a platform that was accessible, intuitive and consistent for employees, as well as being easy to administer on the employer side.",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/p360/emp_p360_testimonial.jpg",
        alt: ""
      }
    }
  ]
}

const accordionData = {
  theme: "light",
  title: "Break through traditional barriers to primary care",
  default_image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/p360/emp_p360_default.png",
    alt: "Teladoc Health Primary Care"  
  },
  items: [
    {
      id: 0,
      title: "Dedicated care team",
      description: "creates an individual's care plan, coordinates referrals, manages follow-up and addresses gaps in care",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/devices/devices_pavers.png",
        alt: "Dedicated care team"
      }
    },
    {
      id: 1,
      title: "Longitudinal care plan",
      description: "include visit summaries, recommendations, health goals, lab results, prescriptions and patient education",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/home/home_accordion-affordable.jpg",
        alt: "Longitudinal care plan"
      }
    },
    {
      id: 2,
      title: "Smooth access to in-home care",
      description: "connects members to in-home care such as labs, screenings, vaccinations and more for full-scope primary care",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/p360/emp_p360_smooth-access.png",
        alt: "Smooth access to in-home care"
      }
    },
    {
      id: 3,
      title: "Always-on support",
      description: "includes unlimited in-app messaging with care team, AI-enabled health nudges and more to establish ongoing relationships",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/p360/emp_p360_always-on.png",
        alt: "Always-on support"
      }
    }
  ]
}

const sliderData = {
  type: "resources",
  title: "Put 20+ years of virtual care expertise to work for you",
  items: [
    {
      id: 0,
      title: "Teladoc Health creating a healthier workplace from within",
      type: "case study",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/p360/emp_p360_creating-healthier-workplace_case-study.jpg",
        alt: "Teladoc Health creating a healthier workplace from within"
      },
      destination: "https://business.teladochealth.com/resources/case-study/teladoc-health-creating-a-healthier-workplace-from-within/"
    },
    {
      id: 1,
      title: "See how Primary360 makes it easy for people to engage with everything primary care has to offer",
      type: "interactive",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/p360/emp_p360_patient-journey.jpg",
        alt: "See how Primary360 makes it easy for people to engage with everything primary care has to offer"
      },
      destination: "https://business.teladochealth.com/resources/interactive-journey/primary360-interactive-patient-journeys/"
    },
    {
      id: 2,
      title: "Our primary care experience",
      type: "video",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/p360/emp_p360_experience.jpg",
        alt: "Our primary care experience"
      },
      destination: "https://business.teladochealth.com/resources/video/primary-care-experience-video/"
    }
  ]
}

export {
  metaData,
  pageData,
  heroData,
  iconData,
  statsData,
  teaserData,
  testimonialsData,
  accordionData,
  sliderData
}