const _ = ({ children, className, onClick }: any) => {
	return (
		<li className={className} onClick={onClick}>
			{children}
		</li>
	)
}

export default _
