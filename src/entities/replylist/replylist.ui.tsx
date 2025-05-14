import Button from '../button'
import Img from '../img'
import { RepleList } from './replelist.style'

const _ = ({ data, onPop, onClickReply }: any) => {
	return (
		<RepleList className='reple-wrap'>
			<div className='tit'>
				<b>댓글 </b>
				<em>{data.length}</em>
			</div>
			{data.length > 0 ? (
				<ul className='reple-list'>
					{data.map((item: any, idx: any) => (
						<li key={`reple` + idx}>
							<button
								className='reple'
								onClick={() => {
									onClickReply(item.createdId, item.createdName)
								}}
							>
								<Button className='btn-dot-menu2' onClick={onPop && onPop[0]}></Button>
								<div className='desc'>
									<div className='thumb'>
										<Img src={item.src} alt='' />
									</div>
									<div className='info'>
										<b>{item.createdName}</b>
										<span className='date'>
											<span>{item.createdAt.substring(0, 10)}</span>
											<span>{item.createdAt.substring(11)}</span>
										</span>
									</div>
								</div>
								<div className='text'>
									{item.targetUserName ? <em>@{item.targetUserName} </em> : null}
									{item.commentText}
								</div>
							</button>
						</li>
					))}
				</ul>
			) : (
				<div className='no-data type2'>댓글이 없습니다.</div>
			)}
		</RepleList>
	)
}

export default _
