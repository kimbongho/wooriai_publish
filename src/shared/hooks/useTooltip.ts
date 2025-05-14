'use client'

import { useEffect, useRef } from 'react'

const useTooltip = () => {
	const tooltip = useRef<HTMLDivElement>(null)
	let thumb: any = null

	useEffect(() => {
		document.body.addEventListener('click', handleBodyClick)
		return () => {
			document.body.removeEventListener('click', handleBodyClick)
		}
	}, [])

	const handleBodyClick = (e: any) => {
		if ((tooltip.current && tooltip.current.contains(e.target)) || (thumb && thumb.contains(e.target))) {
			return
		}
		if (tooltip.current) {
			tooltip.current.setAttribute('class', 'tooltip')
		}
	}

	const openTooltip = (e: any, idx: any) => {
		setTimeout(() => {
			thumb = e.target
			let cls = `tooltip` + idx
			if (tooltip.current) {
				tooltip.current.setAttribute('class', 'tooltip')
				tooltip.current.classList.add('on')
				tooltip.current.classList.add(cls)
			}
		}, 100)
	}

	return { tooltip, openTooltip }
}

export default useTooltip
