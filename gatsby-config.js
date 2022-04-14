module.exports = {
  siteMetadata: {
    title: `site perso gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-theme-ui`, 
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
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
  ]
};