export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://renovaiqapp.com";
  const nowIso = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: nowIso,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/calculadora`,
      lastModified: nowIso,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: nowIso,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/bathroom-remodel-cost-usa`,
      lastModified: nowIso,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}