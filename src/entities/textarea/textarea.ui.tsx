import { useState } from 'react'
import { Textarea } from './textarea.style'

const _ = ({ name, defaultValue, value, className, disabled, del, placeholder, maxLength, onChange }: any) => {
	const [focus, setFocus] = useState('')
	const onFocus = () => {
		setFocus('focus')
	}
	const onBlur = () => {
		setFocus('')
	}

	return (
		<Textarea className={'textarea ' + className + ' ' + focus}>
			<textarea name={name} defaultValue={defaultValue} disabled={disabled} value={value} placeholder={placeholder} maxLength={maxLength} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
		</Textarea>
	)
}

export default _
