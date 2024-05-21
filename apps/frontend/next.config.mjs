/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/projects/request",
				destination: "/projects",
				permanent: true,
			},
		];
	},
	reactStrictMode: true,
};

export default nextConfig;
