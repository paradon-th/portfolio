import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://portfolio.paradon.work/sitemap.xml",
    host: "https://portfolio.paradon.work",
  };
}
