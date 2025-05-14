import { Button, Input, useToast } from '@/entities'
import { globalStore, isEmptyString, RESPONSE_OK, rightsStore, ROUTE_PATH, Server, STATUS_OK } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './property.style'

const excludeName = ['어린이집', '어린이', '어린']

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { setDaycareId } = rightsStore()
	const { setHeader, setMenubar, setFooter } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '어린이집 검색',
			back: true,
			close: true,
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

	const [search, setSearch] = useState<string>('')
	const [result, setResult] = useState<Daycare[]>([])
	const [resultEmptyFlag, setResultEmptyFlag] = useState<boolean>(false)

	const handleSearch = (value?: string) => {
		let searchName: string | undefined = !isEmptyString(value) ? value : search
		excludeName.forEach(v => {
			if (searchName && searchName?.indexOf(v) > -1) {
				searchName = searchName?.replace(v, '')
			}
		})

		if (searchName && searchName.length > 1) {
			Server.get(`/api/comm/find/daycare/list?keyword=${searchName}`).then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setResult(resData)
						setResultEmptyFlag(resData.length === 0)
					}
				}
			})
		} else if (isEmptyString(value)) {
			toast(`"어린이집" 명칭을 제외한 두 글자 이상 입력해주세요.`)
		}
	}

	const handleDetailBtn = (daycareId: string) => {
		setDaycareId(daycareId)
		router.push(ROUTE_PATH['04-03'])
	}

	// console.log(result)
	return (
		<Contents>
			<div className='property-center-wrap'>
				<div className='page-top-area'>
					<div className='visual'>
						<div className='visual-center'></div>
						<div className='txt'>어떤 어린이집 정보를 찾을까요?</div>
					</div>
					<Input
						type='text'
						value={search}
						className='search'
						placeholder='어린이집 명을 입력해주세요'
						del={true}
						onChange={(e: any) => {
							setSearch(e.target.value)
							handleSearch(e.target.value)
						}}
						onKeyDown={(e: any) => {
							if (e.key === 'Enter') {
								handleSearch()
							}
						}}
					/>
				</div>
				<ul className='center-list'>
					{result.map((item, idx) => (
						<li key={idx}>
							<Button onClick={() => handleDetailBtn(item.daycareId)}>
								<b>{item.daycareName}</b>
								<div className='txt'>{item.daycareAddr}</div>
							</Button>
						</li>
					))}
				</ul>

				{resultEmptyFlag && <div>검색결과가 없습니다.</div>}

				<div className='banner-customercenter'>
					<b>검색 결과가 없나요?</b>
					<div className='txt'>고객센터로 연락해주세요.</div>
					<div className='tel'>
						<a href='tel:1661-6806'>1661-6806</a>
					</div>
				</div>
			</div>
		</Contents>
	)
}

export default _
