'use client'

import { PrimaryLayout } from '@/widgets'

export default function PublishLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <PrimaryLayout>{children}</PrimaryLayout>
}
