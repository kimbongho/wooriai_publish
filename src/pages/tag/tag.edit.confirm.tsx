/** @jsxImportSource react */
import { Button, useToast } from '@/entities'
import { PopEditConfirm } from '@/features'
import { globalStore, isEmptyArray, isEmptyString, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, tagStore, userStore } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Contents from './tag.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { tag, tagList } = tagStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '전자출결',
			back: true,
		})
	}, [])

	const [popTag, setPopTag] = useState<boolean>(false)

	useEffect(() => {
		if (isEmptyArray((tagList as any)?.tagList)) {
			toast('엑셀파일을 다시 등록해주세요.')
			router.back()
		}
	}, [])

	const handleConfirmBtn = () => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.post(`/api/daycare/connect/comfirm`).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						router.push(ROUTE_PATH['23-01'])
					} else {
						toast(message)
					}
				}
			})
		}
	}

	const popOpenTag = () => {
		setPopTag(true)
	}

	const popCloseTag = () => {
		setPopTag(false)
	}

	return (
		<>
			<Contents>
				<div className='electronic-attendance-wrap'>
					<div className='page-top-area'>
						<div className='attendance-info'>
							<b className='tit'>전자출결정보</b>
							<div className='code'>{tag?.apiKey}</div>
						</div>
					</div>
					<div className='electronic-attendance-list-section'>
						<ul className='info'>
							<li>
								<span className='label'>계약 업체</span>
								<em>{tag?.contractCp}</em>
							</li>
							<li>
								<span className='label'>등록태그</span>
								<em>{(tagList as any)?.tagList?.length}</em>
							</li>
						</ul>
						<div className='child-info-list'>
							<ul>
								{!isEmptyArray((tagList as any)?.tagList) &&
									(tagList as any).tagList.map((v: any) => (
										<li key={uuidv4()}>
											<div className='box'>
												<div className='desc'>
													<div className='info'>
														<span>{v?.className}</span>
														<b>{v?.childName}</b>
													</div>
													<div className='code'>{v?.tagId}</div>
												</div>
											</div>
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			</Contents>
			<Footer className='full-btn'>
				<Button className='btn-type1 st1' onClick={popOpenTag}>
					<span>확인</span>
				</Button>
			</Footer>

			<PopEditConfirm title='정보 등록' open={popTag} close={popCloseTag} confirm={handleConfirmBtn}></PopEditConfirm>
		</>
	)
}

export default _
