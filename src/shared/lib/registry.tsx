'use client'

import { Global } from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect, useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import GlobalStyles from './global.style'

// NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner })

// Router.onRouteChangeStart = () => {
// 	// console.log('onRouteChangeStart triggered');
// 	NProgress.start()
// }

// Router.onRouteChangeComplete = () => {
// 	// console.log('onRouteChangeComplete triggered');
// 	NProgress.done()
// }

// Router.onRouteChangeError = () => {
// 	// console.log('onRouteChangeError triggered');
// 	NProgress.done()
// }

export default function StyledComponentsRegistry({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [styledComponentsStyleSheet, setStyledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement()
		styledComponentsStyleSheet.instance.clearTag()
		return <>{styles}</>
	})

	// useEffect(() => {
	// 	const start = () => {
	// 		NProgress.start()
	// 	}
	// 	const end = () => {
	// 		NProgress.done()
	// 	}

	// 	Router.events.on('routeChangeStart', start)
	// 	Router.events.on('routeChangeComplete', end)
	// 	Router.events.on('routeChangeError', end)

	// 	return () => {
	// 		Router.events.off('routeChangeStart', start)
	// 		Router.events.off('routeChangeComplete', end)
	// 		Router.events.off('routeChangeError', end)
	// 	}
	// }, [])

	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			<Global styles={GlobalStyles} />
			{children}
		</StyleSheetManager>
	)
}
