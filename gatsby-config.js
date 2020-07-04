require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Matthew Volk`,
    // Default title of the page
    siteTitleAlt: `Context over Content - A Blog by Matthew Volk`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Context over Content - A Blog by Matthew Volk`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://volk-gatsby.netlify.app/`,
    // Used for SEO
    siteDescription: `The personal blog of Matthew Volk — an Austin, Texas based project manager and independent software developer.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@mattjvolk`,
    // Links displayed in the header on the right side
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/matthewvolk`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/mjvolk`,
          },
        ],
        // Navigation links
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        formatString: "MM.DD.YYYY",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Context over Content - A blog by Matthew Volk`,
        short_name: `A blog by Matthew Volk`,
        description: `A personal blog for personal and professional insight in the world of software products.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
