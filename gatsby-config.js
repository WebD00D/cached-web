
let contentfulConfig = {
  spaceId: "r3moe64j590r",
  accessToken: "000da8f0d2d76ed9432d04154da29d7d90170141dc2c6abc8ee7bbfc37887b25"
}

module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
