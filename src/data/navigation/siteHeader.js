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
        name: "Hospitals & Health Systems",
        items: [
          {
            id: "2-0-0",
            destination: "/organizations/hospitals-health-systems",
            text: "Overview"
          },
          {
            id: "2-1-0",
            destination: "/organizations/hospitals-health-systems/virtual-care-platform",
            text: "Virtual care platform"
          },
          /*{
            id: "2-2-0",
            destination: "/",
            text: "Solutions"
          },
          {
            id: "2-3-0",
            destination: "/",
            text: "Devices"
          },
          {
            id: "2-4-0",
            destination: "/",
            text: "Resources"
          }*/
        ]
      },
      {
        id: "section-2",
        name: "Health Plans",
        items: [
          {
            id: "2-0-1",
            destination: "/organizations/health-plans",
            text: "Overview"
          },
          {
            id: "2-1-1",
            destination: "/organizations/health-plans/whole-person-experience",
            text: "Whole-person experience"
          },
          /*{
            id: "2-1-1",
            destination: "/",
            text: "Mental Health"
          },
          {
            id: "2-2-1",
            destination: "/",
            text: "Primary Care"
          },
          {
            id: "2-3-1",
            destination: "/",
            text: "Condition Management"
          },
          {
            id: "2-4-1",
            destination: "/",
            text: "Resources"
          }*/
        ]
      },
      {
        id: "section-3",
        name: "Employers",
        items: [
          {
            id: "2-0-2",
            destination: "/organizations/employers",
            text: "Overview"
          },
          {
            id: "2-1-2",
            destination: "/organizations/employers/whole-person-experience",
            text: "Whole-person experience"
          },
          /*{
            id: "2-1-2",
            destination: "/",
            text: "Mental Health"
          },
          {
            id: "2-2-2",
            destination: "/",
            text: "Primary Care"
          },
          {
            id: "2-3-2",
            destination: "/",
            text: "Condition Management"
          },
          {
            id: "2-4-2",
            destination: "/",
            text: "Resources"
          }*/
        ]
      }
    ]
  }
];

export { menuItems } ;