/** @jsxImportSource react */
import { Button, Checkbox, Radio, RadioGroup, Textarea, UploadPhotos, useToast } from '@/entities'
import { PopBoard, PopDatePicker, PopTimePicker } from '@/features'
import { DOSAGE_TIME_OPTIONS, dosageStore, FILE_MAX_SIZE, globalStore, isEmptyObject, isEmptyString, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore, zeroFill } from '@/shared'
import { addDays } from 'date-fns'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './dosage.style'
import {v4 as uuidv4} from 'uuid'

const orderArr: Array<string> = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth']

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { dosage, setDosageStore } = dosageStore()
	const { setHeader, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '투약의뢰서',
			back: true,
			trash: !isEmptyString(dosage.remedyId),
		})
		setFooter({
			fixed: false,
			reple: false,
			class: '',
		})
		setMenubar({
			fixed: false,
		})
	}, [])

	const [dosageData, setDosageData] = useState<Dosage>()
	const [popImport, setPopImport] = useState<boolean>(false)
	const [photos, setPhotos] = useState<Array<any>>([])
	const [photosOrg, setPhotosOrg] = useState<Array<any>>([])
	const [removePhoto, setRemovePhoto] = useState<Array<any>>([])
	const [popDatepicker, setPopDatepicker] = useState<boolean>(false)
	const [dayStatus, setDayStatus] = useState<string>('init')
	const [minDay, setMinDay] = useState<Date>(new Date())
	const [startDay, setStartDay] = useState<Date>(new Date())
	const [endDay, setEndDay] = useState<Date>(addDays(startDay, 7))
	const [dosageTimes, setDosageTimes] = useState<Array<any>>([])
	const [popPicker, setPopPicker] = useState<boolean>(false)
	const [check, setCheck] = useState<boolean>(false)
	const [targetIdx, setTargetIdx] = useState<number>(1)

	useEffect(() => {
		if (!isEmptyString(dosage.remedyId)) {
			Server.get(`/api/presence/remedy/info?remedyId=${dosage.remedyId}`)
				.then((response: any) => {
					const { data, status } = response
					if (status === RESPONSE_OK) {
						const { state, code, data: resData, message } = data
						if (state === STATUS_OK) {
							setDosageData(resData)
							setPhotosOrg(resData?.files)
							setRangeDay([{ startDate: resData?.remedy?.remedyFromDate, endDate: resData?.remedy?.remedyToDate }])

							let remedyData = resData?.remedy
							const timeList: Array<any> = Array(10)
								.fill(undefined)
								.map((v, i) => {
									const row: string = remedyData?.[`reqTm${orderArr[i]}`]
									if (!isEmptyString(row)) {
										const rowData = row?.indexOf('_') >= 0 ? row.split('_') : ['DOS01', '']
										// console.log(rowData)
										return {
											idx: i + 1,
											value: rowData[0],
											time: !isEmptyString(rowData[1]) && rowData[1] !== 'undefined' ? rowData[1] : '',
										}
									}
									else {
										return false
									}
								}).filter((v: any) => v)

							setDosageTimes(timeList)
						} else {
							toast('투약의뢰서 정보를 불러오는 데 실패했습니다.')
						}
					}
				})
				.catch()
		} else {
			setDosageData({
				files: null,
				remedy: {
					remedyId: '',
					remedyFromDate: '',
					remedyToDate: '',
					remedyCnt: '',
					remedyDesc: '',
					reqTmFirst: '',
					childId: '',
					childName: '',
					className: '',
					classGb: '',
					teacherName: '',
				},
			})
			const now = new Date()
			setDosageTimes([{ idx: 1, value: 'DOS04', time: `${zeroFill(now.getHours(), 2)}:${zeroFill(now.getMinutes(), 2)}` }])
		}
	}, [])

	const onSubmit = async () => {
		const remedyObj = dosageData?.remedy
		const setTimeString = (idx: number) => {
			const dosageRow = dosageTimes.find((d: any) => d.idx === idx)
			return !isEmptyObject(dosageRow) ? `${dosageRow?.value}_${!isEmptyString(dosageRow?.time) ? dosageRow?.time : ''}` : undefined
		}
		const dosageEditForm = {
			remedyId: dosage.remedyId,
			remedyFromDate: moment(startDay).format('YYYY-MM-DD'),
			remedyToDate: moment(endDay).format('YYYY-MM-DD'),
			remedyCnt: dosageTimes.length,
			remedyDesc: remedyObj?.remedyDesc,
			reqTmFirst: setTimeString(1),
			reqTmSecond: setTimeString(2),
			reqTmThird: setTimeString(3),
			reqTmFourth: setTimeString(4),
			reqTmFifth: setTimeString(5),
			reqTmSixth: setTimeString(6),
			reqTmSeventh: setTimeString(7),
			reqTmEighth: setTimeString(8),
			reqTmNinth: setTimeString(9),
			reqTmTenth: setTimeString(10),
			childId: dosage.childId,
			daycareId: user.daycareId,
			removeFiles: removePhoto,
		}

		const formData = new FormData()
		formData.append(
			'remedy',
			new Blob([JSON.stringify(dosageEditForm)], {
				type: 'application/json',
			})
		)
		photos?.map((photo: any) => {
			formData.append('imgFiles', photo)
		})

		const { data, status } = await Server.post('/api/presence/remedy/upsert', formData)
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
				setDosageStore({ remedyId: resData.remedyId })
				router.replace(ROUTE_PATH['10-01'])
			} else {
				toast(message)
			}
		}
	}

	const setRangeDay = (state: any) => {
		setStartDay(state[0].startDate)
		setEndDay(state[0].endDate)
		setDayStatus('')
	}

	const onChangeDesc = (e: any) => {
		setDosageData({
			...dosageData,
			remedy: { ...dosageData?.remedy, remedyDesc: e.target.value },
		})
	}

	const addDosageTime = () => {
		const lastIdx = dosageTimes.length
		if (lastIdx < 10) {
			const now = new Date()
			let firstIdx = 0
			Array(10).fill(undefined).map((v, i) => {
				if (!dosageTimes.find((d: any) => d.idx === i + 1)) {
					if (firstIdx === 0) {
						firstIdx = i + 1
					}
				}
			})
			setDosageTimes((prev: any) => [...prev, { idx: firstIdx, value: 'DOS04', time: `${zeroFill(now.getHours(), 2)}:${zeroFill(now.getMinutes(), 2)}` }])
		} else {
			toast('투약시간은 10개까지만 등록이 가능합니다.')
		}
	}

	// console.log(dosageTimes)
	return (
		<>
			<Contents>
				<div className='dosage-edit-wrap'>
					<div className='menu'>
						<div className='right'>
							<Button className='btn-import' onClick={() => setPopImport(true)}>
								불러오기
							</Button>
						</div>
					</div>
					<UploadPhotos title='사진첨부' photosOrg={photosOrg} photos={photos} max={FILE_MAX_SIZE} total={10} onChange={setPhotos} setRemoveFiles={setRemovePhoto} />
					<div className='section'>
						<b className='tit'>추가내용</b>
						<Textarea value={dosageData?.remedy?.remedyDesc} onChange={onChangeDesc} />
					</div>

					<div className='section'>
						<b className='tit'>투약 기간 설정</b>
						<Button className='btn-date-range' onClick={() => setPopDatepicker(true)}>
							<div className='date'>{dayStatus === 'init' ? <span className='placeholder'>시작일</span> : moment(startDay).format('YYYY-MM-DD')}</div>
							<span className='dash'>~</span>
							<div className='date'>{dayStatus === 'init' ? <span className='placeholder'>종료일</span> : moment(endDay).format('YYYY-MM-DD')}</div>
						</Button>
					</div>

					<div className='section'>
						{dosageTimes.map((item: any, key: any) => (
							<div className='dosage-time' key={uuidv4()}>
								<div style={{ display: 'flex', flexDirection: 'row', justifyItems: 'space-between' }}>
									<b className='tit'>투약시간 {key + 1}</b>
									<button
										className='tit'
										style={{ width: '4rem', color: '#4252E2' }}
										onClick={() => {
											setDosageTimes((prev: any) => prev.filter((v: any) => v.idx !== item.idx))
										}}
									>
										취소
									</button>
								</div>
								<div className='select-box'>
									<ul>
										<RadioGroup
											label='notiTime'
											value={item.value}
											onChange={(value: string) => {
												if (value === "DOS04") {
													setDosageTimes(dosageTimes.map((v: any) => (v.idx === item.idx ? { ...v, value: value } : v)))
												} else {
													setDosageTimes(dosageTimes.map((v: any) => (v.idx === item.idx ? { idx: v.idx, value: value } : v)))
												}
											}}
										>
											{DOSAGE_TIME_OPTIONS.map((opts: any) => (
												<li key={`radio${opts.value}`}>
													<Radio key={uuidv4()} value={opts.value}>
														{opts.label}
													</Radio>
													{opts.value === 'DOS04' ? (
														<button className='btn-time' onClick={() => {
															setTargetIdx(item.idx)
															setPopPicker(true)
														}}>
															{!isEmptyString(dosageTimes.find(v => v.idx === item.idx)?.time) ? (
																<span className='time'>
																	{dosageTimes.find(v => v.idx === item.idx)?.time}
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
						))}

						<Button className='btn-add' onClick={addDosageTime}>
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
					<Button className='btn-type1 st1' disabled={!check} onClick={onSubmit}>
						<span>등록</span>
					</Button>
				</div>
			</Contents>

			<PopBoard type='import' title='가장 최근 작성글을 불러옵니다.' data={{ name: '파일명파일명' }} open={popImport} close={() => setPopImport(false)} />
			<PopDatePicker type='range' start={startDay} end={endDay} min={minDay} open={popDatepicker} close={() => setPopDatepicker(false)} onChange={setRangeDay} />
			<PopTimePicker open={popPicker} close={() => setPopPicker(false)} value={!isEmptyObject(dosageTimes.find(v => v.idx === targetIdx)) ? dosageTimes.find(v => v.idx === targetIdx).time : '00:00'} onChange={(value) => {
				setDosageTimes((prev) => prev.map((v: any) => {
					if (v.idx === targetIdx) {
						return {
							...v,
							value: 'DOS04',
							time: `${zeroFill(value[1], 2)}:${zeroFill(value[2], 2)}`
						}
					}
					return v
				}))
			}} />
		</>
	)
}

export default _
