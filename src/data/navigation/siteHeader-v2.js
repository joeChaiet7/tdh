const menuItems = [
  {
    id: 0,
    category: "individuals",
    text: "For Individuals",
    type: "dropdown",
    indicatorColor: "#331f65",
    cta: {
      title: "Is there a health issue or concern we can help you with right now?",
      primaryLink: {
        destination: "https://member.teladoc.com/registrations/get_started",
        text: "Talk to a doctor"
      }
    },
    sections: [
      {
        id: "section-1",
        name: "Explore",
        items: [
          {
            id: "0-1",
            destination: "/expert-care/primary-care",
            text: "Primary Care",
            image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/nav/phone-primary.png"
          },
          {
            id: "0-2",
            destination: "/expert-care/mental-health",
            text: "Mental Health",
            image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/nav/phone-mental.png"
          },
          {
            id: "0-3",
            destination: "/expert-care/condition-management",
            text: "Condition Management",
            image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/nav/phone-chronic.png"
          },
          {
            id: "0-4",
            destination: "/expert-care/specialty-wellness",
            text: "Specialty & Wellness Care",
            image: "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/nav/phone-wellness.png"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    category: "organizations",
    text: "For Organizations",
    type: "dropdown",
    indicatorColor: "#39bee8",
    cta:{
      title: "Our unique approach to whole-person healthcare is worth seeing and believing.",
      primaryLink: {
        destination: "/organizations/whole-person-care",
        text: "Learn about our approach"
      },
      /*secondaryLink: {
        destination: "/",
        text: "Visit Resource Center",
        icon: <IoNewspaperOutline />
      }*/
    },
    sections: [
      {
        id: "section-1",
        name: "Explore",
        items: [
          {
            id: "2-0-0",
            destination: "/organizations/whole-person-care",
            text: "Whole-Person Care"
          },
          {
            id: "2-1-0",
            destination: "/organizations/employers",
            text: "Employers"
          },
          {
            id: "2-2-0",
            destination: "/organizations/health-plans",
            text: "Health Plans"
          },
          {
            id: "2-3-0",
            destination: "/organizations/hospitals-health-systems",
            text: "Hospitals & Health Systems"
          }
        ]
      },
    ]
  }
];

export { menuItems } ;