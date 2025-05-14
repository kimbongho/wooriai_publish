import { Fragment } from 'react'
import Button from '../button'
import { Dialog } from './dialog.style'
import { useDialog } from './dialog.use'

const _ = () => {
	const { close, dialogs }: any = useDialog()
	return (
		<Fragment>
			{dialogs.map((dialog: any) => {
				let msg = typeof dialog.message == 'string' ? dialog.message : dialog.message.txt
				return (
					<Dialog key={dialog.id} id={dialog.id} className={dialog.show ? 'on' : ''}>
						<div className='dim'></div>
						<div className='popup'>
							<div className='pop-body'>
								{dialog.message.tit ? <div className='dialog-tit'>{dialog.message.tit}</div> : null}
								<div className='dialog-txt' dangerouslySetInnerHTML={{ __html: msg }}></div>
							</div>
							<div className='pop-footer'>
								<div className='btn-wrap'>
									{dialog.cancle ? (
										typeof dialog.cancle == 'object' ? (
											<Button
												className={dialog.cancle.type ? dialog.cancle.type : 'st2'}
												onClick={() => {
													dialog.cancle.callback()
													close(dialog.id)
												}}
											>
												{dialog.cancle.txt}
											</Button>
										) : (
											<Button
												className='st2'
												onClick={() => {
													dialog.cancle()
													close(dialog.id)
												}}
											>
												취소
											</Button>
										)
									) : null}

									{dialog.confirm ? (
										dialog.confirm && typeof dialog.confirm == 'object' ? (
											<Button
												className={dialog.confirm.type ? dialog.confirm.type : 'st1'}
												onClick={() => {
													dialog.confirm.callback()
													close(dialog.id)
												}}
											>
												{dialog.confirm.txt}
											</Button>
										) : (
											<Button
												className='st1'
												onClick={() => {
													dialog.confirm()
													close(dialog.id)
												}}
											>
												확인
											</Button>
										)
									) : null}
								</div>
							</div>
						</div>
					</Dialog>
				)
			})}
		</Fragment>
	)
}

export default _
