/** @jsxImportSource react */
import { Button, Checkbox, Icon, Img, Radio, RadioGroup, Textarea, UploadPhotos, useToast } from '@/entities'
import { AvgSevenMax, AvgSevenMin, AvgTodayMax, AvgTodayMin, CharacterList, FILE_MAX_SIZE, globalStore, isEmpty, isEmptyArray, isEmptyObject, isEmptyString, NEWS_MEAL_OPTIONS, NEWS_SLEEP_OPTIONS, NEWS_STOOL_OPTIONS, NEWS_TEMPER_OPTIONS, proxySrcChild, reportStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore, useTooltip } from '@/shared'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Contents from './report.style'
import { PopBoard } from '@/features'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { report, setReportInfo } = reportStore()
	const { setHeader, setTrashFunc } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '알림장 작성',
			back: true,
			trash: !isEmptyString(report?.newsId),
		})
	}, [])

	const [child, setChild] = useState<Array<any>>(report.childIds)
	const [checkItems, setCheckItems] = useState<any>(Array(4).fill(true))
	const [photos, setPhotos] = useState<any>([])
	const [photosOrg, setPhotosOrg] = useState<any>([])
	const [checkTemper, setCheckTemper] = useState<any>(NEWS_TEMPER_OPTIONS)
	const [checkMeal, setCheckMeal] = useState<any>(NEWS_MEAL_OPTIONS)
	const [checkSleep, setCheckSleep] = useState<any>(NEWS_SLEEP_OPTIONS)
	const [checkPoop, setCheckPoop] = useState<any>(NEWS_STOOL_OPTIONS)
	const [removePhoto, setRemovePhoto] = useState<Array<string>>([])
	const [dailyNews, setDailyNews] = useState<any>({})
	const [content, setContent] = useState<string>('')
	const [onChild, setOnChild] = useState<any>({ childName: '', className: '' })
	const [childList, setChildList] = useState<any>([])
	const [dailyNewsArr, setDailyNewsArr] = useState<any>([])
	const [popDel, setPopDel] = useState(false)

	const viewBox = useRef<HTMLDivElement>(null)
	const relChart = useRef<HTMLDivElement>(null)

	const { tooltip, openTooltip } = useTooltip()

	useEffect(() => {
		if (isEmptyArray(report.childIds)) return router.back()
		const firstChildId = (report.childIds[0] as any).childId
		changeSelectedChild(firstChildId)

		// console.log(report)
		if (report?.status === 'TEMP') {
			const row: any = report.dailyNews
			setDailyNews(row)
			setPhotosOrg(report.imgfiles)
			setContent(row?.newsDesc)
			setCheckItems([row.activityUseYn === 'Y', row.sociabilityUseYn === 'Y', row.relationUseYn === 'Y', row.noticeUseYn === 'Y'])

			handleCheckByKey(row?.temperature, checkTemper, setCheckTemper)
			handleCheckByKey(row?.meal, checkMeal, setCheckMeal)
			handleCheckByKey(row?.sleep, checkSleep, setCheckSleep)
			handleCheckByKey(row?.defecation, checkPoop, setCheckPoop)

			setDailyNewsArr((prev) => [...prev, { childId: firstChildId, dailyNews: row }])
			setReportInfo({ status: '' })
		} else if (!isEmptyArray(report?.childIds)) {
			report.childIds?.map((v: any) => getChildNews(v.childId))
		}



		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.get(`/api/daycare/child/info/${user.daycareId}/list`).then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, data: resData, message } = data
					if (state === STATUS_OK) {
						if (resData.length > 0) {
							setChildList(resData)
						}
					} else {
						toast(message)
					}
				}
			})
		}
	}, [])

	useEffect(() => {
		if (isEmptyString(report?.newsId)) return

		setTrashFunc(async () => setPopDel(true))
	}, [])

	const getChildNews = (childId: string) => {
		Server.post(`/api/dailynews/info/${childId}/${report.newsDate}`, {}).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					// console.log(resData, dailyNewsArr)
					const newsArr = dailyNewsArr.find(v => v.childId === childId)
					// console.log(newsArr)
					if (isEmptyArray(newsArr)) {
						setDailyNewsArr((prev) => [...prev, { childId: childId, dailyNews: resData }])
					}
					if (isEmptyObject(dailyNews)) {
						if (isEmptyString(report?.newsId)) {
							setDailyNews(resData)
						} else {
							const row = resData.dailyNews
							setDailyNews(row)
							// setPhotos(resData.imgfiles)
							setPhotosOrg(resData.imgfiles)
							setContent(row?.newsDesc)
							setCheckItems([row.activityUseYn === 'Y', row.sociabilityUseYn === 'Y', row.relationUseYn === 'Y', row.noticeUseYn === 'Y'])

							handleCheckByKey(row.temperature, checkTemper, setCheckTemper)
							handleCheckByKey(row.meal, checkMeal, setCheckMeal)
							handleCheckByKey(row.sleep, checkSleep, setCheckSleep)
							handleCheckByKey(row.defecation, checkPoop, setCheckPoop)
						}
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

	const handleSingleCheck = (idx: any) => {
		const newItems = checkItems.map((value: any, i: any) => {
			if (i === idx) {
				return !value
			} else {
				return value
			}
		})
		setCheckItems(newItems)
	}

	const handleAllCheck = () => {
		if (checkItems.includes(false)) {
			setCheckItems(Array(4).fill(true))
		} else {
			setCheckItems(Array(4).fill(false))
		}
	}

	const handleCheck = (value: any, data: any, fnc: any) => {
		const newItems = data.map((item: any, i: any) => {
			if (Number(item.value) === Number(value)) {
				return { ...item, checked: true }
			} else {
				return { ...item, checked: false }
			}
		})
		fnc(newItems)
	}

	const handleCheckByKey = (key: any, data: any, fnc: any) => {
		const newItems = data.map((item: any, i: any) => {
			if (item.key === key) {
				return { ...item, checked: true }
			} else {
				return { ...item, checked: false }
			}
		})
		fnc(newItems)
	}

	const viewBoxToggle = () => {
		if (viewBox.current) viewBox.current.classList.toggle('on')
	}

	const onSubmit = () => {
		if (child.length < 1) return

		let formArr: any = []

		child.map(async (v: any) => {
			const formData = new FormData()
			const reqBody = {
				newsId: report.newsId,
				newsDate: report.newsDate,
				activityUseYn: checkItems[0] ? 'Y' : 'N',
				activityDesc: dailyNews.activityDesc,
				activityPoint: dailyNews.activityPoint,
				activityAvg: dailyNews.activityAvg,
				sociabilityUseYn: checkItems[1] ? 'Y' : 'N',
				sociabilityDesc: dailyNews.sociabilityDesc,
				sociabilityPoint: dailyNews.sociabilityPoint,
				sociabilityAvg: dailyNews.sociabilityAvg,
				relationUseYn: checkItems[2] ? 'Y' : 'N',
				outerNodes: dailyNews.outerNodes,
				centerNode: dailyNews.centerNode,
				noticeUseYn: checkItems[3] ? 'Y' : 'N',
				noticeDesc: dailyNews.noticeDesc,
				analysisTime: dailyNews.analysisTime,
				temperature: checkTemper.find((item: any) => item.checked).key,
				meal: checkMeal.find((item: any) => item.checked).key,
				sleep: checkSleep.find((item: any) => item.checked).key,
				defecation: checkPoop.find((item: any) => item.checked).key,
				newsDesc: content,
				childId: v.childId,
				classId: (childList.filter(z => z.childId === v.childId))[0].classId,
				teacherId: (childList.filter(z => z.childId === v.childId))[0].teacherId,
				daycareId: user.daycareId,
				removeFiles: removePhoto,
				newsAddYn: 'N',
				tempSaveYn: 'Y',
				addYn: "N",
			}
			formArr.push(reqBody)

			// console.log(checkTemper, reqBody)
			formData.append('dailynews', JSON.stringify(reqBody))

			if (photos.length > 0) {
				photos.forEach((photo: any) => {
					formData.append('imgFiles', photo)
				})
			}

			await Server.post(`/api/dailynews/upsert`, formData)

		})
		setReportInfo({ preview: dailyNewsArr, previewPhoto: photos, previewContent: content, previewForm: formArr })
		router.push(ROUTE_PATH['07-03'])
	}

	const deleteReport = () => {
		Server.post(`/api/dailynews/delete/${report.childId}/${report.newsId}`, {}).then(response => {
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
				<div className='report-write-wrap'>
					<div className='page-top-area'>
						<div className='select-item-list-wrap'>
							<div className='tit'>
								<span className='label'>
									선택 아동: <em>{child?.length}명</em>
								</span>
							</div>
							<div className='select-item-list'>
								<Swiper spaceBetween={0} slidesPerView={'auto'}>
									{child?.map((item: any, idx: any) => {
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
															const row = dailyNewsArr.find(v => v.childId === item.childId)
															if (isEmptyString(report?.newsId)) {
																setDailyNews(row?.dailyNews)
															} else {
																setDailyNews(row?.dailyNews.dailyNews)
																// setPhotos(row?.dailyNews.imgfiles)
																setPhotosOrg(row?.dailyNews.imgfiles)
																setContent(row?.newsDesc)
																setCheckItems([row.activityUseYn === 'Y', row.sociabilityUseYn === 'Y', row.relationUseYn === 'Y', row.noticeUseYn === 'Y'])

																handleCheckByKey(row?.dailyNews.dailyNews.temperature, checkTemper, setCheckTemper)
																handleCheckByKey(row?.dailyNews.dailyNews.meal, checkMeal, setCheckMeal)
																handleCheckByKey(row?.dailyNews.dailyNews.sleep, checkSleep, setCheckSleep)
																handleCheckByKey(row?.dailyNews.dailyNews.defecation, checkPoop, setCheckPoop)
															}
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
					<div className='report-write-section'>
						<div className='toggle-view-box on' ref={viewBox}>
							<Button className='box-header' onClick={viewBoxToggle}>
								<b>AI알림장</b>
							</Button>
							<div className='box-body'>
								{!isEmptyString(dailyNews?.analysisTime) &&
									<div className='total-text'>
										{dailyNews?.analysisTime} 동안의 분석 결과입니다.
										<br />
										알림장에 첨부할 항목을 선택해주세요.
									</div>
								}
								<div className='report-content-wrap'>
									<div className='report-box total'>
										<div className='check-box'>
											<Checkbox name='check-all' onChange={handleAllCheck} checked={!checkItems.includes(false)}>
												전체
											</Checkbox>
										</div>
									</div>

									<div className='report-box'>
										<div className='check-box'>
											<Checkbox name='report' onChange={() => handleSingleCheck(0)} checked={checkItems[0]}>
												활동성 종합
											</Checkbox>
										</div>
										<div className='character-wrap'>
											{DrawCharacter(dailyNews?.activityDesc)}
											{DrawPointGraph((dailyNews?.activityPoint - AvgTodayMin) / AvgTodayMax * 100, (dailyNews?.activityAvg - AvgSevenMin) / AvgSevenMax * 100)}
										</div>
									</div>
									<div className='report-box'>
										<div className='check-box'>
											<Checkbox name='report' onChange={() => handleSingleCheck(1)} checked={checkItems[1]}>
												사회성 종합
											</Checkbox>
										</div>
										<div className='character-wrap'>
											{DrawCharacter(dailyNews?.sociabilityDesc)}
											{DrawPointGraph((dailyNews?.sociabilityPoint - AvgTodayMin) / AvgTodayMax * 100, (dailyNews?.sociabilityAvg - AvgSevenMin) / AvgSevenMax * 100)}
										</div>
									</div>
									<div className='report-box'>
										<div className='check-box'>
											<Checkbox name='report' onChange={() => handleSingleCheck(2)} checked={checkItems[2]}>
												교우관계
											</Checkbox>
										</div>

										<div className='relation-chart'>
											<div className='tooltip' ref={tooltip}>
												<span className='cls'>{onChild.className}</span>
												<div className='name'>{onChild.childName}</div>
											</div>
											<div className='chart' ref={relChart}>
												{dailyNews?.outerNodes?.sort((a: any, b: any) => a.nodePosition - b.nodePosition).map((d: any, idx: any) => {
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
													{!isEmptyObject(dailyNews?.centerNode) && (
														<div className='thumb'>
															<Img src={isEmptyString(dailyNews?.centerNode?.imagePicUrl) ? '/images/temp/temp-album.jpg' : proxySrcChild(dailyNews?.centerNode?.imagePicUrl)} alt='' />
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
									<div className='report-box'>
										<div className='check-box'>
											<Checkbox name='report' onChange={() => handleSingleCheck(3)} checked={checkItems[3]}>
												notice
											</Checkbox>
										</div>

										<div className='report-notice'>
											<p className='pre-line'>{dailyNews?.noticeDesc}</p>
											<p className='pre-line'>
												<em>우리 아이를 위해 가정과 선생님 그리고 우리AI가 함께 합니다. </em>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<p className='txt-noti'>※ 아래에 작성하는 알림장의 내용은 선택한 아동 전체의 알림장에 동일하게 적용됩니다.</p>

						<UploadPhotos title='사진첨부' photos={photos} photosOrg={photosOrg} max={FILE_MAX_SIZE} total={10} onChange={setPhotos} setRemoveFiles={setRemovePhoto} />

						<div className='check-status-list'>
							<div className='row'>
								<div className='title'>
									<b className='tit'>체온</b>
								</div>
								<RadioGroup label='temper' value={checkTemper.find(v => v.checked).value} onChange={(value: any) => handleCheck(value, checkTemper, setCheckTemper)}>
									<ul className='check-item item3'>
										{checkTemper?.map((data: any, key: any) => (
											<li key={key}>
												<Radio name='temper' value={data.value} >
													{data.name}
												</Radio>
											</li>
										)
										)}
									</ul>
								</RadioGroup>
							</div>
							<div className='row'>
								<div className='title'>
									<b className='tit'>식사</b>
								</div>
								<RadioGroup label='meal' value={checkMeal.find(v => v.checked).value} onChange={(value: any) => handleCheck(value, checkMeal, setCheckMeal)}>
									<ul className='check-item item2'>
										{checkMeal?.map((data: any, key: any) => (
											<li key={key}>
												<Radio name='meal' value={data.value}>
													{data.name}
												</Radio>
											</li>
										))}
									</ul>
								</RadioGroup>
							</div>
							<div className='row'>
								<div className='title'>
									<b className='tit'>수면</b>
									<span className='txt'>일정표의 낮잠 시간을 기준으로 표기합니다.</span>
								</div>
								<RadioGroup label='sleep' value={checkSleep.find(v => v.checked).value} onChange={(value: any) => handleCheck(value, checkSleep, setCheckSleep)}>
									<ul className='check-item item2'>
										{checkSleep?.map((data: any, key: any) => (
											<li key={key}>
												<Radio name='sleep' value={data.value}>
													{data.name}
												</Radio>
											</li>
										))}
									</ul>
								</RadioGroup>
							</div>
							<div className='row'>
								<div className='title'>
									<b className='tit'>배변</b>
								</div>
								<RadioGroup label='poop' value={checkPoop.find(v => v.checked).value} onChange={(value: any) => handleCheck(value, checkPoop, setCheckPoop)}>
									<ul className='check-item item3'>
										{checkPoop?.map((data: any, key: any) => (
											<li key={key}>
												<Radio name='poop' value={data.value}>
													{data.name}
												</Radio>
											</li>
										))}
									</ul>
								</RadioGroup>
							</div>
						</div>

						<div className='form-menu'>
							<div className='right'>
								<Button className='btn-import' onClick={() => { }}>
									불러오기
								</Button>
							</div>
						</div>
						<div className='form-wrap'>
							<Textarea placeholder='알림장 내용을 작성해주세요.' value={content} onChange={(e: any) => setContent(e.target.value)} />
						</div>
						<div className='btn-wrap'>
							<Button className='btn-type1 st1' onClick={onSubmit}>
								미리보기
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopBoard type='delete' title='작성중인/선택한 게시물이 삭제됩니다.' data={{ name: '알림장', edit: () => deleteReport() }} open={popDel} close={() => setPopDel(false)} />
		</>
	)
}

export default _
