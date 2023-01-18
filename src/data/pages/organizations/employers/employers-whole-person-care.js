const metaData = {
  title: "Virtual Whole Person Care Solutions for Employers",
  description: "Teladoc Health can offer your employees an always-on, unified consumer experience across primary care, chronic care, and mental healthcare."
}

const heroData = {
  type: "pill",
  title: "Manage health the way people experience it",
  subtitle: "Offer an always-on, unified consumer experience across primary care, chronic care and mental healthcare.",
  text_position: "start",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/wpc/emp_wpc_hero.jpg",
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
  icon_stack: "vertical",
  items: [
    {
      id: 0,
      icon: "check cloud",
      title: "Positive employee experience",
      description: "Meet the needs of people of all ages, demographics and lifestyles — on their terms — with one mobile app."
    },
    {
      id: 1,
      icon: "laptop",
      title: "Reduced administrative complexity",
      description: "Manage multiple virtual care programs with a single, scalable platform that fits your ecosystem."
    },
    {
      id: 2,
      icon: "check list",
      title: "Comprehensive care delivery",
      description: "Extend access to preventive, urgent, specialty, chronic and mental healthcare, as well as referrals to in-person specialists."
    }
  ]
}

const teaserData = {
  title: "Whole-person care from a single app",
  text: "Consumers prefer a unified experience for mental and physical health. And they appreciate the convenient access and personalized support they get from our integrated app.",
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
      theme: "purple"
    }
  ]
}

const testimonialData = {
  type: "testimonial cards",
  title: "What our clients are saying",
  items: [
    {
      id: 0,
      name: "Gina San Giovanni",
      role: "Supervisor, Benefits and HR Services",
      company: "AAA Northeast",
      description: "We needed a platform that was accessible, intuitive and consistent for employees, as well as being easy to administer on the employer side.",
      destination: "https://teladochealth.com/resources/case-study/aaa-northeast-client-success-story/"
    },
    {
      id: 1,
      name: "Kyle Longton",
      role: "Chief Operating Officer",
      company: "AFSPA",
      description: "Our members have diverse needs, so our care solutions can't be one-size-fits-all. Members prefer to have one single global solution that they can take from post to post. This means finding care options that they can use when they're stationed overseas and then stateside once they return. Virtual care has played a central role in enabling this possibility.",
      destination: "https://teladochealth.com/resources/case-study/simplifying-access-to-whole-person-care-across-a-global-population/"
    },
    {
      id: 2,
      name: "Jessy Rosales",
      role: "VP of North America Total Rewards",
      company: "SAP",
      description: "We believe that everyone deserves quality access to care because if there's no access, there's no change. We've been happy with the wide availability and efficient, personalized care that Teladoc Health provides to all our employees. The positive results speak for themselves.",
      destination: "https://teladochealth.com/resources/case-study/creating-lasting-behavior-change-through-personalized-engagement/"
    }
  ]
}

const sliderData = {
  type: "resources",
  title: "Put 20+ years of virtual care expertise to work for you",
  items: [
    {
      id: 0,
      title: "Fortune 100 insurance organization",
      type: "case study",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/wpc/hp_wpc_insurance-organization.png",
        alt: "Fortune 100 insurance organization"
      },
      destination: "https://www.teladochealth.com/resources/case-study/fortune-100-company-creates-a-win-win/"
    },
    {
      id: 1,
      title: "American Foreign Service Protective Association (AFSPA)",
      type: "case study",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/wpc/emp_wpc_afspa.jpg",
        alt: "American Foreign Service Protective Association (AFSPA)"
      },
      destination: "https://www.teladochealth.com/resources/case-study/simplifying-access-to-whole-person-care-across-a-global-population/"
    },
    {
      id: 2,
      title: "The ease of engaging with primary care with Primary360",
      type: "interactive",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/wpc/emp_wpc_patient-journey.jpg",
        alt: "The ease of engaging with primary care with Primary360"
      },
      destination: "https://www.teladochealth.com/resources/interactive-journey/primary360-interactive-patient-journeys/"
    },
    {
      id: 3,
      title: "Virtual care transformation model for employers",
      type: "white paper",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/wpc/emp_wpc_transformation-model.jpg",
        alt: "Virtual care transformation model for employers"
      },
      destination: "https://www.teladochealth.com/resources/white-paper/CORP/virtual-care-transformation-model/"
    }
  ]
}

export {
  metaData,
  heroData,
  iconData,
  teaserData,
  testimonialData,
  sliderData
}