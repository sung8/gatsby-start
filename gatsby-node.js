// gatsby node config file
/*
  - allows tap in to the node APIs that gatsby expoeses
  - will use this config for slugs and generating 
*/
const path = require('path')
// our function runs when a new node is created
// const { createNode, createNodeField } = actions
module.exports.onCreateNode = ({ node, actions }) => {
  // ⭐
  const { createNodeField } = actions

  // this if statement filters to only log our blog post data
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    // what we care when we log is "internal"
    //console.log(JSON.stringify(node, undefined, 4))
    // we will tap into "fileAbsolutePath" on the output
    // E:/gatsbyjs-tutorial/my-project/gatsby-start/src/posts/gatsby.md
    /* node.js documentation
      path.basename(path[, ext]) method (see ⭐)
        - reduces file path to just the file name and extension
        - we can also just get the file name
    */
    // @@@ makes it more visible in the console
    // outputs 'react' and 'gatsby' which is what we want
    //console.log('@@@@@@@@@@@@@@', slug)

    /* call createNodeField to actually add the new field onto the node
      - call an object w/ 
        - 1. node that we're trying to create the node field on, 
        - 2. set the name for our new field, 
        - 3. the value for the new field
     */
    // goal 1 finished
    createNodeField({
      // this is shorthand for 'node = node'
      node,
      name: 'slug',
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  // absolute path from hard drive, resolve will turn the relative path into absolute one for us
  const blogTemplate = path.resolve('./src/templates/blog.js')

  // 2. Get markdown data
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // iterate over posts and run the createPage for each of them
  // 3. Create new pages
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      // context contains stuff we can pass down to the template
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
