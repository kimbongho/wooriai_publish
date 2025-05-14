import { Popup } from '@/entities'

const _ = ({ data, open, close }: any) => {
	return (
		<Popup open={open} close={close}>
			<div className='pop-body'>
				<div className='menu-list'>
					<ul>
						{data.map((d: any, idx: any) => {
							return (
								<li key={`menu` + idx}>
									<button
										onClick={() => {
											d.fnc()
											close()
										}}
									>
										{d.name}
									</button>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</Popup>
	)
}

export default _
