const fs = require('fs');

const pages = [
  "",
  "/leistungen",
  "/uber-uns",
  "/kontakt"
];

const domain = "https://casinfinitygroup.nl";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${domain}${page}</loc>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);

console.log("Sitemap generado");
