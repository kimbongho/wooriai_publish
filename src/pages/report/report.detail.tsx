/** @jsxImportSource react */
import { Button, Icon, Img, RepleInput, RepleList, useToast } from '@/entities'
import { PopMenu, PopPhotoView } from '@/features'
import { AvgSevenMax, AvgSevenMin, AvgTodayMax, AvgTodayMin, CHARACTER_ICON, CharacterList, globalStore, isEmptyObject, isEmptyString, isRightsAdmin, NEWS_MEAL_OPTIONS, NEWS_SLEEP_OPTIONS, NEWS_STOOL_OPTIONS, NEWS_TEMPER_OPTIONS, proxySrcChild, proxySrcComm, reportStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore, WEEKDAYS_KR } from '@/shared'
import moment from 'moment/moment'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import Contents from './report.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { report: store, setReportInfo } = reportStore()
	const { setHeader, header } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '알림장 보기',
			back: true,
			dotmenu: isRightsAdmin(user.rights),
		})
		if (header.menupop) setPopMenu(true)
	}, [header.menupop])

	const [repleList, setRepleList] = useState<any[]>([])
	const [targetReply, setTargetReply] = useState<any>({
		commentId: '',
		createdName: '',
		commentText: '',
		taggedUserName: '',
		taggedUserId: '',
	})
	const [report, setReport] = useState<any>({})
	const [childList, setChildList] = useState([])
	const [onChild, setOnChild] = useState<any>({})
	const [photo, setPhoto] = useState('')
	const [popPhotoView, setPopPhotoView] = useState(false)
	const [popRepleInput, setPopRepleInput] = useState(false)
	const [trigger, setTrigger] = useState(false)
	const [popMenu, setPopMenu] = useState(false)
	const [popRepleMenu, setPopRepleMenu] = useState(false)

	let thumb: any = null
	const viewBox = useRef<HTMLDivElement>(null)
	const relChart = useRef<HTMLDivElement>(null)
	const tooltip = useRef<HTMLDivElement>(null)

	useEffect(() => {
		document?.body.addEventListener('click', handleBodyClick)
		return () => {
			document?.body.removeEventListener('click', handleBodyClick)
		}
	}, [])

	useEffect(() => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.get(`/api/daycare/child/info/${user.daycareId}/list`).then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, data: resData, message } = data
					if (state === STATUS_OK) {
						if (resData.length > 0) {
							setChildList(resData)
							setOnChild(resData.filter((v: any) => v.childId === store.childId)[0])
						}
					} else {
						toast(message)
					}
				}
			})
		}

		// console.log(store.childId, store.newsDate, `/api/dailynews/info/${store.childId}/${store.newsDate}`)
		Server.post(`/api/dailynews/info/${store.childId}/${store.newsDate}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					// console.log(resData)
					setReport(resData)
				} else {
					toast(message)
				}
			}
		})
	}, [])

	const deleteReport = () => {
		Server.post(`/api/dailynews/delete/${store.childId}/${store.newsId}`, {}).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, message } = data
				if (status === RESPONSE_OK) {
					const { state, data: resData, message } = data
					if (state === STATUS_OK) {
						router.push(ROUTE_PATH['07-01'])
					} else {
						toast(message)
					}
				}
			}
		})
	}

	const viewBoxToggle = () => {
		if (viewBox.current) viewBox.current.classList.toggle('on')
	}

	const openTooltip = (e: any, idx: any) => {
		setOnChild(childList[idx - 1])
		setTimeout(() => {
			thumb = e.target
			let cls = `tooltip` + idx
			if (tooltip.current) {
				tooltip.current.setAttribute('class', 'tooltip')
				tooltip.current.classList.add('on')
				tooltip.current.classList.add(cls)
			}
		}, 100)
	}

	const handleBodyClick = (e: any) => {
		if ((tooltip.current && tooltip.current.contains(e.target)) || (thumb && thumb.contains(e.target))) {
			return
		}
		if (tooltip.current) {
			tooltip.current.setAttribute('class', 'tooltip')
		}
	}

	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}

	const popClosePhotoView = () => {
		setPopPhotoView(false)
	}

	const popCloseMenu = () => {
		setPopMenu(false)
		setHeader({ menupop: false })
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

	return (
		<>
			<Contents>
				<div className='report-detail-wrap'>
					<div className='report-detail-section'>
						<div className='beta-banner'>
							<div className='tit'>
								<b>이노뎁 우리 AI 알림장</b>
								<i className='ico-beta'></i>
							</div>
							<div className='txt'>아이의 미래를 키웁니다.</div>
						</div>
						<div className='report-title'>
							<b>
								{report.dailyNews?.className} {report.dailyNews?.childName}
							</b>
							<div className='txt'>
								<span>{moment(report.dailyNews?.newsDate, 'YYYY-MM-DD').format('YYYY.MM.DD')}</span>
								<span>{WEEKDAYS_KR[moment(report.dailyNews?.newsDate, 'YYYY-MM-DD').day()]}</span>
							</div>
						</div>
						<div className='dashboard-box'>
							<ul>
								<li>
									<em>어린이집 재원일수</em>
									<b>{report.dailyNews?.enterDayCnt}</b>
								</li>
								<li>
									<em>8월 출석일수</em>
									<b>{report.dailyNews?.presenceCnt}</b>
								</li>
							</ul>
						</div>

						{!(report.dailyNews?.activityUseYn === 'N' && report.dailyNews?.sociabilityUseYn === 'N' && report.dailyNews?.relationUseYn === 'N' && report.dailyNews?.noticeUseYn === 'N') && (
							<div className='toggle-view-box on' ref={viewBox}>
								<Button className='box-header' onClick={viewBoxToggle}>
									<b>AI알림장</b>
								</Button>
								<div className='box-body'>
									{!isEmptyString(report.dailyNews?.analysisTime) &&
										<div className='total-text'>
											{report.dailyNews?.analysisTime} 동안의 분석 결과입니다.
											<br />
											알림장에 첨부할 항목을 선택해주세요.
										</div>
									}
									<div className='report-content-wrap'>
										{report.dailyNews?.activityUseYn === 'Y' && (
											<div className='report-box'>
												<div className='box-tit'>
													<Icon type='activity' />
													<span>활동성</span>
												</div>
												<div className='character-wrap'>
													{DrawCharacter(report.dailyNews?.activityDesc)}
													{DrawPointGraph((report.dailyNews.activityPoint - AvgTodayMin) / AvgTodayMax * 100, (report.dailyNews.activityAvg - AvgSevenMin) / AvgSevenMax * 100)}
												</div>
											</div>
										)}
										<div className='report-box'>
											{report.dailyNews?.sociabilityUseYn === 'Y' && (
												<>
													<div className='box-tit'>
														<Icon type='sociability' />
														<span>사회성</span>
													</div>
													<div className='character-wrap'>
														{DrawCharacter(report.dailyNews?.sociabilityDesc)}
														{DrawPointGraph((report.dailyNews.sociabilityPoint - AvgTodayMin) / AvgTodayMax * 100, (report.dailyNews.sociabilityAvg - AvgSevenMin) / AvgSevenMax * 100)}
													</div>
												</>
											)}

											{report.dailyNews?.relationUseYn === 'Y' && (
												<div className='relation-chart'>
													<div className='tooltip' ref={tooltip}>
														<span className='cls'>{onChild.className}</span>
														<div className='name'>{onChild.childName}</div>
													</div>
													<div className='chart' ref={relChart}>
														{report.dailyNews?.outerNodes?.sort((a: any, b: any) => a.nodePosition - b.nodePosition).map((d: any, idx: any) => {
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
															{!isEmptyObject(report.dailyNews?.centerNode) && (
																<div className='thumb'>
																	<Img src={isEmptyString(report.dailyNews?.centerNode?.imagePicUrl) ? '/images/temp/temp-album.jpg' : proxySrcChild(report.dailyNews?.centerNode?.imagePicUrl)} alt='' />
																</div>
															)}
														</div>
													</div>
												</div>
											)}

											{report.dailyNews?.noticeUseYn === 'Y' && (
												<div className='report-notice'>
													<p className='pre-line'>{report.dailyNews?.noticeDesc}</p>
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
								{report.imgfiles?.map((src: any, id: any) => {
									// console.log(src)
									return (
										<li key={id}>
											<Button
												className='img'
												onClick={() => {
													popOpenPhotoView(proxySrcComm(src.fileDownloadId))
												}}
											>
												<Img src={proxySrcComm(src.fileDownloadId)} alt='' />
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
											<span className='status'>{NEWS_TEMPER_OPTIONS.filter(v => String(v.value) === report.dailyNews?.temperature.substr(report.dailyNews?.temperature.length - 1))[0]?.name}</span>
										</div>
									</li>
									<li>
										<b>식사</b>
										<div className='right'>
											<span className='status'>{NEWS_MEAL_OPTIONS.filter(v => String(v.value) === report.dailyNews?.meal.substr(report.dailyNews?.meal.length - 1))[0]?.name}</span>
										</div>
									</li>
									<li>
										<b>수면</b>
										<small>(일정표 낮잠시간 기준)</small>
										<div className='right'>
											<span className='status'>{NEWS_SLEEP_OPTIONS.filter(v => String(v.value) === report.dailyNews?.sleep.substr(report.dailyNews?.sleep.length - 1))[0]?.name}</span>
										</div>
									</li>
									<li>
										<b>배변</b>
										<div className='right'>
											<span className='status'>{NEWS_STOOL_OPTIONS.filter(v => String(v.value) === report.dailyNews?.defecation.substr(report.dailyNews?.defecation.length - 1))[0]?.name}</span>
										</div>
									</li>
								</ul>
							</div>
							<div className='text pre-line'>
								{report.dailyNews?.newsDesc}
							</div>
						</div>
					</div>

					<RepleList data={repleList} onPop={[() => setPopRepleMenu(true), setTargetReply]} />
				</div>
			</Contents>

			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />
			{isRightsAdmin(user.rights) && <PopMenu
				data={[
					{
						name: '수정',
						fnc: () => {
							setReportInfo({ newsId: store.newsId, childIds: [onChild], newsDate: store.newsDate })
							router.push(ROUTE_PATH['07-02'])
						},
					},
					{
						name: '삭제',
						fnc: () => {
							deleteReport()
						},
					},
				]}
				open={popMenu}
				close={popCloseMenu}
			/>}

			{!isEmptyObject(report.dailyNews) &&
				<RepleInput
					className='reple-input-wrap'
					type={'news'}
					id={report.dailyNews?.newsId}
					setList={setRepleList}
					popRepleInput={popRepleInput}
					setPopRepleInput={setPopRepleInput}
					targetReply={targetReply}
					setTargetReply={setTargetReply}
					trigger={trigger}
					setTrigger={setTrigger}
					popRepleMenu={popRepleMenu}
					setPopRepleMenu={setPopRepleMenu}
				/>
			}
			{/* <MenuBar menu='alarm' /> */}
		</>
	)
}

export default _
