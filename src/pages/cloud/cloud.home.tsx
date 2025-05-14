/** @jsxImportSource react */
import { Button, Checkbox, Icon, Img, Input, useToast } from '@/entities'
import { DateLine, PopAddFolder, PopMenu } from '@/features'
import { downloadDir, globalStore, isEmptyArray, isEmptyString, proxySrcCloud, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, useNotRights, userStore } from '@/shared'
import { cloudStore } from '@/shared/zustand/cloud'
import { Footer } from '@/widgets'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './cloud.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { cloud, setCloudStore } = cloudStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '클라우드',
			back: true,
			menu: true,
		})
	}, [])

	const [search, setSearch] = useState('')
	const [popAddfolder, setPopAddfolder] = useState(false)
	const [popMenu, setPopMenu] = useState(false)
	const [totalChk, setTotalChk] = useState(false)
	const [check, setCheck] = useState(false)
	const [modify, setModify] = useState(false)
	const [folderData, setFolderData] = useState<any>([])
	const [selectCheck, setSelectCheck] = useState<any>([])
	const [selectedItem, setSelectedItem] = useState<any>({})
	const [daycareName, setDaycareName] = useState<string>('')

	useNotRights()
	useEffect(() => {
		getFolderList('')
		getDaycareInfo()
	}, [])

	const getDaycareInfo = () => {
		Server.get(`/api/comm/find/daycare/${user.daycareId}`)
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setDaycareName(resData.daycareName)
					}
				}
			})
			.catch()
	}

	const getFolderList = (searchText: any) => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.get(`/api/photos/cloud/dir/list?name=${searchText}`).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						const folderList = resData
						const resultFolderList = folderList.reduce((prev, next) => {
							const dirDate = next.dirDate
							const dateObj = prev.find(item => item.date === next.dirDate)
							if (dateObj) {
								dateObj.folder.push(next)
							} else {
								prev.push({
									date: dirDate,
									folder: [{ ...next, checked: false }],
								})
							}
							return prev
						}, [])
						setFolderData(resultFolderList)
					} else {
						toast(message)
					}
				}
			})
		}
	}

	const folderAddBtnClick = (folder: any) => {
		Server.post('/api/photos/cloud/dir/create', { dirName: folder })
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setPopAddfolder(false)
						getFolderList('')
					} else {
						toast(message)
					}
				}
			})
			.catch()
	}

	const folderDeleteBtnClick = (div: string) => {
		let checkArr: any = []
		if (div === '전체') {
			checkArr = selectCheck.filter(v => v.checked)
			if (isEmptyArray(checkArr)) return
		} else {
			checkArr.push(selectedItem)
		}
		checkArr.map((v: any) => {
			Server.post(`/api/photos/cloud/dir/delete/${v.dirId}`, {})
				.then((response: any) => {
					const { data, status } = response
					if (status === RESPONSE_OK) {
						const { state, code, data: resData, message } = data
						if (state === STATUS_OK) {
							setSelectCheck([])
							checkEvt([])
							getFolderList('')
						} else {
							toast(message)
						}
					}
				})
				.catch()
		})
	}

	const folderModifyBtnClick = (folder: any) => {
		Server.post(`/api/photos/cloud/dir/update`, { dirId: selectedItem.dirId, dirName: folder })
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setSelectCheck([])
						checkEvt([])
						getFolderList('')
					} else {
						toast(message)
					}
				}
			})
			.catch()
	}

	const searchFolder = (inputText: any) => {
		setSearch(inputText)
		getFolderList(inputText)
	}

	const checkEvt = (dataArray: any) => {
		let checked: any = []
		for (let i = 0; i < dataArray.length; i++) {
			const data = dataArray[i]
			for (let j = 0; j < data.folder.length; j++) {
				const d = data.folder[j]
				checked.push({ dirId: d.dirId, checked: d.checked })
			}
		}
		setSelectCheck(checked)

		if (!isEmptyArray(checked.filter(v => v.checked))) setCheck(true)
		else setCheck(false)

		if (!isEmptyArray(checked.filter(v => !v.checked))) setTotalChk(false)
		else setTotalChk(true)
	}

	const allCheck = () => {
		const newItems = folderData.map((data: any) => {
			const innerItems = data.folder.map((d: any, i: any) => {
				return { ...d, checked: !totalChk }
			})
			return { date: data.date, folder: innerItems }
		})

		setFolderData(newItems)
		checkEvt(newItems)
	}

	const handleCheck = (item: any, f: any) => {
		const newItems = folderData.map((data: any) => {
			if (data === item) {
				const innerItems = data.folder.map((d: any, i: any) => {
					if (d === f) {
						return { ...d, checked: !d.checked }
					} else {
						return d
					}
				})
				return { date: data.date, folder: innerItems }
			} else {
				return data
			}
		})

		setFolderData(newItems)
		checkEvt(newItems)
	}

	const goFolderDetail = (dirId, dirName) => {
		setCloudStore({ dirId, dirName })
		router.replace(ROUTE_PATH['15-02'])
	}

	return (
		<>
			<Contents>
				<div className='cloud-home-wrap'>
					<div className='page-top-area'>
						<h1 className='title'>{daycareName}</h1>
						<Input
							type='text'
							value={search}
							className='search'
							placeholder='폴더 검색'
							del={true}
							onChange={(e: any) => {
								searchFolder(e.target.value)
							}}
						/>
						<div className='btn-wrap'>
							<Button className='btn-type1 st2' onClick={() => setPopAddfolder(true)}>
								<Icon type='plus'></Icon>
								<span>폴더 추가</span>
							</Button>
						</div>
					</div>
					<div className='cloud-view-wrap'>
						<div className='menus'>
							<div className='left'>
								<Button
									className={`btn-selc total ` + (totalChk ? 'on' : '')}
									onClick={() => {
										allCheck()
									}}
								>
									전체선택
								</Button>
							</div>
							<div className='right'>
								<Button className={`btn-selc ` + (check ? 'on' : '')} disabled={!check} onClick={() => folderDeleteBtnClick('전체')}>
									선택폴더 삭제 {check ? `(${selectCheck.filter(v => v.checked).length})` : ''}
								</Button>
							</div>
						</div>
						{folderData.map((item, idx) => {
							return (
								<div key={`folder` + idx} className='cloud-folder'>
									<div className='date-text'>
										<DateLine selectDay={item.date} />
									</div>
									<ul>
										{item.folder.map((f, i) => {
											return (
												<li key={`folder` + idx + i}>
													<div className='menu'>
														<Checkbox checked={f.checked} onChange={() => handleCheck(item, f)} />
														<div className='right'>
															<span className='number'>{f.photoCount}장</span>
															<Button
																className='btn-dot-menu'
																onClick={() => {
																	setSelectedItem(f)
																	setPopMenu(true)
																}}
															></Button>
														</div>
													</div>
													<Button
														className='link'
														onClick={() => {
															goFolderDetail(f.dirId, f.dirName)
														}}
													>
														<div className='thumb'>
															<Img src={f.downloadId && proxySrcCloud(f.downloadId)} />
														</div>
														<div className='desc'>
															<div className='txt'>{f.dirName}</div>
															<div className="info">
																{/* <span className="date-time"><span>{f.date}</span><span>{f.time}</span></span>
															<span className="from">{f.teacher}</span> */}
																<span className="date-time"><span>{moment(f?.updatedAt).format('YYYY-MM-DD')}</span><span>{moment(f?.updatedAt).format('HH:mm:ss')}</span></span>
																<span className="from">{f?.updatedName || '-'}</span>
															</div>
														</div>
													</Button>
												</li>
											)
										})}
									</ul>
								</div>
							)
						})}
					</div>
				</div>
			</Contents>

			{cloud.flag !== 'ALBUM' && (
				<Footer className='full-btn'>
					<Button className='btn-type1 st1' disabled={isEmptyArray(selectCheck)} onClick={() => {
					}}>
						<span>다운로드</span>
					</Button>
				</Footer>
			)}

			<PopMenu
				data={[
					{
						name: '폴더명 변경',
						fnc: () => {
							setModify(true)
							setPopAddfolder(true)
						},
					},
					{
						name: '폴더 삭제',
						fnc: () => {
							folderDeleteBtnClick('')
						},
					},
				]}
				open={popMenu}
				close={() => setPopMenu(false)}
			/>
			<PopAddFolder open={popAddfolder} close={() => setPopAddfolder(false)} modify={modify} addFunc={folderAddBtnClick} modifyFunc={folderModifyBtnClick} />

			<Footer className='full-btn'>
				{
					<Button className='btn-type1 st1' disabled={isEmptyArray(selectCheck.filter((item: any) => item.checked))} onClick={() => {
						const downloadIds = selectCheck.filter((item: any) => item.checked).map((item: any) => item.dirId).join(',');
						downloadDir(downloadIds);
					}}>
						<span>다운로드</span>
					</Button>
				}
			</Footer>
		</>
	)
}

export default _
