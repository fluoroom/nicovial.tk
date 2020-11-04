const path = require(`path`)
function linkify(string){
  return string.toLowerCase().replace(/["'()]/g,"").replace(/\s/g, '-');
}
 exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query Albums {
      allContentfulAlbum {
        edges {
          node {
            contentful_id
            title
            childContentfulAlbumTextRichTextNode {
              childContentfulRichText {
                html
              }
            }
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
        path: `/album/${linkify(node.title)}`,
        component: path.resolve(`./src/templates/album.js`),
        context: {
          data: node,
        },
      });
    })
  }; 
  