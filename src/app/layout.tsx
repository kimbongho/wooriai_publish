'use client'

import { StyledComponentsRegistry } from '@/shared'
import React, { useEffect, useState } from 'react'
const HydrationZustand = ({ children }: any) => {
	const [isHydrated, setIsHydrated] = useState(false)

	useEffect(() => {
		setIsHydrated(true)
	}, [])

	return <>{isHydrated ? <div>{children}</div> : null}</>
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ko'>
			<head>
				{/* ICON */}
				<link rel='icon' type='image/x-icon' sizes='180x180' href='/favicon/favicon.ico' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
				<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
				<link rel='icon' sizes='192x192' href='/favicon/android-chrome-192x192.png' />
				<link rel='icon' sizes='512x512' href='/favicon/android-chrome-512x512.png' />
				<link rel='manifest' href='/manifest.json' />

				{/* SETTING */}
				<meta charSet='utf-8' />
				<meta name='theme-color' content='#000000' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover' />
				<meta name='format-detection' content='telephone=no' />

				{/* SEO */}
				<title>우리아이AI</title>
				<meta name='description' content='Woori-ai Description' />
				<meta name='keywords' content='woori, ai' />
				<meta name='author' content='Semyeong Soft.' />
			</head>

			<body>
				<HydrationZustand>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</HydrationZustand>
			</body>
		</html>
	)
}
