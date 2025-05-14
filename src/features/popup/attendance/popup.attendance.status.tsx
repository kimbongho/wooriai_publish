import { Button, Popup, Radio, RadioGroup } from '@/entities'
import { PRESENCE_ABSENCE_REASON, PRESENCE_STATE_RADIO } from '@/shared'

const _ = ({ open, close, value, onChange }: any) => {
	return (
		<Popup open={open} close={() => close(false)}>
			<div className='pop-header'>
				<b className='title align-l'>출결상태를 선택해주세요</b>
			</div>
			<div className='pop-body'>
				<div className='check-select-list'>
					<RadioGroup label='notiTime' value={value || ''} onChange={onChange}>
						<ul>
							{PRESENCE_STATE_RADIO.map((v: any) => {
								if (v.value === '2') {
									return (
										<li key={v.value}>
											<div className='tit'>{v.label}</div>
											<ul>
												{PRESENCE_ABSENCE_REASON.map((item: any) => (
													<li key={item.value}>
														<Radio value={item.value}>{item.label}</Radio>
													</li>
												))}
											</ul>
										</li>
									)
								}
								return (
									<li key={v.value}>
										<Radio value={v.value}>{v.label}</Radio>
									</li>
								)
							})}
						</ul>
					</RadioGroup>
				</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' onClick={() => close(true)}>
						<span>다음</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
