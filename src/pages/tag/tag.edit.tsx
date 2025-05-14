/** @jsxImportSource react */
import { Button, Input, UploadFile, useToast } from '@/entities'
import { PopSelectList } from '@/features'
import { FILE_MAX_SIZE, globalStore, isEmpty, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, tagStore, useCommCode } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './tag.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { setTagInfo, setTagList } = tagStore()
	const { setHeader, clearBackLogic } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '전자출결',
			back: true,
		})
	}, [])

	const [selectedFilter, setSelectedFilter] = useState<any>({ name: '계약업체 선택', idx: '' })
	const [popFilter, setPopFilter] = useState<boolean>(false)
	const [file, setFile] = useState<File | null>()
	const [data, setData] = useState<any>({
		addedTagCnt: '',
		connectInfo: {
			apiKey: '',
			contractCp: '',
			contractCpName: '',
			daycareId: '',
		},
		tagList: [],
	})
	const contractCompanyOption = useCommCode('CCP00')

	useEffect(() => {
		Server.get(`/api/daycare/connect/info`)
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setData(resData)
						if (!isEmpty(resData) && resData?.connectInfo) {
							setSelectedFilter({ name: resData.connectInfo?.contractCpName, idx: resData.connectInfo?.contractCp })
						}
					} else {
						toast('전자 출결 정보를 불러오는 데 실패했습니다.')
					}
				}
			})
			.catch()
	}, [])

	useEffect(() => {
		return () => clearBackLogic()
	}, [])

	const nextBtnClick = () => {
		if (isEmpty(file)) {
			return toast('파일을 등록해주세요')
		}

		const tagInfoForm = {
			apiKey: data?.connectInfo?.apiKey,
			contractCp: selectedFilter.idx,
		}

		const formData = new FormData()
		formData.append(
			'connectInfo',
			new Blob([JSON.stringify(tagInfoForm)], {
				type: 'application/json',
			})
		)
		formData.append('excel', file as File)

		Server.post(`/api/daycare/connect/info/upsert`, formData)
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setTagInfo(tagInfoForm)
						setTagList(resData)
						router.push(ROUTE_PATH['23-03'])
					} else {
						toast(message)
					}
				}
			})
			.catch()
	}

	const popOpenFilter = () => {
		setPopFilter(true)
	}
	const popCloseFilter = () => {
		setPopFilter(false)
	}

	return (
		<>
			<Contents>
				<div className='electronic-attendance-modify-wrap'>
					<div className='page-top-area'>
						<div className='visual'>
							<div className='visual-electronic-attendance'></div>
							<div className='txt-sub'>
								전자출결정보 수정 시 <em>보육통합시스템</em>과
								<br />
								<em>정보가 동일한지</em> 확인해주세요.
							</div>
						</div>
					</div>
					<div className='electronic-attendance-modify-section'>
						<div className='attendance-info'>
							<b className='tit'>전자출결정보</b>
							<Input
								className='code'
								value={data?.connectInfo?.apiKey || ''}
								type={'number'}
								maxLength={100}
								onChange={(e: any) => {
									setData((prev: any) => {
										return { ...prev, connectInfo: { ...prev.connectInfo, apiKey: e.target.value } }
									})
								}}
							/>
						</div>

						<div className='tag-info-regist'>
							<Button className='btn-select' onClick={popOpenFilter}>
								<span className={selectedFilter.name === '계약업체 선택' ? 'placeholder' : ''}>{selectedFilter.name}</span>
							</Button>
							<UploadFile file={file} max={FILE_MAX_SIZE} onChange={setFile} placeholder={'태그 정보 파일 등록'} />
						</div>
						<div className='btn-wrap'>
							<Button className='btn-type1 st1' onClick={nextBtnClick}>
								<span>다음</span>
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectList title='계약업체' value={selectedFilter} data={contractCompanyOption} open={popFilter} close={popCloseFilter} onChange={setSelectedFilter} />
		</>
	)
}

export default _
