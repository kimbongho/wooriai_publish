import { Button, Popup } from '@/entities'

const _ = ({ title, open, close, confirm }: any) => {
	return (
		<Popup open={open} close={close}>
			<div className='pop-header'>
				<b className='title align-l'>{title} 정보 등록</b>
			</div>
			<div className='pop-body'>
				<div className='select-list'>{title} 정보를 등록할까요?</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st4' onClick={close}>
						<span>취소</span>
					</Button>
					<Button className='btn-type1 st1' onClick={confirm}>
						<span>확인</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
