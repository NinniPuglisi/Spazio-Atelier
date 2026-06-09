import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://studionp39.com",
      lastModified: new Date(),
    },
    {
      url: "https://studionp39.com/studio",
      lastModified: new Date(),
    },
    {
      url: "https://studionp39.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://studionp39.com/projects/villa-de",
      lastModified: new Date(),
    },
    {
      url: "https://studionp39.com/projects/max-boutique",
      lastModified: new Date(),
    },
    {
      url: "https://studionp39.com/projects/piccolo-ufficio-alb",
      lastModified: new Date(),
    },
    {
      url: "https://studionp39.com/contact",
      lastModified: new Date(),
    },
  ];
}