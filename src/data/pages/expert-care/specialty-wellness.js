const metaData = {
  title: "Virtual Specialty & Wellness Care",
  description: "Teladoc Health specialty & wellness services provide you with high quality connected care for the whole you - by phone, video, or app."
}

const pageData = {
  propelId: "PL015966.A"
}

const heroData = {
  type: "block",
  title: "Boost your health with ease",
  subtitle: "Our specialty and wellness services provide you with high-quality connected care for the whole you — by phone, video or app.",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/expert-care/specialty-wellness/swc_hero.png",
    alt: ""
  },
  color: "darkPurple",
  showBottomWave: true,
  cta: [
    {
      type: "anchor",
      text: "Get started",
      action_type: "link",
      action_url: "https://member.teladoc.com/registrations/get_started",
      theme: "purple"
    }
  ],
  product: "specialty"
}

const headingData = {
  text: "### Some ways Teladoc Health can help"
}

const specialistData = {
  title: "Specialists & Expert Opinions",
  text: "- **Dermatology:** Upload photos to get a treatment plan for skin conditions like acne, eczema and more.\n- **Expert Medical Opinion:** Get an expert opinion on a diagnosis or treatment plan.\n- **Local in-person care:** Get help finding local medical providers to see in person.",
  text_position: "start",
  list_columns: 1,
  list_type: "check",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/expert-care/specialty-wellness/swc_specialist.png",
    alt: ""
  },
  cta: [
    {
      type: "anchor",
      text: "Register now",
      icon: "arrow forward",
      icon_position: "end",
      action_type: "link",
      action_url: "https://member.teladoc.com/registrations/get_started",
      theme: "purple"
    }
  ]
}

const wellnessData = {
  title: "Wellness care",
  text: "- **Nutrition:** Work with a dietitian to eat healthier or manage your weight.\n- **Tobacco Cessation:** Receive support from a health coach to help you quit, with a 24/7 helpline and prescriptions if necessary.\n- **Back and Joint Care:** Connect with a health coach and get a personalized program with exercise videos.\n- **Sexual Health:** Get a lab order for sexually transmitted diseases [STDs] without going to a doctor's office.",
  text_position: "end",
  list_columns: 1,
  list_type: "check",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/expert-care/specialty-wellness/swc_wellness.png",
    alt: ""
  },
  cta: [
    {
      type: "anchor",
      text: "Register now",
      icon: "arrow forward",
      icon_position: "end",
      action_type: "link",
      action_url: "https://member.teladoc.com/registrations/get_started",
      theme: "purple"
    }
  ]
}

const bannerData = {
  theme: "dark",
  title: "Find the care you need to get well. And live well.",
  subtitle: "Register today and download our mobile app.",
  text_align: "left",
  cta: [
    {
      type: "anchor",
      text: "Register now",
      action_type: "link",
      action_url: "https://member.teladoc.com/registrations/get_started",
      theme: "purple"
    },
    {
      type: "anchor",
      text: "Get the app",
      icon: "apps",
      icon_position: "end",
      action_type: "link",
      action_url: "/",
      theme: "white"
    }
  ],
  showBackgroundImage: false
}

const disclaimerData = {
  text: "Services vary depending on your health plan or employer. [Set up your account](https://member.teladoc.com/registrations/get_started) to view your services and pricing."
}

export { 
  metaData,
  pageData,
  heroData, 
  headingData,
  specialistData,
  wellnessData,
  bannerData,
  disclaimerData
}