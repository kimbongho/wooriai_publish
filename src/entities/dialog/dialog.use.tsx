import { useEffect, useState } from 'react'

let dialogs: any = []
let count: number = 0

const genId = () => {
	count = (count + 1) % Number.MAX_SAFE_INTEGER
	return count.toString()
}

const listeners: any = []

const dialog = (message: any, confirm: any, cancle?: any) => {
	const id = genId()

	listeners.forEach((listener: any) => {
		if (!dialogs.find((dialog: any) => dialog.id === id)) {
			dialogs = [...dialogs, { id, message, show: true, confirm, cancle }]
		}
		listener(dialogs)
	})
}

const close = (id: any) => {
	let index
	listeners.forEach((listener: any) => {
		dialogs = dialogs.map((dialog: any) => {
			if (dialog.id === id) index = dialogs.indexOf(dialog)
			return dialog.id === id ? { ...dialog, show: false } : dialog
		})
		listener(dialogs)
	})
	dialogs.splice(index, 1)
}

export const useDialog = () => {
	const [state, setState] = useState(dialogs)

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
		dialog,
		close,
		dialogs: state,
	}
}
