import { Modal } from './modal.style'

const _ = ({ children, open, type, title, close }: any) => {
	return (
		<Modal className={open ? 'openModal modal' : 'modal'}>
			{open ? (
				<div className='popup'>
					<div className='pop-header'>
						<b className='title'>{title}</b>
						<button className='close' onClick={close}>
							&times;
						</button>
					</div>
					<div>{children}</div>
					<div className='pop-footer'>
						<button className='close' onClick={close}>
							close
						</button>
					</div>
				</div>
			) : null}
		</Modal>
	)
}

export default _
