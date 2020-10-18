const path = require(`path`)
 exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query Albums {
      allContentfulAlbum {
        edges {
          node {
            contentful_id
            title
            photos {
              file {
                url
              }
            }
          }
        }
      }
    }
    `);
    result.data.allContentfulAlbum.edges.forEach(({ node }) => {
      createPage({
        path: `/album/${node.contentful_id}`,
        component: path.resolve(`./src/templates/album.js`),
        context: {
          data: node,
        },
      });
    })
  }; 
  