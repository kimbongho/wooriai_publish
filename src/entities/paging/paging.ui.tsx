import { Paging } from './paging.style'

const _ = (props: any) => {
	return (
		<Paging>
			<div className='paging'>
				<button className='btn-first' disabled></button>
				<button className='btn-prev' disabled></button>
				<span className='page'>
					<button>
						<span>1</span>
					</button>
					<button className='on'>
						<span>2</span>
					</button>
					<button>
						<span>3</span>
					</button>
					<button>
						<span>4</span>
					</button>
					<button>
						<span>5</span>
					</button>
				</span>
				<button className='btn-next'></button>
				<button className='btn-last'></button>
			</div>
		</Paging>
	)
}

export default _
