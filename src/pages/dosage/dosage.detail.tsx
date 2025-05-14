/** @jsxImportSource react */
import { Icon, Img, useToast } from '@/entities'
import { PopBoard, PopMenu, PopPhotoView, PopTimePicker } from '@/features'
import { convertHourMinute, dosageStore, globalStore, isEmpty, isEmptyObject, isRightsAdmin, isRightsParents, proxySrcComm, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore, zeroFill } from '@/shared'
import { useRouter } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'
import Contents from './dosage.style'

const orderArr: Array<string> = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth']

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { dosage, clearDosageStore } = dosageStore()
	const { setHeader, header, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '투약의뢰서',
			back: true,
			dotmenu: isRightsParents(user.rights),
		})
		setFooter({
			fixed: false,
			reple: false,
			class: '',
		})
		setMenubar({
			fixed: false,
		})

		if (header.menupop) setPopMenu(true)
	}, [header.menupop])

	const [dosageFiles, setDosageFiles] = useState<Array<any>>()
	const [dosageHist, setDosageHist] = useState<any>()
	const [dosageRemedy, setDosageRemedy] = useState<any>()
	const [dosageTimeTarget, setDosageTimeTarget] = useState<string>(`dosesTm${orderArr[0]}`)
	const [popPicker, setPopPicker] = useState<boolean>(false)
	const [isExist, setIsExist] = useState<boolean>(false)
	const [popMenu, setPopMenu] = useState<boolean>(false)
	const [popDel, setPopDel] = useState<boolean>(false)
	const [popPhotoView, setPopPhotoView] = useState(false)
	const [photo, setPhoto] = useState('')

	useEffect(() => {
		if (!!dosage && !isEmpty(dosage.remedyId)) {
			Server.get(`/api/presence/remedy/info?yyyymmdd=${dosage.regiDate}&remedyId=${dosage.remedyId}`)
				.then((response: any) => {
					const { data, status } = response
					if (status === RESPONSE_OK) {
						const { state, code, data: resData, message } = data
						if (state === STATUS_OK) {
							// console.log(resData)
							if (!isEmptyObject(resData)) {
								setDosageFiles(resData.files)
								setDosageHist(resData.hist)
								setDosageRemedy(resData.remedy)
								setIsExist(!!resData.remedy)
							} else {
								setIsExist(false)
							}
						} else {
							toast('투약의뢰서 정보를 불러오는 데 실패했습니다.')
						}
					}
				})
				.catch()
		}
	}, [])

	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '투약의뢰서',
			back: true,
			dotmenu: isRightsParents(user.rights) && isExist,
		})
	}, [isExist])

	const changeTimePicker = (value: any) => {
		Server.post(`/api/presence/remedy/hist/upsert`, {
			remedyId: dosage.remedyId,
			dosesDate: dosage.regiDate,
			[dosageTimeTarget]: convertHourMinute(value[1], value[2]),
		})
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						// console.log(resData)
						setDosageHist((prev: any) => ({ ...prev, [dosageTimeTarget]: convertHourMinute(value[1], value[2]) }))
					} else {
						toast('투약의뢰서 정보를 불러오는 데 실패했습니다.')
					}
				}
			})
			.catch()
	}

	const deleteRemedy = () => {
		Server.post(`/api/presence/remedy/delete/${dosage.remedyId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, message } = data
				if (state === STATUS_OK) {
					clearDosageStore()
					router.push(ROUTE_PATH['05-01'])
				} else {
					toast(message)
				}
			}
		})
	}

	const goWritePage = () => {
		router.push(`${ROUTE_PATH['10-02']}`)
	}

	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}

	const popClosePhotoView = () => {
		setPopPhotoView(false)
	}

	return (
		<>
			<Contents className={!isExist ? 'no-data-content' : ''}>
				{isExist ? (
					<div className='dosage-detail-wrap'>
						<div className='format-view-detail'>
							<div className='img-wrap'>
								{dosageFiles?.map((d: any, key: any) => {
									// return <Img src={proxySrcComm(d?.fileDownloadId)} alt='' key={key} />
									return (<div
										key={d.fileId}
										className='img'
										onClick={() => {
											popOpenPhotoView(proxySrcComm(d?.fileDownloadId))
										}}
									>
										<Img src={proxySrcComm(d?.fileDownloadId)} alt={``} />
									</div>)

								})}
							</div>
							<div className='info-wrap'>
								<ul>
									<li>
										<div className='label'>
											<Icon type='dosage-period' />
											<span>투약기간</span>
										</div>
										<div className='right'>
											{dosageRemedy?.remedyFromDate} ~ {dosageRemedy?.remedyToDate}
										</div>
									</li>
									<li>
										<div className='label'>
											<Icon type='dosage-number' />
											<span>투약횟수</span>
										</div>
										<div className='right'>{Object.keys(!isEmptyObject(dosageRemedy) ? dosageRemedy : {}).filter(dr => dr.indexOf('reqTm') > -1).length}회 투약</div>
									</li>
								</ul>
							</div>
							<div className='text-view'>{dosageRemedy?.remedyDesc}</div>
						</div>

						<div className='list-box-wrap'>
							{orderArr.map((v: string, i: number) => {
								if (isEmpty(dosageRemedy?.[`${v.toLowerCase()}Nm`])) {
									return
								}

								const dosageKey = dosageRemedy?.[`reqTm${v}`].split('_')[0]
								return (
									<Fragment key={i}>
										<div className='box-tit'>
											<b className='tit'>투약시간 {i + 1}</b>
										</div>
										<div className='list-box'>
											<ul>
												<li>
													투약 요청 시간<div className='right'>{dosageKey !== 'DOS04' ? dosageRemedy[`${v.toLowerCase()}Nm`] : dosageRemedy[`${v.toLowerCase()}Tm`]}</div>
												</li>
												{isRightsAdmin(user?.rights) && <li>
													투약 시간
													<div className='right'>
														<button
															className='btn-time'
															onClick={() => {
																setPopPicker(true)
																setDosageTimeTarget(`dosesTm${v}`)
															}}
														>
															{!!dosageHist && dosageHist[`dosesTm${v}`] ? (
																<span className='time'>
																	{zeroFill(dosageHist[`dosesTm${v}`].split(':')[0], 2)} : {zeroFill(dosageHist[`dosesTm${v}`].split(':')[1], 2)}
																</span>
															) : (
																'시간 등록'
															)}
														</button>
													</div>
												</li>}


											</ul>
										</div>
									</Fragment>
								)
							})}
						</div>
					</div>
				) : (
					<div className='no-data'>
						<p className='txt'>투약의뢰서가 없습니다.</p>
					</div>
				)}
			</Contents>

			<PopTimePicker
				open={popPicker}
				close={() => setPopPicker(false)}
				value={dosageHist?.[dosageTimeTarget] ? dosageHist[dosageTimeTarget] : ''}
				onChange={(e: any) => {
					changeTimePicker(e)
				}}
			/>
			<PopMenu
				data={[
					{
						name: '수정',
						fnc: () => goWritePage(),
					},
					{
						name: '삭제',
						fnc: () => setPopDel(true),
					},
				]}
				open={popMenu}
				close={() => {
					setPopMenu(false)
					setHeader({ menupop: false })
				}}
			/>
			<PopBoard type='delete' title='선택한 게시물이 삭제됩니다.' data={{ name: '투약의뢰서', edit: () => deleteRemedy() }} open={popDel} close={() => setPopDel(false)} />
			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />
		</>
	)
}

export default _
