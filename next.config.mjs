/** @type {import('next').NextConfig} */
import {
	createVanillaExtractPlugin
} from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const nextConfig = {
	async rewrites() {
		return [{
			source: `/api/:path*`,
			destination: `${SERVER_URI}/api/:path*`,
		}, {
			source: `/uri/:path*`,
			destination: `${SERVER_URI}/:path*`,
		}]
	},
	experimental: {
		taint: true,
		scrollRestoration: true,
		forceSwcTransforms: true,
	},
	reactStrictMode: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	pageExtensions: ['tsx', 'ts', 'js', 'cjs'],
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	// images: {
	// 	remotePatterns: [{
	// 		protocol: 'https',
	// 		hostname: 'images.unsplash.com',
	// 		port: '',
	// 		pathname: '/**',
	// 	}],
	// },
}

export default withVanillaExtract(nextConfig)
