const metaData = {
  title: "Virtual Care for Children & Parents",
  description: "Teladoc Health provides connected care for children. Whether your child's caught a bug or a case of the moody blues, our pediatric team is available 24/7."
}

const pageData = {
  disclaimer: "*Adolescent Mental Health is available for eligible dependents ages 13-17.",
  propelId: "PL015960.A"
}

const heroData = {
  title: "Your child is unique. Their healthcare should be too.",
  subtitle: "Whether your child's caught a bug or a case of the moody blues, our pediatric team is available 24/7 to help give your kids the care they need, when they need it. Best of all, you'll receive top-quality care from the comfort of your home.",
  text_position: "start",
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/for-individuals/children/children_hero.png",
    alt: ""
  },
  color: "grey",
  cta: [
    {
      type: "anchor",
      text: "Register now",
      action_type: "link",
      action_url: "https://member.teladoc.com/registrations/get_started",
      theme: "purple"
    }
  ]
}

const textData = {
  text: "## Better health starts here",
  text_alignment: "center"
}

const carouselData = {
  caption: `Good news! You may be covered for these services. [Set up your account](https://member.teladoc.com/registrations/get_started) to see.`,
  items: [
    {
      id: 0,
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/for-individuals/phone-screens/primary-care-screen.png",
        alt: ""
      },
      title: "General Medical (24/7 Care)",
      description: "Stomachaches, fevers, rashes and more. Turn to us to get the care your child needs, whether it's during the middle of the day or the middle of the night.",
      accent: "darkPurple",
      popup_image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/for-individuals/phone-screens/p360_popup.png",
      cta: [
        {
          type: "anchor",
          text: "Find my doctor",
          action_type: "link",
          action_url: "https://member.teladoc.com/registrations/get_started",
          theme: "purple"
        }
      ]
    },
    {
      id: 1,
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/for-individuals/phone-screens/mental-health-screen.png",
        alt: ""
      },
      title: "Mental Health",
      description: "Help your teen cope with academic stress, peer pressure, self-esteem challenges and more.*",
      accent: "green",
      popup_image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/for-individuals/phone-screens/mh_popup.png",
      cta: [
        {
          type: "anchor",
          text: "Find a therapist",
          action_type: "link",
          action_url: "https://member.teladoc.com/registrations/get_started",
          theme: "purple"
        }
      ]
    },
    {
      id: 2,
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/for-individuals/phone-screens/condition-mgmt-screen.png",
        alt: ""
      },
      title: "Nutrition",
      description: "Get help with picky eaters and build healthy habits from an early age for a healthier and happier life.",
      accent: "blue",
      popup_image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/for-individuals/phone-screens/ccm_popup.png",
      cta: [
        {
          type: "anchor",
          text: "Register now",
          action_type: "link",
          action_url: "https://member.teladoc.com/registrations/get_started",
          theme: "purple"
        }
      ]
    }
  ]
}

const tileData = {
  title: "Peace of mind with a partner by your side",
  subtitle: "With Teladoc Health, you get more than a doctor — you and your family have access to a broad team of experienced pediatricians and care providers who are dedicated to helping your child live their healthiest life.",
  items: [
    {
      id: 0,
      title: "We talk the talk",
      description: "When it comes to kid talk (and parent talk), you'll find that our team of pediatricians is just as skilled at communicating as they are at helping your child feel better.",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/for-individuals/children/children_tile1.jpg",
        alt: ""
      }
    },
    {
      id: 1,
      title: "Care within reach",
      description: "You can rest easy knowing your child's health is covered. Our affordable services are covered by many health insurance plans.",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/for-individuals/children/children_tile2.jpg",
        alt: ""
      }
    },
    {
      id: 2,
      title: "Here when you need us",
      description: "If your child isn't feeling well, you don't want to wait. With Teladoc Health, getting quality pediatric care is really just a phone or video call away.",
      image: {
        url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/for-individuals/children/children_tile3.jpg",
        alt: ""
      }
    },
  ],
  cta: [
    {
      type: "anchor",
      text: "Get started",
      action_type: "link",
      action_url: "https://member.teladoc.com/registrations/get_started",
      theme: "purple"
    },
  ]
}

const testimonialData = {
  quote: "My son had an ear infection. I thought about calling our pediatrician, but I knew that it was going to be days before I could speak with someone. Literally within an hour, we got a [Teladoc Health] visit. It was a seamless experience.",
  person: {
    name: "Heather T.",
  },
  image: {
    url: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/pages/for-individuals/children/children_testimonial.jpg",
    alt: ""
  },
  disclaimer: "The testimonials, opinions and statements reflect one member's personal experience with Teladoc Health. Results and experiences may vary from person to person and will be unique to each member. The testimonials are voluntarily provided and are not paid. The individual in the photo is not the member who provided this testimonial."
}

const bannerData = {
  theme: "dark",
  title: "Start your journey to better health",
  subtitle: `Register now and download the mobile app so that quality care is just a tap away.`,
  icon: "tdh heart white",
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
      text: "Download the app",
      icon: "apps",
      icon_position: "end",
      action_type: "link",
      action_url: "https://go.onelink.me/agxg/589cdff7",
      theme: "white"
    },
  ]
}

export { 
  metaData,
  pageData,
  heroData,
  textData,
  carouselData,
  tileData,
  testimonialData,
  bannerData
}