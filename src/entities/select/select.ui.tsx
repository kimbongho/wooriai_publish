import { Select } from './select.style'

const _ = ({ className, options, name, id, value, placeholder, disabled, onChange }: any) => {
	return (
		<Select required className={className} name={name} id={id} value={value} disabled={disabled} onChange={onChange}>
			{placeholder && (
				<option value='' disabled selected>
					{placeholder}
				</option>
			)}
			{options.map((option: any, key: any) => {
				return (
					<option key={key} value={option.value}>
						{option.label}
					</option>
				)
			})}
		</Select>
	)
}

export default _
