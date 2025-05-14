import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getAccessToken } from './shared'

// const allowedOrigins = ['https://acme.com', 'https://my-app.org']

// const corsOptions = {
// 	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
// 	'Access-Control-Allow-Headers': 'Content-Type, Authorization',
// }

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname.indexOf('.') > -1) return
	// console.log('middleware')
	// console.log(request.url, request.nextUrl)
	// console.log(getAccessToken())

	// if (!request.nextUrl.pathname.startsWith('/publish')) {
	// 	return NextResponse.redirect(new URL('/publish', request.url))
	// }

	// const origin = request.headers.get('origin') ?? ''
	// const isAllowedOrigin = allowedOrigins.includes(origin)

	// // Handle preflighted requests
	// const isPreflight = request.method === 'OPTIONS'

	// if (isPreflight) {
	// 	const preflightHeaders = {
	// 		...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
	// 		...corsOptions,
	// 	}
	// 	return NextResponse.json({}, { headers: preflightHeaders })
	// }

	// // Handle simple requests
	// const response = NextResponse.next()

	// if (isAllowedOrigin) {
	// 	response.headers.set('Access-Control-Allow-Origin', origin)
	// }

	// Object.entries(corsOptions).forEach(([key, value]) => {
	// 	response.headers.set(key, value)
	// })

	// return response
}

export const config = {
	matcher: [
		'/notice/:path*',
		'/report/:path*',
		'/album/:path*',
		'/presence/:path*',
		'/dosage/:path*',
		'/return/:path*',
		'/schedule/:path*',
		'/meal/:path*',
		'/cloud/:path*',
		'/alert/:path*',
		'/institute/:path*',
		'/teacher/:path*',
		'/class/:path*',
		'/child/:path*',
		'/tag/:path*',
	],
}
