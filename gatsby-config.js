require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `The Social Work`,
    description: `Una red social para el trabajo, nada que ver con las existentes`,
    author: `@Zet_MFA`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-env-variables",
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)],
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          modifyVars: {
            'layout-header-background': '#060712',
            //  'text-color': 'fade(@white, 85%)', 
            //  'heading-color': 'fade(@white, 85%)', 
            //   'layout-body-background':'#05060f',
            //  'component-background': '#0e101e',
            //  'table-bg': '#0e101e',
            // 'table-header-bg' : '#0e101e',
            // 'table-color': 'fade(@white, 75%)',
            //  'table-row-hover-bg': '#2d3748',
            //   'item-hover-bg': '#1b1d2a',
            //   'menu-dark-inline-submenu-bg': '#0e101e',            
            // 'input-bg': "#1b1d2a",
            // 'input-border-color': '#1b1d2a',
            'primary-color': '#176155',
            //'border-color-base' : '#0e101e',
            'link-color': '#176155',
            //  'menu-item-group-title-color': 'rgb(255,255,255,0.45)',
            // 'image-color': '#ff005d',
            'border-radius-base': '12px',
            // 'select-item-selected-bg': '#ff005d',
            // 'font-family': "Poppins, Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'"
          },
          javascriptEnabled: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};