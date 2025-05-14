/** @jsxImportSource react */
import { Button, Icon, Popup, useDialog, useToast } from '@/entities'
import { globalStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import { Footer } from '@/widgets'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './return.style'
import { PopBoard, PopMenu } from '@/features'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()
	const { dialog } = useDialog()
	const searchParams: any = useParams()
	const sendParams = new URLSearchParams()
	const docId = searchParams?.id ? searchParams.id : '0'

	const { user } = userStore()
	const { setHeader, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '귀가동의서',
			back: true,
			trash: user.rights === 'PRENT',
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

	const [returnData, setReturnData] = useState<any>()
	const [popClass, setPopClass] = useState(false)
	const [popMenu, setPopMenu] = useState(false)
	const [popDel, setPopDel] = useState(false)

	useEffect(() => {
		getReturn()
	}, [])

	const getReturn = () => {
		Server.get(`/api/presence/retrundoc/info?docId=${docId}`)
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setReturnData(!resData ? returnData : resData.doc)
					} else {
						toast('귀가동의서 정보를 불러오는 데 실패했습니다.')
					}
				}
			})
			.catch()
	}

	const returnDelete = () => {
		if (docId !== '0') {
			Server.post(`/api/presence/retrundoc/delete/${docId}`)
				.then((response: any) => {
					const { data, status } = response
					if (status === RESPONSE_OK) {
						const { state, code, data: resData, message } = data
						if (state === STATUS_OK) {
							toast('귀가동의서가 삭제되었습니다.')
						} else {
							toast('귀가동의서 정보를 불러오는 데 실패했습니다.')
						}
					}
				})
				.catch()
		}
	}

	const returnWrite = () => {
		router.push(`${ROUTE_PATH['11-02']}`)
	}

	const returnModify = () => {
		sendParams.set('docId', docId)
		router.push(`${ROUTE_PATH['11-02']}?${sendParams.toString()}`)
	}

	return (
		<>
			{returnData ? (
				<>
					<Contents>
						<div className='return-detail-wrap'>
							<div className='format-view-detail'>
								<div className='info-wrap'>
									<ul>
										<li>
											<div className='label'>
												<Icon type='return-time' />
												<span>귀가요청시간</span>
											</div>
											<div className='right'>{returnData.returnTm}</div>
										</li>
										<li>
											<div className='label'>
												<Icon type='return-method' />
												<span>귀가 방법</span>
											</div>
											<div className='right'>{returnData.returnHowNm}</div>
										</li>
										<li>
											<div className='label'>
												<Icon type='return-parent' />
												<span>보호자명</span>
											</div>
											<div className='right'>{returnData.guardianName}</div>
										</li>
										<li>
											<div className='label'>
												<Icon type='return-parent-contact' />
												<span>보호자 연락처</span>
											</div>
											<div className='right'>{returnData.guardianTel}</div>
										</li>
									</ul>
								</div>
								<div className='text-view'>{returnData.returnDesc}</div>
							</div>

							{/* <Button className='btn-type1 st1 full' onClick={() => dialog('귀가동의서를 정말 삭제하시겠어요?', { txt: '게시물삭제', type: 'st1', callback: returnDelete }, null)}>
								게시물삭제
							</Button> */}
						</div>
					</Contents>
					{/* {user.rights === 'PRENT' && (
						<Footer className='full-btn'>
							<div className='btn-wrap'>
								<Button className={'btn-type1 st1'} onClick={returnModify}>
									<span>귀가동의서 수정(임시)</span>
								</Button>
								<Button className={'btn-type1 st1'} onClick={() => setPopClass(true)}>
									<span>귀가동의서 삭제(임시)</span>
								</Button>
							</div>
						</Footer>
					)} */}
				</>
			) : (
				<Contents className='no-data-content'>
					<div className='no-data'>
						<p className='txt'>귀가동의서가 없습니다.</p>
					</div>
					{/* {user.rights === 'PRENT' && (
						<div className='btn-wrap'>
							<Button className='btn-type1 st1' onClick={returnWrite}>
								<span>등록하기</span>
							</Button>
						</div>
					)} */}
				</Contents>
			)}

			{/* <Popup open={popClass} close={() => setPopClass(false)} title='선택한 게시물이 삭제됩니다.'>
				<div className='pop-body'>
					<div className='select-list'>귀가동의서를 정말 삭제하시겠어요?</div>
				</div>
				<div className='pop-footer'>
					<div className='btn-wrap'>
						<Button className='btn-type1 st2' onClick={returnDelete}>
							<span>게시물 삭제</span>
						</Button>
						<Button className='btn-type1 st1' onClick={() => setPopClass(false)}>
							<span>취소</span>
						</Button>
					</div>
				</div>
			</Popup> */}

			<PopMenu
				data={[
					{
						name: '수정',
						fnc: () => { } //goWritePage(),
					},
					{
						name: '삭제',
						fnc: () => setPopDel(true),
					},
				]}
				open={popMenu}
				close={() => {
					setPopClass(false)
					setHeader({ menupop: false })
				}}
			/>
			<PopBoard type='delete' title='선택한 게시물이 삭제됩니다.' data={{ name: '귀가동의서', edit: () => returnDelete() }} open={popDel} close={() => setPopDel(false)} />
		</>
	)
}

export default _
