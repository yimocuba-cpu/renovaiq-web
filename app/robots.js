export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://renovaiqapp.com";
  const isProd = process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";

  // In non-production environments, disallow all crawling to avoid indexing staging copies
  if (!isProd) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: "/api",
      },
      {
        userAgent: "*",
        disallow: "/_next",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}