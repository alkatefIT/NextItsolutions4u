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
