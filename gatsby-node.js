const bioData = require("./src/data/pages/about/bios");
const path = require(`path`);

exports.createPages = async (gatsbyUtils) => {
  const { actions, graphql, reporter } = gatsbyUtils;
  const { createPage, createRedirect } = actions;

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  /*
  const result = await graphql(`
    query GetPage {
      allStrapiPage {
        nodes {
          id
          title
          slug
        }
      }
    }
  `)

  if(result.errors){
    reporter.panicOnBuild(`Error while running GraphQL query`, result.error)
    return
  }

  const pageTemplate = path.resolve('./src/components/templates/TestTemplate/index.js');

  result.data.allStrapiPage.nodes.forEach((node) => {

    createPage({
      path: node.slug,
      component: pageTemplate,
      context: {
        id: node.id
      }
    })

    reporter.info(
      `Created page for slug ${node.slug}`
    )
  })*/

  //Create Bio Pages
  const bioTemplate = path.resolve('./src/components/templates/BioTemplate/index.js');

  bioData.forEach((page) => {

    createPage({
      path: `/about/leadership/${page.slug}`,
      component: bioTemplate,
      context: {
        id: page.id,
        name: page.name,
        role: page.role,
        linkedIn: page.linkedIn,
        image: page.image,
        bio: page.bio
      }
    })

    reporter.info(
      `Created page for slug ${page.slug}`
    )
  })
}