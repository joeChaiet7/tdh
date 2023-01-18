const metaData = {
  title: "",
  description: ""
}

const pageData = {
  disclaimer: "*Teladoc Health data "
}

const heroData = {
  type: "circle",
  title: "Primary care for health plans",
  subtitle: "Empower sustainable health improvements with a whole-person care experience, from annual exams to more complex care.",
  text_position: "start",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/health-plans/p360/hp_p360_hero.jpg",
    alt: "Father holding his child"
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
      description: "Meet the demands of people's busy and diverse lifestyles by making it easy for them to connect.",
      icon: "laptop",
    },
    {
      id: 1,
      title: "Cost-effective care navigation",
      description: "Create a concierge-like experience, referring members to in-network care and services based on cost and quality data.",
      icon: "dollar circle",
    },
    {
      id: 2,
      title: "Improved outcomes",
      description: "Close gaps and extend access to high-quality care for diverse populations, including Medicare, Medicaid and Marketplace.",
      icon: "heart thin",
    },
    {
      id: 3,
      title: "Trusted personalized experience",
      description: "In-depth office visits lasting an average of 54 minutes give care teams time to develop and deliver proactive longitudinal care plans.",
      icon: "check thin",
    }
  ]
}

const statsData = {
  title: "An experience they want drives outcomes you need",
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
  theme: "dark",
  title: "Seamless, hybrid care from a single app",
  text: "Give members easy on-ramps to mental health services, chronic care support, and even in-person, in-network referrals—all from a single app.",
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

const accordionData = {
  title: "Break through traditional barriers to primary care use",
  items: [
    {
      id: 0,
      title: "Dedicated care team",
      description: "creates an individual's care plan, coordinates referrals, manages follow-up and addresses gaps in care",
    },
    {
      id: 1,
      title: "Longitudinal care plans",
      description: "include visit summaries, recommendations, health goals, lab results, prescriptions and patient education",
    },
    {
      id: 2,
      title: "Smooth access to in-home care",
      description: "connects members to in-home care such as labs, screenings, vaccinations and more for full-scope primary care",
    },
    {
      id: 3,
      title: "Always-on support",
      description: "includes unlimited in-app messaging with care team, AI-enabled health nudges and more to establish ongoing relationships",
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
      title: "Primary care patient journeys",
      type: "interactive",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/p360/emp_p360_patient-journey.jpg",
        alt: "Primary care patient journeys"
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
  accordionData,
  sliderData
}