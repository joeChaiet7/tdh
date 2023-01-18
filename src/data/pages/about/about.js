const metaData = {
  title: "About Teladoc Health",
  description: "Teladoc Health is the global leader in whole-person virtual health care, offering the technology, expertise, and the power to improve health for all."
}

const heroData = {
  type: "bubbles",
  theme: "dark",
  text_position: "start",
  title: "Empowering all people everywhere",
  subtitle: "Teladoc Health was founded on a simple, yet revolutionary idea: that everyone should have access to the best healthcare, anywhere in the world on their terms. Today, we're delivering on our mission by providing whole-person virtual care that includes primary care, mental health, chronic condition management and more.",
  images: [
    {
      id: 0,
      url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_hero_4.jpg",
      alt: ""
    },
    {
      id: 1,
      url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_hero_3.jpg",
      alt: ""
    },
    {
      id: 2,
      url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_hero_2.jpg",
      alt: ""
    },
    {
      id: 3,
      url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_hero_1.jpg",
      alt: ""
    },
    {
      id: 4,
      url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_hero_5.jpg",
      alt: ""
    },
    {
      id: 5,
      url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_hero_6.jpg",
      alt: ""
    },
    {
      id: 6,
      url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_hero_7.jpg",
      alt: ""
    },
    {
      id: 7,
      url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_hero_8.jpg",
      alt: ""
    }
  ]
}

const missionData = {
  title: "Making a global impact on health",
  text: "Teladoc Health's 2021 Corporate Social Responsibility (CSR) report highlights our commitment to empower all people everywhere to live their healthiest lives. Throughout this report, we frame our progress and goals around the categories of Consumers & Clients, Communities, and Colleagues—reflecting those we serve and partner with around the world.",
  text_position: "end",
  text_align: "left",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_mission.png",
    alt: ""
  },
  cta: [
    {
      type: "button",
      text: "Read the report",
      action_type: "download",
      action_url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pdf/CSR_2021.pdf",
      theme: "purple"
    },
  ]
}

const visionData = {
  title: "Make virtual care the first step on any healthcare journey",
  subtitle: "Our Vision",
  text: "We're creating a truly unified and personalized consumer experience; developing technologies to connect to patients and extend the reach of care providers; delivering the highest standard of clinical quality at every touchpoint; and enhancing health decisions and outcomes with smart data and actionable insights.",
  text_position: "start",
  text_align: "left",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_vision.png",
    alt: ""
  }
}

const jasonData = { 
  text: "The people of Teladoc Health are committed, now more than ever, to use our position as a global company to expand equitable access to care and create a world where everyone has an opportunity to attain their full health potential.",
  image_caption: "### Jason Gorevic\n\n CEO Teladoc Health",
  color: "darkPurple",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_jason.png",
    alt: ""
  },
  cta: [
    {
      type: "anchor",
      text: "Meet the leadership team",
      action_type: "link",
      action_url: "/about/leadership",
      theme: "outline"
    },
    /*{
      type: "anchor",
      text: "Meet the board of directors",
      action_type: "link",
      action_url: "https://member.teladoc.com/registrations/get_started",
      theme: "outline"
    }*/
  ]
}

const accordionData = {
  theme: "light",
  title: "A commitment to diversity and inclusion",
  subtitle: "Our commitment to diversity, equity and inclusion helps ensure our organization is reflective of the millions of people we serve around the world, and ensures that all voices are heard.",
  default_image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_diversity.png",
    alt: ""
  },
  items: [
    {
      id: 0,
      title: "Communication",
      description: "Every voice deserves to be heard. We enable and encourage conversation and consistently communicate the value of an inclusive environment."
    },
    {
      id: 1,
      title: "Education",
      description: "We equip our people with tools, training, and resources to become more aware and prepared for the future."
    },
    {
      id: 2,
      title: "Talent management",
      description: "Building up a diverse workforce takes time, training, and the conscious effort of dedicated leaders at all levels, from recruiting to performance measurement."
    }
  ]
}

const valuesData = {
  text: "## Guided by our shared values\n\n- We are passionate about taking care of people.\n\n- We are committed to unsurpassed quality.\n\n- We lead with integrity, accountability and transparency.\n\n- We respect each other and value succeeding together.\n\n- We strive to create value.\n\n- We stand up for what's right.\n\n- We keep our promises.",
  text_position: "end",
  text_align: "left",
  list_columns: 1,
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_values.png",
    alt: ""
  }
}

const statsData = {
  theme: "light",
  text: "## Strength in numbers",
  text_align: "center",
  items: [
    {
      id: 0,
      description: "Clients",
      type: "stat",
      stat_value: 12000,
      stat_metric: "+",
      theme: "light",
      bubble_color: "purple"
    },
    {
      id: 1,
      description: "Employees",
      type: "stat",
      stat_value: 5000,
      stat_metric: "+",
      theme: "light",
      bubble_color: "purple"
    },
    {
      id: 2,
      description: "U.S. paid members",
      type: "stat",
      stat_value: 56,
      stat_metric: "M+",
      theme: "light",
      bubble_color: "purple"
    },
    {
      id: 3,
      description: "medical visits delivered in 2021",
      type: "stat",
      stat_value: 15,
      stat_metric: "M+",
      theme: "light",
      bubble_color: "purple"
    }
  ],
}

const awardsData = {
  text:  "## Featured awards\n\n We are proud to be recognized for not only our award-winning innovative consumer experience but as an inspiring place to work.",
  text_align: "center",
  items: [
    {
      id: 0,
      title: "Time",
      description: "Time 100 Most Influential Companies 2021",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/awards/award_time-100-most-influential-2021.jpg",
        alt: "Time 100 Most Influential Companies 2021"
      }
    },
    {
      id: 1,
      title: "Fast Company",
      description: "Fast Company Most Innovative Company 2021",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/awards/award_fast-company-most-innovative-2021.jpg",
        alt: "Fast Company Most Innovative Company 2021"
      }
    },
    {
      id: 2,
      title: "Forbes",
      description: "Forbes Best Mid-Size Employer 2021",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/awards/award_forbes-best-mid-size-2021.jpg",
        alt: "Forbes Best Mid-Size Employer 2021"
      }
    },
    {
      id: 3,
      title: "Crain's New York Business",
      description: "Crain's New York Business",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/awards/award_crains.jpg",
        alt: "Crain's New York Business"
      }
    }
  ]
}

const gridData = {
  title: "Dive deeper",
  items: [
    {
      id: 0,
      title: "Investors",
      description: "Find the latest information on our financial performance",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_investors.png",
        alt: "Investors"
      },
      destination: "https://ir.teladochealth.com/investors/default.aspx",
      target: "_blank",
      rel: "noreferrer noopener"
    },
    {
      id: 1,
      title: "Newsroom",
      description: "Browse our latest press releases, media coverage and more",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/about/about_newsroom.png",
        alt: "Newsroom"
      },
      destination: "https://business.teladochealth.com/newsroom/",
      target: "_blank",
      rel: "noreferrer noopener"
    }
  ]
}

export {
  metaData,
  heroData,
  missionData,
  visionData,
  jasonData,
  accordionData,
  valuesData,
  statsData,
  awardsData,
  gridData
}