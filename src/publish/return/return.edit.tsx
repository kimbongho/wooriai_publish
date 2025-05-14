import { Button, Checkbox, Input, Radio, RadioGroup, Textarea } from '@/entities'
import { PopBoard, PopTimePicker } from '@/features'
import { globalStore, zeroFill } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './return.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '귀가동의서',
			back: true,
			trash: true,
		})
	}, [])

	//게시물 import 팝업
	const [popImport, setPopImport] = useState(false)
	const popOpenImport = () => {
		setPopImport(true)
	}
	const popCloseImport = () => {
		setPopImport(false)
	}

	//시간선택팝업
	const [popPicker, setPopPicker] = useState(false)
	const popOpenPicker = () => {
		setPopPicker(true)
	}
	const popClosePicker = () => {
		setPopPicker(false)
	}

	// const [timeValue, setTimeValue] = useState(['', 'PM', 9, 50])
	const [timeValue, setTimeValue] = useState([])

	//귀가방법
	const [returnMethod, setReturnMethod] = useState('1')
	const returnMethodOption = [
		{ value: '1', label: '자가용' },
		{ value: '2', label: '통학버스' },
		{ value: '3', label: '도보' },
		{ value: '4', label: '자전거' },
	]

	const [parent, setParent] = useState('')
	const [phone, setPhone] = useState('')

	// 동의 항목
	const [check, setCheck] = useState(false)

	return (
		<>
			<Contents>
				<div className='return-edit-wrap'>
					<div className='menu'>
						<div className='right'>
							<Button className='btn-import' onClick={popOpenImport}>
								불러오기
							</Button>
						</div>
					</div>

					<div className='section'>
						<b className='tit'>귀가 시간</b>
						<Button className='btn-time' onClick={popOpenPicker}>
							{timeValue.length > 0 ? (
								<span className='time'>
									{zeroFill(timeValue[1], 2)} : {zeroFill(timeValue[2], 2)}
								</span>
							) : (
								<span className='placeholder'>시간을 선택해 주세요</span>
							)}{' '}
						</Button>
					</div>

					<div className='section'>
						<b className='tit'>귀가방법</b>
						<div className='select-box'>
							<ul>
								<RadioGroup label='solveStatus' value={returnMethod} onChange={setReturnMethod}>
									{returnMethodOption.map((item, idx) => (
										<li key={`radio` + idx}>
											<Radio key={item.value} value={item.value}>
												{item.label}
											</Radio>
										</li>
									))}
								</RadioGroup>
							</ul>
						</div>
					</div>

					<div className='section'>
						<b className='tit'>보호자명</b>
						<Input type='text' value={parent} del={true} onChange={(e: any) => setParent(e.target.value)} />
					</div>

					<div className='section'>
						<b className='tit'>보호자 연락처</b>
						<Input type='text' value={phone} del={true} onChange={(e: any) => setPhone(e.target.value)} />
					</div>

					<div className='section'>
						<b className='tit'>추가내용</b>
						<Textarea />
					</div>
				</div>
				<div className='check-wrap'>
					<Checkbox checked={check} onChange={setCheck}>
						작성자는 아동을 위의 방법으로 귀가 조치하는 것을 <br />
						동의합니다.
					</Checkbox>
				</div>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1'>
						<span>등록</span>
					</Button>
				</div>
			</Contents>

			<PopBoard type='import' title='가장 최근 작성글을 불러옵니다.' data={{ name: '파일명파일명' }} open={popImport} close={popCloseImport} />

			<PopTimePicker open={popPicker} close={popClosePicker} value={timeValue} onChange={setTimeValue} />
		</>
	)
}

export default _
