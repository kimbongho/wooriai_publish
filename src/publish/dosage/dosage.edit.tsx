import { Button, Checkbox, Radio, RadioGroup, Textarea, UploadPhotos } from '@/entities'
import { PopBoard, PopDatePicker, PopTimePicker } from '@/features'
import { globalStore, zeroFill } from '@/shared'
import { addDays } from 'date-fns'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Contents from './dosage.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '투약의뢰서',
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

	// 사진업로드
	const [photos, setPhotos] = useState([])
	const photoMax = 1000000

	//달력 팝업
	const [popDatepicker, setPopDatepicker] = useState(false)
	const popOpenDatepicker = () => {
		setPopDatepicker(true)
	}
	const popCloseDatepicker = () => {
		setPopDatepicker(false)
	}

	const [dayStatus, setDayStatus] = useState('init')
	const [startDay, setStartDay] = useState(new Date())
	const [endDay, setEndDay] = useState(addDays(startDay, 7))
	const setRangeDay = (state: any) => {
		setStartDay(state[0].startDate)
		setEndDay(state[0].endDate)
		setDayStatus('')
	}

	//시간
	const [notiTime, setNotiTime] = useState('1')
	const notiTimeOption = [
		{ value: '1', label: '식전 30분' },
		{ value: '2', label: '식후 30분' },
		{ value: '3', label: '식사시' },
		{ value: 'custom', label: '지정 시간' },
	]

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

	// 동의 항목
	const [check, setCheck] = useState(false)

	return (
		<>
			<Contents>
				<div className='dosage-edit-wrap'>
					<div className='menu'>
						<div className='right'>
							<Button className='btn-import' onClick={popOpenImport}>
								불러오기
							</Button>
						</div>
					</div>

					<UploadPhotos title='사진첨부' photos={photos} max={photoMax} total={10} onChange={setPhotos} />

					<div className='section'>
						<b className='tit'>추가내용</b>
						<Textarea />
					</div>

					<div className='section'>
						<b className='tit'>투약 기간 설정</b>
						<Button className='btn-date-range' onClick={popOpenDatepicker}>
							<div className='date'>{dayStatus === 'init' ? <span className='placeholder'>시작일</span> : moment(startDay).format('YYYY-MM-DD')}</div>
							<span className='dash'>~</span>
							<div className='date'>{dayStatus === 'init' ? <span className='placeholder'>종료일</span> : moment(endDay).format('YYYY-MM-DD')}</div>
						</Button>
					</div>

					<div className='section'>
						<div className='dosage-time'>
							<b className='tit'>투약시간 1</b>
							<div className='select-box'>
								<ul>
									<RadioGroup label='notiTime' value={notiTime} onChange={setNotiTime}>
										{notiTimeOption.map((item, idx) => (
											<li key={`radio` + idx}>
												<Radio key={item.value} value={item.value}>
													{item.label}
												</Radio>
												{item.value === 'custom' ? (
													<button className='btn-time' onClick={popOpenPicker}>
														{timeValue.length > 0 ? (
															<span className='time'>
																{zeroFill(timeValue[1], 2)} : {zeroFill(timeValue[2], 2)}
															</span>
														) : (
															'시간을 선택해 주세요'
														)}
													</button>
												) : null}
											</li>
										))}
									</RadioGroup>
								</ul>
							</div>
						</div>
						<Button className='btn-add'>
							<span>투약 시간 추가 하기 </span>
						</Button>
					</div>
				</div>
				<div className='check-wrap'>
					<Checkbox checked={check} onChange={setCheck}>
						작성자가 직접 아동에 대한 투약을 의뢰하였으며, <br />
						의뢰 내용에 대한 책임은 작성자에게 있습니다.
					</Checkbox>
				</div>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1'>
						<span>등록</span>
					</Button>
				</div>
			</Contents>

			<PopBoard type='import' title='가장 최근 작성글을 불러옵니다.' data={{ name: '파일명파일명' }} open={popImport} close={popCloseImport} />

			<PopDatePicker type='range' start={startDay} end={endDay} min={startDay} open={popDatepicker} close={popCloseDatepicker} onChange={setRangeDay} />
			<PopTimePicker open={popPicker} close={popClosePicker} value={timeValue} onChange={setTimeValue} />
		</>
	)
}

export default _
