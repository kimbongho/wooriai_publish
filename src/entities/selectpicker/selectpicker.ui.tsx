import { zeroFill } from '@/shared/utils/ui'
import { useEffect, useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SelectPicker } from './selectpicker.style'

const _ = ({ data, value, onChange }: any) => {
	const [selected, setSelected] = useState<Array<any>>(value ?? [])
	const inits: any = {
		days: data && data.days ? data.days : [],
		hours:
			data && data.hours
				? data.hours
				: Array(24)
					.fill(undefined)
					.map((v, i) => i),
		times:
			data && data.times
				? data.times
				: Array(60)
					.fill(undefined)
					.map((v, i) => i),
	}

	const items = Object.keys(inits).map(item => inits[item])
	const changeValue = (index: any, i: any) => {
		let new_arr = [...selected]
		new_arr[index] = items[index][i]
		setSelected(new_arr)
		onChange(new_arr)
	}

	useEffect(() => {
		if (selected.length <= 0) {
			setSelected([items[0][0], items[1][0], items[2][0]])
		}
	}, [selected, items])

	return (
		<SelectPicker className={items[0].length <= 0 ? 'no-days' : ''}>
			{items.map((item, index) => (
				<Swiper
					key={`swiper` + index}
					initialSlide={items[index].indexOf(selected[index])}
					className={`picker` + index}
					direction={'vertical'}
					slidesPerView={5}
					loop={index > 0}
					loopAdditionalSlides={5}
					slideToClickedSlide={true}
					centeredSlides={true}
					onSlideChange={(swiper: any) => changeValue(index, swiper.realIndex)}
				>
					{items[index].map((d: any) => (
						<SwiperSlide key={d}>{({ isActive }) => <div className={isActive ? 'active' : ''}>{zeroFill(d, 2)}</div>}</SwiperSlide>
					))}
				</Swiper>
			))}
		</SelectPicker>
	)
}

export default _
