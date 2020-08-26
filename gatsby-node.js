const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  // absolute path from hard drive, resolve will turn the relative path into absolute one for us
  const blogTemplate = path.resolve('./src/templates/blog.js')

  // 2. Get markdown data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // iterate over posts and run the createPage for each of them
  // 3. Create new pages
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      // context contains stuff we can pass down to the template
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
