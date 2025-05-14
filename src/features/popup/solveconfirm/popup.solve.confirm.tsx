import { Button, Popup } from '@/entities'
import { extractTimeFromDate } from '@/shared'

const _ = ({ data, title, open, close }: any) => {
	return (
		<Popup open={open} close={close} title={title}>
			<div className='pop-header'>
				<b className='title'>{title}</b>
			</div>
			<div className='pop-body'>
				<div className='pop-notice'>
					<div className='tit'>위험 알림을 해결 상태로 변경할까요?</div>
					<div className='txt-box align-c'>
						<div className='txt'>
							<strong className='c-red'>{data?.workoutGb}</strong>
							<div className='time'>{extractTimeFromDate(data?.alertAt)}</div>
						</div>
					</div>
				</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' onClick={close}>
						<span>해결확인</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
