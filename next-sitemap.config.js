/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://next-itsolutions4u.vercel.app/", // Replace with your actual domain
    generateRobotsTxt: true, // Generates robots.txt
    sitemapSize: 5000,
    exclude: ["/admin", "/dashboard"], // Exclude pages if needed
    changefreq: "daily",
    priority: 0.8,
    generateIndexSitemap: false, // 🚀 Disables index sitemap, merges into one file

  };
  

