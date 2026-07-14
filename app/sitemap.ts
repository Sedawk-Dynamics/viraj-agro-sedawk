import type { MetadataRoute } from "next";

const BASE_URL = "https://www.virajagronaturals.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" },
    { path: "/products/moringa-powder", priority: 0.8, changeFrequency: "monthly" },
    { path: "/products/moringa-dried-leaves", priority: 0.8, changeFrequency: "monthly" },
    { path: "/products/moringa-tea-cut", priority: 0.8, changeFrequency: "monthly" },
    { path: "/products/moringa-capsule", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/process", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
