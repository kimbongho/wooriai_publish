import { Button, Popup } from '@/entities'
import { RIGHTS_DATA } from '@/shared'

const _ = ({ data, open, close, next }: any) => {
	return (
		<Popup open={open} close={() => close(false)}>
			<div className='pop-header'>
				<b className='title align-l'></b>
			</div>
			<div className='pop-body'>
				<div className='select-list'>
					<b>{RIGHTS_DATA[data.rightsCode]}</b>으로 서비스를 할까요?
				</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st4' onClick={() => close(false)}>
						<span>취소</span>
					</Button>
					<Button
						className='btn-type1 st1'
						onClick={() => {
							close(false)
							next()
						}}
					>
						<span>확인</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
