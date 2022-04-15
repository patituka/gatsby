module.exports = {
  siteMetadata: {
    title: `site perso gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-theme-ui`, 
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-mdx",
    
    //to recognize files which are Markdown
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-unsplash`,
      options: {
        appId: `12345678`,
        collections: [
          `098765`
        ],
        perPage: `100`
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Plus Jakarta Sans`,
          `Rubik`,
          `source sans pro\:400,700`
        ],
        display: 'swap'
      }
    }
  ]
};