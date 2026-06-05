/** @type {import('next').NextConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://renovaiqapp.com';
const isProd = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';

const nextConfig = {
	env: {
		NEXT_PUBLIC_SITE_URL: siteUrl,
	},

	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{ key: 'X-Frame-Options', value: 'DENY' },
					{ key: 'X-Content-Type-Options', value: 'nosniff' },
					{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
					{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
					{ key: 'Permissions-Policy', value: 'geolocation=(), microphone=()' },
					{ key: 'X-Robots-Tag', value: isProd ? 'index, follow' : 'noindex, nofollow' },
				],
			},
		];
	},

	async redirects() {
		return [
			{
				source: '/:path*',
				has: [{ type: 'host', value: 'renovaiq-web.vercel.app' }],
				permanent: true,
				destination: `${siteUrl}/:path*`,
			},
			{
				source: '/:path*',
				has: [{ type: 'host', value: 'www.renovaiq-web.vercel.app' }],
				permanent: true,
				destination: `${siteUrl}/:path*`,
			},
		];
	},
};

export default nextConfig;
