import { Button, Popup, SelectPicker } from '@/entities'
import { useState } from 'react'

const _ = ({ data, value, open, close, onChange }: any) => {
	const [selected, setSelected] = useState([])

	let dateValue: any = []
	if (typeof value === 'string') {
		dateValue[0] = '1'
		dateValue[1] = Number(value.split(':')[0])
		dateValue[2] = Number(value.split(':')[1])
	} else {
		dateValue = value
	}

	return (
		<Popup open={open} close={close}>
			<div className='pop-header'>
				<b className='title'>시간을 선택해 주세요</b>
			</div>
			<div className='pop-body'>
				{/* <SelectPicker data={data || []} value={['1', Number(value.split(':')[0]), Number(value.split(':')[1]), '0', '1']} onChange={setSelected} /> */}
				<SelectPicker data={data || []} value={dateValue} onChange={setSelected} />
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button
						className='btn-type1 st1'
						onClick={() => {
							close()
							onChange(selected)
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
