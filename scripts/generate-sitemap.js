const fs = require("fs");
const baseUrl = "https://next-itsolutions4u.vercel.app";

// List all your static pages
const staticPages = [
  "/",
  "/about",
  "/blogs",
  "/contact",
  "/products",
  "/services",
];

const urls = staticPages
  .map((page) => `<url><loc>${baseUrl}${page}</loc></url>`)
  .join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", xml);
console.log("✅ Sitemap generated successfully!");
