import { useEffect, useState } from 'react'

const TOAST_REMOVE_DELAY: number = 3000

let toasts: any = []
let count: number = 0

const genId = () => {
	count = (count + 1) % Number.MAX_SAFE_INTEGER
	return count.toString()
}

const timeouts = new Map()
const listeners: any = []

const toast = (message: string) => {
	const id = genId()

	listeners.forEach((listener: any) => {
		if (!toasts.find((toast: any) => toast.id === id)) {
			toasts = [...toasts, { id, message, show: true }]
		}
		listener(toasts)

		const timeout = setTimeout(() => {
			toasts = toasts.map((toast: any) => {
				return toast.id === id ? { ...toast, show: false } : toast
			})
			listener(toasts)

			const maxTimeoutId = !!timeouts.size && ([...(timeouts.entries() as any)] as any)?.reduce((a: any, b: any) => (b[1] > a[1] ? b : a))[0]

			if (maxTimeoutId === id) {
				toasts = []
				timeouts.clear()
			}
		}, TOAST_REMOVE_DELAY)

		timeouts.set(id, timeout)
	})
}

export const useToast = () => {
	const [state, setState] = useState(toasts)

	useEffect(() => {
		listeners.push(setState)

		return () => {
			const index = listeners.indexOf(setState)
			if (index > -1) {
				listeners.splice(index, 1)
			}
		}
	}, [])

	return {
		toast,
		toasts: state,
	}
}
