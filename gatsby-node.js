require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const fetch = require('node-fetch');
const slugify = require('@sindresorhus/slugify');
const { createApi } = require('unsplash-js');

const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_API_KEY,
    fetch: fetch
});

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
    const data = await unsplash.collections.getPhotos({ collectionId: '4399851' });

    data.response.results
        .forEach((item) => {
            const { id, blur_hash } = item;
            createNode({
                ...item,
                id: id,
                slug: `/${slugify(blur_hash)}`,
                internal: {
                    type: 'unsplash',
                    contentDigest: createContentDigest(item)
                }
            });
        });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode })
  
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise(resolve => {
        graphql(`
      {
         allMarkdownRemark {
            edges {
               node {
                  fields {
                     slug
                  }
               }
            }
         }
      }`
        ).then(result => {
            console.log(result);
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/templates/post.js'),
                    context: {
                        slug: node.fields.slug,
                        imgPath: path.resolve(`./src/images/${node.fields.slug}`)
                    },
                })
            })
            resolve()
        })
    })
}