const footerMenuItems = [
  {
    id: 0,
    name: "Expert Care",
    destination: "/",
    items: [
      {
        id: 0,
        destination: "/expert-care/primary-care",
        text: "Primary Care"
      },
      {
        id: 1,
        destination: "/expert-care/mental-health",
        text: "Mental Health"
      },
      {
        id: 2,
        destination: "/expert-care/condition-management",
        text: "Condition Management"
      },
      {
        id: 3,
        destination: "/",
        text: "Specialty & Wellness"
      },
      {
        id: 4,
        destination: "/",
        text: "Urgent Care"
      },
    ]
  },
  {
    id: 1,
    name: "For Individuals",
    destination: "/",
    items: [
      {
        id: 0,
        destination: "/",
        text: "For Adults"
      },
      {
        id: 1,
        destination: "/",
        text: "For Children"
      },
      {
        id: 2,
        destination: "/",
        text: "For Seniors"
      }
    ]
  },
  {
    id: 2,
    name: "For Organizations",
    destination: "/",
    items: [
      {
        id: 0,
        destination: "/",
        text: "Whole-Person Care"
      },
      {
        id: 1,
        destination: "/organizations/hospitals-health-systems",
        text: "Hospitals & Health Systems"
      },
      {
        id: 2,
        destination: "/organizations/health-plans",
        text: "Health Plans"
      },
      {
        id: 3,
        destination: "/organizations/employers",
        text: "Employers"
      },
      {
        id: 4,
        destination: "/",
        text: "Resource Center"
      }
    ]
  },
  {
    id: 3,
    name: "About Us",
    destination: "/",
    items: [
      {
        id: 0,
        destination: "/",
        text: "Leadership"
      },
      {
        id: 1,
        destination: "/",
        text: "Health Equity"
      },
      {
        id: 2,
        destination: "/",
        text: "CSR"
      },
      {
        id: 3,
        destination: "/",
        text: "Community Guidelines"
      }
    ]
  },
  {
    id: 4,
    name: "Company",
    destination: "/",
    items: [
      {
        id: 0,
        destination: "/",
        text: "Careers"
      },
      {
        id: 1,
        destination: "/",
        text: "Events"
      },
      {
        id: 2,
        destination: "/",
        text: "Newsroom"
      },
      {
        id: 3,
        destination: "/",
        text: "Investors"
      }
    ]
  },
  {
    id: 5,
    name: "Resources",
    destination: "/",
    items: [
      {
        id: 0,
        destination: "/",
        text: "Contact Us"
      },
      {
        id: 1,
        destination: "/",
        text: "Blog"
      },
      {
        id: 2,
        destination: "/",
        text: "FAQs"
      },
      {
        id: 3,
        destination: "/",
        text: "Press Kits"
      }
    ]
  }
];


export const socialLinks = [
  {
    id: 0,
    label: "LinkedIn",
    icon: "brand linkedIn",
    destination: "/"
  },
  {
    id: 1,
    label: "Facebook",
    icon: "brand facebook",
    destination: "/"
  },
  {
    id: 2,
    label: "Twitter",
    icon: "brand twitter",
    destination: "/"
  },
  {
    id: 3,
    label: "Instagram",
    icon: "brand instagram",
    destination: "/"
  },
  {
    id: 4,
    label: "Youtube",
    icon: "brand youtube",
    destination: "/"
  }
]

export const legalLinks = [
  {
    id: 0,
    label: "Privacy Policy",
    type: "link",
    destination: "/legal/privacy-policy"
  },
  {
    id: 1,
    label: "Legal Disclaimer",
    type: "link",
    destination: "/legal/legal-disclaimer"
  },
  {
    id: 2,
    label: "NonD&A",
    type: "link",
    destination: "/legal/notice-of-non-discrimination"
  },
  {
    id: 3,
    label: "Ethics Hotline",
    type: "link",
    destination: "https://secure.ethicspoint.com/domain/media/en/gui/55037/index.html"
  },
  {
    id: 4,
    label: "Accessibility Statement",
    type: "link",
    destination: "/legal/accessibility-statement"
  },
]

export default footerMenuItems;