import { Button, Input } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './property.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '어린이집 검색',
			back: true,
			close: true,
		})
	}, [])

	const [search, setSearch] = useState('')

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
						placeholder='어린이집 검색'
						del={true}
						onChange={(e: any) => {
							setSearch(e.target.value)
						}}
					/>
				</div>
				<ul className='center-list'>
					<li>
						<Button to='/'>
							<b>샛별어린이집</b>
							<div className='txt'>서울특별시 구로구 구로중앙로32가길 18</div>
						</Button>
					</li>
					<li>
						<Button to='/'>
							<b>희망하나어린이집</b>
							<div className='txt'>경기도 의정부시 가능로152번길 20</div>
						</Button>
					</li>
					<li>
						<Button to='/'>
							<b>햇살어린이집</b>
							<div className='txt'>서울특별시 은평구 은평로 33-9</div>
						</Button>
					</li>
				</ul>

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
