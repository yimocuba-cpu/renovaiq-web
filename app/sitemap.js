export default function sitemap() {
  const baseUrl = "https://renovaiq-web.vercel.app";
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/calculadora`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}