import { useState } from 'react'
import { Input } from './input.style'

const _ = ({ children, type, name, defaultValue, value, className, disabled, del, placeholder, maxLength, onChange, onKeyDown, inputStyle }: any) => {
	const [focus, setFocus] = useState('')
	const onFocus = () => {
		setFocus('focus')
	}
	const onBlur = () => {
		setFocus('')
	}

	return (
		// <Input className={'input ' + className + ' ' + focus} disabled={disabled}>
		<Input className={'input ' + className + ' ' + focus + ' ' + (value || defaultValue ? 'has-value' : '')}>
			<input type={type} name={name} defaultValue={defaultValue} value={value} placeholder={placeholder} maxLength={maxLength} onChange={onChange} onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown} disabled={disabled} style={inputStyle} />
			{del ? <button className='btn-del' onClick={onChange} style={value || defaultValue ? { display: 'block' } : { display: 'none' }}></button> : ''}
			{children}
		</Input>
	)
}

export default _
