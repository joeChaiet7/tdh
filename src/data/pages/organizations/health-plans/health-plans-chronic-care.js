const metaData = {
  title: "",
  description: ""
}

const pageData = {
  disclaimer: "*Data on file (DS-8467)\n\n **Teladoc Health data\n\n ***Data on file (DS-10501)"
}

const heroData = {
  type: "pill",
  title: "Chronic care for health plans",
  subtitle: "Data-driven interactions drive sustained behavior change and guaranteed value for people living with multiple conditions.",
  text_position: "start",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/health-plans/ccm/hp_ccm_hero.jpg",
    alt: "Man smiling"
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

const gridData = {
  icon_stack: "horizontal",
  items: [
    {
      id: 0,
      title: "High-value outcomes",
      description: "See the impact of sustained behavior change, including guaranteed clinical outcomes and a lower total medical spend",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/ccm/emp_ccm_high-value.png",
        alt: "High-value outcomes"
      }
    },
    {
      id: 1,
      title: "Powerful engagement",
      description: "Drive utilization, engagement and higher Net Promoter Scores with a single app and a personalized experience people love",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/ccm/emp_ccm_powerful-engagement.png",
        alt: "Powerful engagement"
      }
    },
    {
      id: 2,
      title: "Differentiated benefits experience",
      description: "Offer clients a compelling member experience with programs that include connected devices, clinician oversight and convenient home delivery programs",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/ccm/emp_ccm_differentiated.png",
        alt: "Differentiated benefits experience"
      }
    },
    {
      id: 3,
      title: "Innovation plus experience",
      description: "Partner with an established leader in chronic care to help you realize your cost and care goals — reliably and at scale ",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/health-plans/ccm/hp_ccm_innovation.png",
        alt: "Innovation plus experience"
      }
    }
  ]
}

const statsData = {
  theme: "light",
  text: "## The power of integrated chronic condition management",
  text_align: "left",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/devices/devices_pavers.png",
    alt: "",
    aria_hidden: true
  },
  items: [
    {
      id: 0,
      description: "average additional decrease in systolic blood pressure among people in multiple programs beyond achievements in a standalone program*",
      type: "stat",
      stat_value: 5,
      stat_metric: "mmHG",
      theme: "light",
      bubble_color: "pink"
    },
    {
      id: 1,
      description: "additional per participant per month savings beyond standalone diabetes management program savings**",
      type: "stat",
      stat_value: 50,
      stat_metric: "$",
      theme: "light",
      bubble_color: "pink"
    },
    {
      id: 2,
      description: "higher engagement for people enrolled in multiple programs***",
      type: "stat",
      stat_value: 11,
      stat_metric: "%",
      theme: "light",
      bubble_color: "pink"
    },
    {
      id: 3,
      description: "average additional decrease among people in multiple programs beyond achievements in a standalone program*",
      type: "stat",
      stat_value: 0.6,
      stat_metric: "% A1c",
      theme: "light",
      bubble_color: "pink"
    }
  ],
}

const testimonialData = {
  type: "testimonial cards",
  title: "What our clients are saying",
  items: [
    {
      id: 0,
      name: "April Bettencourt",
      role: "Senior Director",
      company: "Global Employee Benefits, VSP",
      description: "When people have multiple chronic conditions, issues in behavioral health can arise. When we looked at hypertension and diabetes in relation to the Teladoc Health Chronic Condition Management programs, they encompass every part of a person's overall health and wellness; that's what I was really excited to implement.",
    },
    {
      id: 1,
      name: "Michael Cooper",
      role: "Director of Compensation",
      company: "Benefits and Wellness at DTE Energy",
      description: "As DTE works to become a best-in-class health and well-being supportive employer, adding a solution to address chronic conditions was a must. Teladoc Health made the decision easy by offering solutions that address the whole person.",
    },
    {
      id: 2,
      name: "Jessy Rosales",
      role: "VP of North America ",
      company: "Total Rewards, SAP",
      description: "We believe that everyone deserves quality access to care, because if there's no access, there's no change. We've been happy with the wide availability and efficient, personalized care that Teladoc Health provides to all our employees. The positive results speak for themselves.",
    }
  ]
}

const teaserData = {
  theme: "dark",
  title: "Multi-condition management from a single app",
  text: "Chronic conditions don't exist in isolation. A single app to manage them all, along with a full suite of virtual care services, adds up to a truly whole-person experience.",
  text_position: "end",
  showRating: true,
  rating: {
    value: 4.8,
    total: 5,
    date: 'April 23, 2022'
  },
  image_theme: "app",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/ccm/emp_ccm_phone.png",
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
  title: "Minimize the complexity of chronic condition management",
  items: [
    {
      id: 0,
      title: "24/7 emergency remote monitoring",
      description: "with out-of-range blood glucose readings triggering health coach outreach within 2 minutes",
    },
    {
      id: 1,
      title: "Proactive clinical interventions",
      description: "continuous-glucose monitor (CGM) access, and a dedicated care team supports ongoing care at no additional cost",
    },
    {
      id: 2,
      title: "A proven solution",
      description: "serving more than 730,000 people with an average member Net Promoter Score (NPS) score of +60",
    }
  ]
}

const resourcesData = {
  type: "resources",
  title: "Insights from our 20+ years of experience ",
  items: [
    {
      id: 0,
      title: "Do social determinants of health affect the use of virtual chronic care solutions?",
      type: "case study",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/health-plans/ccm/hp_ccm_social-determinants.jpg",
        alt: "Do social determinants of health affect the use of virtual chronic care solutions?"
      },
      destination: "https://business.teladochealth.com/resources/case-study/teladoc-health-creating-a-healthier-workplace-from-within/"
    },
    {
      id: 1,
      title: "Member testimonial: Kim",
      type: "video",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/health-plans/ccm/hp_ccm_kim.jpg",
        alt: "Member testimonial: Kim"
      },
      destination: "https://business.teladochealth.com/resources/case-study/teladoc-health-creating-a-healthier-workplace-from-within/"
    },
    {
      id: 2,
      title: "Multi-program chronic condition solutions amplify outcomes",
      type: "case study",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/ccm/emp_ccm_multi-program.jpg",
        alt: "Multi-program chronic condition solutions amplify outcomes"
      },
      destination: "https://business.teladochealth.com/resources/case-study/teladoc-health-creating-a-healthier-workplace-from-within/"
    },
    {
      id: 3,
      title: "Member testimonial: Debbie",
      type: "video",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/health-plans/ccm/hp_ccm_debbie.jpg",
        alt: "Member testimonial: Debbie"
      },
      destination: "https://business.teladochealth.com/resources/video/primary-care-experience-video/"
    },
    {
      id: 4,
      title: "Member testimonial: Manny",
      type: "video",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/employers/ccm/emp_ccm_manny.jpg",
        alt: "Member testimonial: Manny"
      },
      destination: "https://business.teladochealth.com/resources/video/primary-care-experience-video/"
    },
    {
      id: 5,
      title: "When it comes to diabetes, no two paths are the same because no two individuals are the same",
      type: "article",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/health-plans/ccm/hp_ccm_diabetes.jpg",
        alt: "When it comes to diabetes, no two paths are the same because no two individuals are the same"
      },
      destination: "https://business.teladochealth.com/resources/video/primary-care-experience-video/"
    }
  ]
}

export {
  metaData,
  pageData,
  heroData,
  gridData,
  statsData,
  testimonialData,
  teaserData,
  accordionData,
  resourcesData
}