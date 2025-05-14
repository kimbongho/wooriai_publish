import { useEffect, useRef, useState } from 'react'

const _ = ({ placeholder, value, onChange }: any) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const [text, setText] = useState(value)

	const autoH = () => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.style.height = '0px'
			const scrollHeight = textareaRef.current.scrollHeight
			textareaRef.current.style.height = scrollHeight + 'px'
		}
	}

	const valueChange = (e: any) => {
		setText(e.currentTarget.value)
		autoH()
		onChange(e.currentTarget.value)
	}

	useEffect(() => {
		autoH()
	}, [])

	return (
		<div className='textarea'>
			<textarea ref={textareaRef} value={text} onChange={valueChange} placeholder={placeholder} />
		</div>
	)
}

export default _
