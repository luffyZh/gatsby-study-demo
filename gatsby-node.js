/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  /* 创建一个简单的静态页面 */
  const staticTemplate = path.resolve(`src/templates/static.js`)
  createPage({
    // Path for this page — required
    path: `node-static`,
    component: staticTemplate,
    context: {
      title: '我是静态页面',
      content: '静态页内容'
    },
  });
  /* 创建一个复杂的动态页面 */
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id,
            html
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `posts/${edge.node.id}`,
        component: blogPostTemplate,
        context: {
          html: edge.node.html
        },
      })
    })
  });
};