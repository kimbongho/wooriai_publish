'use client'

import { PrimaryLayout } from '@/widgets'

export default function NotPublishLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <PrimaryLayout>{children}</PrimaryLayout>
}
