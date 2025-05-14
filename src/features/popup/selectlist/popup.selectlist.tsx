import { Button, Popup } from '@/entities'
import { useEffect, useState } from 'react'

const _ = ({ data, title, value, open, close, type, onChange }: any) => {
	const init = type === 'multi' ? [...value] : value
	const [selected, setSelected] = useState(init)

	useEffect(() => {
		setSelected(init)
	}, [value])

	const selectClass = (idx: any) => {
		setSelected(data[idx])
	}
	const selectMulti = ({ e, idx }: any) => {
		if (!e.currentTarget.classList.contains('on')) {
			setSelected((prev: any) => [...prev, idx])
			e.currentTarget.classList.add('on')
		} else {
			setSelected(selected.filter((prev: any) => prev !== idx))
			e.currentTarget.classList.remove('on')
		}
	}

	const checkSelected = (idx: any) => {
		return selected.includes(idx) ? 'on' : ''
	}

	const popClose = () => {
		close()
		onChange(selected)
	}

	return (
		<Popup open={open} close={close}>
			<div className='pop-header'>
				<b className='title align-l'>{title}</b>
			</div>
			<div className='pop-body'>
				<div className={`select-list ` + (type === 'multi' ? 'multi-select' : '')}>
					<ul>
						{data.map((d: any, idx: any) => {
							return (
								<li key={`selectClass` + idx}>
									{type === 'multi' ? (
										<button
											disabled={d.disabled}
											onClick={e => {
												selectMulti({ e, idx })
											}}
											className={`link ` + checkSelected(idx)}
										>
											<span className='class'>
												<b>{d.name}</b>
											</span>
										</button>
									) : (
										<button
											onClick={e => {
												selectClass(idx)
											}}
											className={`link ${selected === data[idx] ? 'on' : ''}`}
										>
											<span className='class'>
												<b>{d.name}</b>
											</span>
										</button>
									)}
								</li>
							)
						})}
					</ul>
				</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st4' onClick={popClose}>
						<span>취소</span>
					</Button>
					<Button className='btn-type1 st1' onClick={popClose}>
						<span>확인</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
