import { MetadataRoute } from "next";
import { servicesData, projectsData, blogPostsData, careersData } from "@/data/data";

const SITE_URL = "https://xpernex.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static Routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/blog",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies"
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  // Dynamic Service Routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  // Dynamic Portfolio Routes
  const projectRoutes = projectsData.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  // Dynamic Blog Routes
  const blogRoutes = blogPostsData.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  // Dynamic Careers Routes
  const jobRoutes = careersData.map((job) => ({
    url: `${SITE_URL}/careers/${job.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...blogRoutes,
    ...jobRoutes
  ];
}
