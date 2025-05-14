import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Popper } from 'react-popper'

function isInDOMSubtree(element: any, subtreeRoot: any) {
	return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element))
}

const _ = forwardRef(({ target, children, toggle, initOpen, ...props }: any, ref: any) => {
	const [isVisible, setIsVisible] = useState(initOpen || false)
	const [targetElementIsVisible, setTargetElementIsVisible] = useState(false)

	const toggleVisibility = () => setIsVisible((prevVisibility: boolean) => !prevVisibility)

	const elRef: any = useRef(null)
	const popperRef: any = useRef(null)

	useImperativeHandle(ref, () => ({
		setIsVisible,
	}))

	useEffect(() => {
		elRef.current = document.getElementById(target)

		// HOVER
		if (toggle === 'hover') {
			elRef.current.addEventListener('mouseenter', toggleVisibility)
			elRef.current.addEventListener('mouseleave', toggleVisibility)
			return () => {
				elRef.current.removeEventListener('mouseenter', toggleVisibility)
				elRef.current.removeEventListener('mouseleave', toggleVisibility)
			}
		}

		// CLICK
		if (toggle === 'click') {
			elRef.current.addEventListener('click', toggleVisibility)
			return () => elRef.current.removeEventListener('click', toggleVisibility)
		}
	}, [target])

	useEffect(() => {
		const legacyClick = (e: any) => {
			if (e.target === elRef.current) {
				return toggleVisibility()
			}
			if (isVisible && !isInDOMSubtree(e.target, popperRef.current)) {
				setIsVisible(false)
			}
		}
		// LEGACY
		if (toggle === 'legacy') {
			document.addEventListener('click', legacyClick)
			return () => {
				document.removeEventListener('click', legacyClick)
			}
		}
	}, [target, isVisible])

	useEffect(() => {
		if (elRef.current !== null && !targetElementIsVisible) {
			setTargetElementIsVisible(true)
		}
	}, [elRef.current])

	return createPortal(
		targetElementIsVisible && isVisible ? (
			<Popper innerRef={popper => (popperRef.current = popper)} referenceElement={elRef.current} {...props}>
				{({ ref, style, placement, arrowProps }) => {
					return (
						<div className='popover' ref={ref} style={style} data-placement={placement}>
							{children}
							<div ref={arrowProps.ref} style={arrowProps.style} />
						</div>
					)
				}}
			</Popper>
		) : null,
		document.body
	)
})

export default _
