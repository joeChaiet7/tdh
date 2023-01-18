const metaData = {
  title: "Virtual Care Platform for Hospitals & Health Systems",
  description: "Teladoc Health Solo is an enterprise platform enabling a wide range of virtual care programs and devices across all acuity levels."
}

const pageData = {
  propelId: "PL015964"
}

const heroData = {
  type: "pill",
  title: "Solo™ virtual care platform",
  subtitle: "One healthcare platform. Endless possibilities.",
  text_position: "start",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/hospitals-health-systems/platform/hhs_platform_hero.jpg",
    alt: ""
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
  icon_stack: "horizontal",
  items: [
    {
      id: 0,
      icon: "check cloud",
      title: "Simplify the patient and clinician experience",
      description: "Ease your patient and clinician experience with configurable healthcare technology that integrates with your workflows for improved patient outcomes."
    },
    {
      id: 1,
      icon: "check list",
      title: "Innovate for better care delivery",
      description: "Make your existing investments work harder through innovative care models and by uncovering new insights that lead to new opportunities."
    },
    {
      id: 2,
      icon: "medical tile",
      title: "Secure, reliable care",
      description: "Offer reliable care at scale through an integrated enterprise platform that expands your reach."
    }
  ]
}

const teaserData = {
  text: "**Bring patients and care teams closer together, inside or outside of a facility, and remove complexity for better care coordination and outcomes.**\n\n- Configurable workflows, from the simple to the comprehensive, remove complexity and focus on care delivery.\n- Integration with existing IT systems, including EMRs, reduces point solutions and total cost of ownership.\n- Anywhere, anytime care extends reach and increases patient access, engagement and satisfaction.\n- **24/7** proactive monitoring and technical support for patients and care teams keep systems running smoothly and ease the burden on IT.",
  list_type: "bullet",
  list_columns: 1,
  text_position: "end",
  text_align: "left",
  image_theme: "specialty",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/hospitals-health-systems/platform/hhs_solo_quad.png",
    alt: ""
  },
}

const sliderData = {
  type: "solutions",
  title: "Use cases across the care continuum",
  items: [
    {
      id: 0,
      title: "Inpatient Services",
      description: "Enable virtual nursing, critical care, hospitalists and more with innovative solutions.",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/hospitals-health-systems/hhs_inpatient-services.jpg",
        alt: "Inpatient Services"
      },
    },
    {
      id: 1,
      title: "Emergency Services",
      description: "Facilitate collaboration quickly with virtual stroke, neonatology and behavioral health solutions.",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/hospitals-health-systems/hhs_emergency-services.jpg",
        alt: "Emergency Services"
      },
    },
    {
      id: 2,
      title: "Outpatient Services",
      description: "Keep care teams connected to patients throughout their care journey, wherever they are.",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/hospitals-health-systems/hhs_outpatient-services.jpg",
        alt: "Outpatient Services"
      },
    },
    {
      id: 3,
      title: "Devices",
      description: "Support point-of-care visits and clinical collaboration with connected devices.",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/hospitals-health-systems/hhs_devices.jpg",
        alt: "Devices"
      },
    }
  ]
}

export {
  metaData,
  pageData,
  heroData,
  iconData,
  teaserData,
  sliderData
}