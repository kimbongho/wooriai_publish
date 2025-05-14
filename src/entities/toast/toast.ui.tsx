/** @jsxImportSource react */
import { Toast } from './toast.style'
import { useToast } from './toast.use'

const _ = () => {
	const { toasts }: any = useToast()
	return (
		<>
			{toasts.map((toast: any) => {
				return (
					<Toast key={toast.id} id={toast.id} className={toast.show ? 'on' : ''}>
						<div className='toast-text'>
							{toast.message &&
								toast.message.split('\n').map((line: any, idx: number) => {
									return (
										<span key={idx}>
											{line}
											<br />
										</span>
									)
								})}
						</div>
					</Toast>
				)
			})}
		</>
	)
}

export default _
