const metaData = {
  title: "Teladoc Health | Leadership",
  description: "A mission-driven organization, Teladoc Health, Inc. is successfully transforming how people access and experience healthcare, with a focus on high quality, lower costs, and improved outcomes around the world."
}

const heroData = {
  title: "Our leadership",
  text: "Our global team brings together visionaries in healthcare, technology, data science, clinical expertise, consumer behavior and more to transform the healthcare experience.",
  text_position: "start",
  text_align: "left",
  person_name: "Jason Gorevic",
  person_role: "CEO, Teladoc Health",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/organizations/whole-person-care/wpc_leadership.png",
    alt: ""
  },
  image_position: "absolute",
}

const gridData = {
  title: " Our Executive Team",
  items: [
    {
      id: 1,
      name: "Kelly Bliss",
      role: "President, U.S. Group Health",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/kelly-bliss.png", 
        alt: "Kelly Bliss"
      },
      destination: "/about/leadership/kelly-bliss"
    },
    {
      id: 2,
      name: "Arnnon Geshuri",
      role: "Chief People Officer",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/arnnon-geshuri.png", 
        alt: "Arnnon Geshuri"
      },
      destination: "/about/leadership/arnnon-geshuri"
    },
    {
      id: 3,
      name: "Claus Jensen, PhD",
      role: "Chief Innovation Officer",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/claus-jensen.png", 
        alt: "Claus Jensen, PhD"
      },
      destination: "/about/leadership/claus-jensen"
    },
    {
      id: 4,
      name: "Laizer Kornwasser",
      role: "President, Enterprise Growth and Global Markets",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/laizer-kornwasser.png", 
        alt: "Laizer Kornwasser"
      },
      destination: "/about/leadership/laizer-kornwasser"
    },
    {
      id: 13,
      name: "Stephany Verstraete",
      role: "Chief Marketing & Engagement Officer",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/stephany-verstraete.png", 
        alt: "Stephany Verstraete"
      },
      destination: "/about/leadership/stephany-verstraete"
    },
    {
      id: 0,
      name: "Jason Gorevic",
      role: "Chief Executive Officer",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/jason-gorevic.png", 
        alt: "Jason Gorevic"
      },
      destination: "/about/leadership/jason-gorevic"
    },
    {
      id: 5,
      name: "Alon Matas",
      role: "President, BetterHelp",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/alon-matas.png", 
        alt: "Alon Matas"
      },
      destination: "/about/leadership/alon-matas"
    },
    {
      id: 7,
      name: "Carlos Nueno",
      role: "President, International",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/carlos-nueno.png", 
        alt: "Carlos Nueno"
      },
      destination: "/about/leadership/carlos-nueno"
    },
    {
      id: 8,
      name: "Andy Puterbaugh",
      role: "President, Hospital and Health Systems",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/andy-puterbaugh.png", 
        alt: "Carlos Nueno"
      },
      destination: "/about/leadership/andy-puterbaugh"
    },
    {
      id: 9,
      name: "Vidya Raman-Tangella",
      role: "Chief Medical Officer",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/vidya-raman-tangella.png", 
        alt: "Vidya Raman-Tangella"
      },
      destination: "/about/leadership/vidya-raman-tangella"
    },
    {
      id: 14,
      name: "Mike Waters",
      role: "Chief Operating Officer",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/mike-waters.png", 
        alt: "Mike Waters"
      },
      destination: "/about/leadership/mike-waters"
    },
    {
      id: 10,
      name: "Dan Trencher",
      role: "Senior Vice President, Corporate Strategy",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/dan-trencher.png", 
        alt: "Dan Trencher"
      },
      destination: "/about/leadership/dan-trencher"
    },
    {
      id: 11,
      name: "Andrew Turitz",
      role: "Senior Vice President of Corporate Development",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/andrew-turitz.png", 
        alt: "Andrew Turitz"
      },
      destination: "/about/leadership/andrew-turitz"
    },
    {
      id: 12,
      name: "Adam Vandervoort",
      role: "Chief Legal Officer",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/adam-vandervoort.png", 
        alt: "Adam Vandervoort"
      },
      destination: "/about/leadership/adam-vandervoort"
    },
    {
      id: 6,
      name: "Mala Murthy",
      role: "Chief Financial Officer",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/leadership/mala-murthy.png", 
        alt: "Mala Murthy"
      },
      destination: "/about/leadership/mala-murthy"
    }
  ]
}

const bannerData = {
  theme: "dark",
  title: "Want to learn more about our leadership?",
  text_align: "center",
  orientation: "column",
  cta: [
    {
      type: "anchor",
      text: "Meet the board of directors",
      action_type: "link",
      action_url: "/",
      theme: "white"
    }
  ],
}

export {
  metaData,
  heroData,
  gridData,
  bannerData
}