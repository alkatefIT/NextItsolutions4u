const fs = require("fs");

const baseUrl = "https://next-itsolutions4u.vercel.app";
const lastModified = new Date().toISOString(); // Generate current timestamp

// List all static pages
const staticPages = [
  { path: "/", priority: "1.00" },
  { path: "/about", priority: "0.80" },
  { path: "/services", priority: "0.80" },
  { path: "/products", priority: "0.80" },
  { path: "/blogs", priority: "0.80" },
  { path: "/contact", priority: "0.80" },
  { path: "/services/it-service", priority: "0.80" },
  { path: "/services/it-service/cybersecurity", priority: "0.75" },
  { path: "/services/it-service/cloud-computing", priority: "0.75" },
  { path: "/services/it-service/network-infrastructure", priority: "0.75" },
  { path: "/services/it-service/software-development", priority: "0.75" },
  { path: "/services/it-service/data-management", priority: "0.75" },
  { path: "/services/it-service/business-intelligence", priority: "0.75" },
  { path: "/services/it-service/it-consulting", priority: "0.75" },
  { path: "/services/rental-service", priority: "0.80" },
  { path: "/services/digital-marketing", priority: "0.80" },
  { path: "/services/telecom-solutions", priority: "0.80" },
  { path: "/services/annual-maintenance-contract", priority: "0.80" },
  { path: "/services/network-solutions", priority: "0.80" },
  { path: "/services/website-development", priority: "0.80" },
  { path: "/services/app-development", priority: "0.80" },
  { path: "/services/branding", priority: "0.80" },

];

const urls = staticPages
  .map(
    ({ path, priority }) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastModified}</lastmod>
    <priority>${priority}</priority>
  </url>`
  )
  .join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!--  created with Custom Sitemap Generator  -->
  ${urls}
</urlset>`;

// Save the sitemap file in the public directory
fs.writeFileSync("public/sitemap.xml", xml);
console.log("✅ Sitemap generated successfully!");
