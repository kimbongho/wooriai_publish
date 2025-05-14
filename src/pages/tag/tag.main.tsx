/** @jsxImportSource react */
import { Button, useToast } from '@/entities'
import { globalStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, useNotRights } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Contents from './tag.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { setHeader, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '전자출결',
			back: true,
			menu: true,
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

	const [data, setData] = useState<any>({})

	useNotRights()
	useEffect(() => {
		Server.get(`/api/daycare/connect/info`)
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setData(resData)
					} else {
						toast('전자 출결 정보를 불러오는 데 실패했습니다.')
					}
				}
			})
			.catch()
	}, [])

	return (
		<>
			<Contents>
				<div className='electronic-attendance-wrap'>
					<div className='page-top-area'>
						<div className='attendance-info'>
							<b className='tit'>전자출결정보</b>
							<div className='code'>{data?.connectInfo?.apiKey}</div>
						</div>
					</div>
					<div className='electronic-attendance-list-section'>
						<ul className='info'>
							<li>
								<span className='label'>계약 업체</span>
								<em>{data?.connectInfo?.contractCpName}</em>
							</li>
							<li>
								<span className='label'>등록태그</span>
								<em>{data?.addedTagCnt}</em>
							</li>
						</ul>
						<div className='child-info-list'>
							<ul>
								{data?.tagList?.map((tag: any, key: any) => {
									return (
										<li key={uuidv4()}>
											<div className='box'>
												<div className='desc'>
													<div className='info'>
														<span>{tag?.className}</span>
														<b>{tag?.childName}</b>
													</div>
													<div className='code'>{tag?.tagId}</div>
												</div>
											</div>
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
			</Contents>
			<Footer className='full-btn'>
				<Button className='btn-type1 st1' onClick={() => router.push(ROUTE_PATH['23-02'])}>
					<span>전자출결 정보 관리 / 확인</span>
				</Button>
			</Footer>
		</>
	)
}

export default _
