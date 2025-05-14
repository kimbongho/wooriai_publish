import RadioContext from './radio.context'

const _ = ({ label, children, ...rest }: any) => {
	return (
		<fieldset>
			<legend>{label}</legend>
			<RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
		</fieldset>
	)
}

export default _
