import {Img } from '@/entities'
import { Chart } from './chart.style'

const _ = ({value}: any) => {

	let lv = Math.trunc(value);
	lv = Math.floor(lv / 5) * 5;
		
	return <>
	<Chart className="chart">
		<div className="chart-draw">
			<div className="bg"><Img src={'/images/bg-standard-deviation-chart.png'} alt='' /> </div>
			<div className={'index lv' + lv}><i></i><span className="label">{ value > 50 ? 100 - value : value }</span></div>
			<div className="base"></div>
		</div>		
		<div className='x-axis'>50</div>
		<div className='chart-legend'>
			<span className='item'><i className='child-avg'></i><span>원아 평균</span></span>
			<span className='item'><i className='class-avg'></i><span>반 평균</span></span>
			<span className='item'><i className='danger'></i><span>위험 범위</span></span>
		</div>
	</Chart>
	</>
}

export default _
