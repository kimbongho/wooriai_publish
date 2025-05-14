/** @jsxImportSource react */
import { Button, Icon, Img, Radio, RadioGroup, useToast } from '@/entities'
import { PopBoard, PopPhotoView, PopTimePicker } from '@/features'
import { AvgSevenMax, AvgSevenMin, AvgTodayMax, AvgTodayMin, CharacterList, customDateFormat, dateData, globalStore, isEmptyArray, isEmptyObject, isEmptyString, NEWS_MEAL_OPTIONS, NEWS_SLEEP_OPTIONS, NEWS_STOOL_OPTIONS, NEWS_TEMPER_OPTIONS, proxySrcChild, proxySrcComm, reportStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, useTooltip, WEEKDAYS_KR, zeroFill } from '@/shared'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Contents from './report.style'

const childList = [
	{ cls: '딸기반', name: '박소율' },
	{ cls: '풀입반', name: '홍길동' },
	{ cls: '아리스토텔레스반', name: '을지문덕' },
	{ cls: '이슬반', name: '이황' },
]
const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { report, setReportInfo, clearReportStore } = reportStore()
	const { setHeader, setTrashFunc } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '알림장 미리보기',
			back: true,
			trash: !isEmptyArray(report?.preview),
		})
	}, [])

	const [child, setChild] = useState<Array<any>>(report.childIds)
	const [photo, setPhoto] = useState('')
	const [popPhotoView, setPopPhotoView] = useState(false)
	const [notiTime, setNotiTime] = useState('1')
	const [popPicker, setPopPicker] = useState(false)
	const [onChild, setOnChild] = useState<any>({ cls: '', name: '' })
	const today = new Date()
	const [dateValue, setDateValue] = useState([customDateFormat(today), today.getHours(), today.getMinutes()])
	const [previewData, setPreviewData] = useState<any>({})
	const [previewFile, setPreviewFile] = useState<any>([])
	const [popDel, setPopDel] = useState(false)
	const [dailyNewsArr, setDailyNewsArr] = useState<any>([])

	const viewBox = useRef<HTMLDivElement>(null)
	const relChart = useRef<HTMLDivElement>(null)
	let thumb: any = null
	const nextOneHour = useRef(new Date(today.getTime() + 60 * 60 * 1000))
	const nextTwoHours = useRef(new Date(today.getTime() + 2 * 60 * 60 * 1000))
	const notiTimeOption = [
		{ value: '1', label: '바로 등록', time: '' },
		{ value: '2', label: '1시간 뒤', time: `${zeroFill(nextOneHour.current.getHours(), 2)}:${zeroFill(nextOneHour.current.getMinutes(), 2)}` },
		{ value: '3', label: '2시간 뒤', time: `${zeroFill(nextTwoHours.current.getHours(), 2)}:${zeroFill(nextTwoHours.current.getMinutes(), 2)}` },
		{ value: '4', label: '일과 후', time: '16:00' },
		{ value: 'custom', label: '지정 시간' },
	]

	const { tooltip, openTooltip } = useTooltip()

	useEffect(() => {
		if (isEmptyArray(report.childIds)) return router.back()

		const firstChild = (report.childIds[0] as any).childId
		getPreviewData(firstChild)
		changeSelectedChild(firstChild)

		report.childIds?.map((v: any) => getPreviewData(v.childId, 'save'))
	}, [])

	useEffect(() => {
		if (isEmptyArray(report?.preview)) return

		setTrashFunc(async () => setPopDel(true))
	}, [])

	const getPreviewData = (childId: string, div?: string) => {
		Server.post(`/api/dailynews/info/${childId}/${report.newsDate}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					if (!isEmptyString(div) && div === 'save') {
						setDailyNewsArr((prev) => [...prev, { childId: childId, dailyNews: resData.dailyNews }])
					} else {
						setPreviewData(resData.dailyNews)
						setPreviewFile(resData.imgfiles)
					}
				} else {
					toast(message)
				}
			}
		})
	}

	const changeSelectedChild = (v: any) => {
		const changeChild = child.map(item => {
			if (item.childId === v) {
				return { ...item, selected: true }
			} else {
				return { ...item, selected: false }
			}
		})

		setChild(changeChild)
	}
	const changeDelete = (v: any) => {
		setChild(child.filter(item => item.childId !== v))
	}

	const viewBoxToggle = () => {
		if (viewBox.current) viewBox.current.classList.toggle('on')
	}

	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}

	const onSubmit = () => {
		const dailynews = {
			newsDate: report.newsDate,
			childIds: child.map(v => v.childId),
		}

		Server.post(`/api/dailynews/update/tempSaveY`, dailynews).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					// setReportInfo({ preview: resData })
					// router.push(ROUTE_PATH['07-03'])
					setReportInfo({ isWrite: true })
					toast('알림장이 등록되었습니다.')
					router.push(ROUTE_PATH['07-01'])
				} else {
					toast(message)
				}
			}
		})
	}

	const deleteReport = () => {
		dailyNewsArr?.map((v: any) => {
			Server.post(`/api/dailynews/delete/${v.childId}/${v.dailyNews.newsId}`, {}).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, message } = data
					if (status === RESPONSE_OK) {
						const { state, data: resData, message } = data
						if (state === STATUS_OK) {
							//
						} else {
							toast(message)
						}
					}
				}
			})
		})

		clearReportStore()
		router.push(ROUTE_PATH['07-01'])
	}

	const DrawCharacter = useCallback((name: string) => {
		const target = CharacterList.find((item: any) => item.name === name)
		if (isEmptyObject(target)) return (<Icon type='close' />)

		return (
			<>
				<div className='text'>
					{target?.before}<br /><b>{target?.strong}</b> {target?.after}
				</div>
				<Icon type={`character-${target?.icon}`} />
			</>
		)
	}, [])

	const DrawPointGraph = useCallback((today: number, avg: number) => {
		return (
			<div className='gage-wrap'>
				<div className='gage-bar today'>
					<span className='label'>오늘</span>
					<div className='gage'>
						<span className='bar' style={{ width: `${today}%` }}></span>
					</div>
				</div>
				<div className='gage-bar'>
					<span className='label'>7일평균</span>
					<div className='gage'>
						<span className='bar' style={{ width: `${avg}%` }}></span>
					</div>
				</div>
			</div>
		)
	}, [])

	// console.log(previewData)
	return (
		<>
			<Contents>
				<div className='report-detail-wrap'>
					<div className='page-top-area'>
						<div className='select-item-list-wrap'>
							<div className='tit'>
								<span className='label'>
									선택 아동: <em>{child.length}명</em>
								</span>
							</div>
							<div className='select-item-list'>
								<Swiper spaceBetween={0} slidesPerView={'auto'}>
									{child.map((item: any, idx: any) => {
										return (
											<SwiperSlide key={item.childId}>
												<Button
													className='btn-del'
													onClick={() => {
														changeDelete(item.childId)
													}}
												></Button>
												<Button
													className={`box ` + (item.selected ? 'on' : '')}
													onClick={() => {
														if (!item.selected) {
															getPreviewData(item.childId)
															// setPreviewData((report.preview?.find((v: any) => v.childId === item.childId) as any)?.dailyNews)
															// setPreviewForm(report.previewForm[idx])
														}
														changeSelectedChild(item.childId)
													}}
												>
													<div className='thumb'>
														<Img src={item.profileImg ? proxySrcChild(item.profileImg) : '/images/temp/temp-album.jpg'} alt='' />
													</div>
													<div className='cls'>{item.className}</div>
													<div className='name'>
														<b>{item.childName}</b>
													</div>
												</Button>
											</SwiperSlide>
										)
									})}
								</Swiper>
							</div>
						</div>
					</div>
					<div className='report-detail-section'>
						<div className='beta-banner'>
							<div className='tit'>
								<b>이노뎁 우리 AI 알림장</b>
								<i className='ico-beta'></i>
							</div>
							<div className='txt'>아이의 미래를 키웁니다.</div>
						</div>
						<div className='report-title'>
							<b>{`${child.filter(v => v.selected)[0]?.className} ${child.filter(v => v.selected)[0]?.childName}`}</b>
							<div className='txt'>
								<span>{moment(previewData?.newsDate).format('YYYY.MM.DD')}</span>
								<span>{WEEKDAYS_KR[moment(previewData?.newsDate).day()]}</span>
							</div>
						</div>
						<div className='dashboard-box'>
							<ul>
								<li>
									<em>어린이집 재원일수</em>
									<b>{previewData?.enterDayCnt}</b>
								</li>
								<li>
									<em>8월 출석일수</em>
									<b>{previewData?.presenceCnt}</b>
								</li>
							</ul>
						</div>
						{!(previewData?.activityUseYn === 'N' && previewData?.sociabilityUseYn === 'N' && previewData?.relationUseYn === 'N' && previewData?.noticeUseYn === 'N') && (
							<div className='toggle-view-box on' ref={viewBox}>
								<Button className='box-header' onClick={viewBoxToggle}>
									<b>AI알림장</b>
								</Button>
								<div className='box-body'>
									{!isEmptyString(previewData?.analysisTime) &&
										<div className='total-text'>
											{previewData?.analysisTime} 동안의 분석 결과입니다.
											<br />
											알림장에 첨부할 항목을 선택해주세요.
										</div>
									}
									<div className='report-content-wrap'>
										{previewData?.activityUseYn === 'Y' && (
											<div className='report-box'>
												<div className='box-tit'>
													<Icon type='activity' />
													<span>활동성</span>
												</div>
												<div className='character-wrap'>
													{DrawCharacter(previewData?.activityDesc)}
													{DrawPointGraph((previewData.activityPoint - AvgTodayMin) / AvgTodayMax * 100, (previewData.activityAvg - AvgSevenMin) / AvgSevenMax * 100)}
												</div>
											</div>
										)}

										<div className='report-box'>
											{previewData?.sociabilityUseYn === 'Y' && (
												<>
													<div className='box-tit'>
														<Icon type='sociability' />
														<span>사회성</span>
													</div>
													<div className='character-wrap'>
														{DrawCharacter(previewData?.sociabilityDesc)}
														{DrawPointGraph((previewData.sociabilityPoint - AvgTodayMin) / AvgTodayMax * 100, (previewData.sociabilityAvg - AvgSevenMin) / AvgSevenMax * 100)}
													</div>
												</>
											)}

											{previewData?.relationUseYn === 'Y' && (
												<div className='relation-chart'>
													<div className='tooltip' ref={tooltip}>
														<span className='cls'>{onChild.className}</span>
														<div className='name'>{onChild.childName}</div>
													</div>
													<div className='chart' ref={relChart}>
														{previewData?.outerNodes?.sort((a: any, b: any) => a.nodePosition - b.nodePosition).map((d: any, idx: any) => {
															return (
																<div key={`around` + idx} className={`around around` + (idx + 1)}>
																	<div
																		className='thumb'
																		onClick={(e: any) => {
																			setOnChild(childList.find((v: any) => v.childId === d.id))
																			openTooltip(e, idx + 1)
																		}}
																	>
																		<Img src={isEmptyString(d.imagePicUrl) ? '/images/temp/temp-album.jpg' : proxySrcChild(d.imagePicUrl)} alt='' />
																	</div>
																</div>
															)
														})}
														<div className='center'>
															{!isEmptyObject(previewData?.centerNode) && (
																<div className='thumb'>
																	<Img src={isEmptyString(previewData?.centerNode?.imagePicUrl) ? '/images/temp/temp-album.jpg' : proxySrcChild(previewData?.centerNode?.imagePicUrl)} alt='' />
																</div>
															)}
														</div>
													</div>
												</div>
											)}

											{previewData?.noticeUseYn === 'Y' && (
												<div className='report-notice'>
													<p className='pre-line'>{previewData?.noticeDesc}</p>
													<p className='pre-line'>
														<em>우리 아이를 위해 가정과 선생님 그리고 우리AI가 함께 합니다. </em>
													</p>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						)}

						<div className='report-detail-view'>
							<ul className='album-list'>
								{previewFile?.map((item: any, id: any) => {
									return (
										<li key={id}>
											<Button
												className='img'
												onClick={() => {
													popOpenPhotoView(proxySrcComm(item.imgFileId))
												}}
											>
												<Img src={item.fileDownloadId ? proxySrcComm(item.fileDownloadId) : '/images/temp/temp-album.jpg'} alt='' />
											</Button>
										</li>
									)
								})}
							</ul>
							<div className='report-list'>
								<ul>
									<li>
										<b>체온</b>
										<div className='right'>
											<span className='status'>{NEWS_TEMPER_OPTIONS.filter(v => `DNT${zeroFill(v.value, 2)}` === previewData?.temperature)[0]?.name}</span>
										</div>
									</li>
									<li>
										<b>식사</b>
										<div className='right'>
											<span className='status'>{NEWS_MEAL_OPTIONS.filter(v => `DNM${zeroFill(v.value, 2)}` === previewData?.meal)[0]?.name}</span>
										</div>
									</li>
									<li>
										<b>수면</b>
										<small>(일정표 낮잠시간 기준)</small>
										<div className='right'>
											<span className='status'>{NEWS_SLEEP_OPTIONS.filter(v => `DNS${zeroFill(v.value, 2)}` === previewData?.sleep)[0]?.name}</span>
										</div>
									</li>
									<li>
										<b>배변</b>
										<div className='right'>
											<span className='status'>{NEWS_STOOL_OPTIONS.filter(v => `DND${zeroFill(v.value, 2)}` === previewData?.defecation)[0]?.name}</span>
										</div>
									</li>
								</ul>
							</div>
							<div className='text pre-line'>
								{previewData?.newsDesc}
							</div>
						</div>
					</div>

					<div className='report-regist-set'>
						<div className='select-box'>
							<b className='tit'>등록시간 설정</b>
							<ul>
								<RadioGroup label='notiTime' value={notiTime} onChange={setNotiTime}>
									{notiTimeOption.map((item, idx) => (
										<li key={`radio` + idx}>
											<Radio key={item.value} value={item.value}>
												{item.label}
											</Radio>
											{item.value === 'custom' ? (
												<button className='btn-time' onClick={() => setPopPicker(true)}>
													{dateValue.length > 0 ? (
														<>
															<span className='date'>{dateValue[0]}</span>
															<span className='time'>
																{zeroFill(dateValue[1], 2)} : {zeroFill(dateValue[2], 2)}
															</span>
														</>
													) : (
														'시간을 선택해 주세요'
													)}
												</button>
											) : (
												<div className='btn-time'>{item.time}</div>
											)}
										</li>
									))}
								</RadioGroup>
							</ul>
						</div>

						<div className='btn-wrap'>
							<Button className='btn-type2 st1' onClick={onSubmit}>
								등록
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopPhotoView src={previewFile} open={popPhotoView} close={() => setPopPhotoView(false)} />
			<PopTimePicker open={popPicker} close={() => setPopPicker(false)} data={dateData} value={dateValue} onChange={setDateValue} />
			<PopBoard type='delete' title='작성중인/선택한 게시물이 삭제됩니다.' data={{ name: '알림장', edit: () => deleteReport() }} open={popDel} close={() => setPopDel(false)} />
		</>
	)
}

export default _
