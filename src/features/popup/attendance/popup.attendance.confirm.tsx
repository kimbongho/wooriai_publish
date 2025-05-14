import { Button, Popup } from '@/entities'
import { isEmpty, PRESENCE_ABSENCE_REASON, PRESENCE_STATE_RADIO } from '@/shared'

const _ = ({ open, close, prev, next }: any) => {
	const afterText = () => {
		if (isEmpty(next)) {
			return ''
		} else if (String(next).startsWith('2')) {
			return `인정결석 - ${PRESENCE_ABSENCE_REASON.filter(v => v.value === next)[0].label}`
		} else {
			return PRESENCE_STATE_RADIO.filter(v => v.value === next)[0].label
		}
	}

	return (
		<Popup open={open} close={close}>
			<div className='pop-header'>
				<b className='title'>출결상태 변경</b>
			</div>
			<div className='pop-body'>
				<div className='pop-notice'>
					<div className='tit'>정말 출결 상태를 변경하시겠어요?</div>
					<div className='txt-box align-c'>
						<div className='txt'>
							<span className='label'>변경 전 :</span>
							<b>{prev}</b>
						</div>
						<div className='txt'>
							<span className='label'>변경 후 :</span>
							<b>{afterText()}</b>
						</div>
					</div>
				</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st4' onClick={() => close(false)}>
						<span>아니오</span>
					</Button>
					<Button className='btn-type1 st1' onClick={() => close(true)}>
						<span>네, 변경할게요</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
