/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://next-itsolutions4u.vercel.app/", // Replace with your actual domain
    generateRobotsTxt: true, // Generates robots.txt
    exclude: ["/admin", "/dashboard"], // Exclude pages if needed
    changefreq: "daily",
    priority: 0.8,
  };
  