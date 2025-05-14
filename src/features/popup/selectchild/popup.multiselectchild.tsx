import { Button, Img, Popup } from '@/entities'
import { isEmptyString } from '@/shared'
import { useRef } from 'react'

const _ = ({ data, title, value, open, close, onChange }: any) => {
	const clsList = useRef<HTMLDivElement>(null)
	const total = useRef<HTMLButtonElement>(null)
	let selected = [...value]
	const selectChild = ({ e, d }: any) => {
		if (!e.currentTarget.classList.contains('on')) {
			selected.push(d)
			e.currentTarget.classList.add('on')
		} else {
			selected.splice(selected.indexOf(d.value), 1)
			e.currentTarget.classList.remove('on')
		}

		if (selected.length === data.length) {
			total.current?.classList.add('on')
		} else {
			total.current?.classList.remove('on')
		}
	}
	const selectTotal = () => {
		if (selected.length !== data.length) {
			selected = [...data]
			clsList.current?.querySelectorAll('li .link').forEach(el => {
				el.classList.add('on')
			})
		} else {
			selected = []
			clsList.current?.querySelectorAll('li .link').forEach(el => {
				el.classList.remove('on')
			})
		}
	}

	const checkSelected = (d: any) => {
		if (selected.filter((i: any) => i.childId === d.childId).length > 0) return 'on'
	}
	const checkTotal = () => {
		if (selected.length === data.length) return 'on'
	}

	const popClose = () => {
		close()
		onChange(selected)
	}

	const Child = ({ item }: any) => {
		return (
			<span className='child'>
				<span className='thumb'>
					<Img src={!isEmptyString(item?.profileImg) ? item.profileImg : '/images/temp/temp-album.jpg'} alt='' />
				</span>
				{item.className ? <span className='class-name'>{item.className}</span> : null}
				<span className='name'>{item.childName}</span>
			</span>
		)
	}

	// console.log(data)
	return (
		<Popup open={open} close={close} className='tit-left'>
			<div className='pop-header'>
				<b className='title align-l'>{title}</b>
			</div>
			<div className='pop-body'>
				<div className='select-list multi-select' ref={clsList}>
					<ul>
						<li className='total'>
							<button ref={total} onClick={selectTotal} className={`link ` + checkTotal()}>
								전체({data.length})
							</button>
						</li>
						{data.map((d: any, idx: any) => {
							return (
								<li key={`selectChild` + idx}>
									<button
										onClick={e => {
											selectChild({ e, d })
										}}
										className={`link ` + checkSelected(d)}
									>
										<Child item={d} />
									</button>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' onClick={popClose}>
						<span>확인</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
