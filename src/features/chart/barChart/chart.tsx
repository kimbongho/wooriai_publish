import * as echarts from 'echarts/core';
import ECharts, { EChartsReactProps } from 'echarts-for-react';

const _ = ({ option }: any) => {

	const createSeriesItem = ({ c, d }:any) => ({
		type: 'bar',
		stack: 'total',
		data: d,
		barWidth: '25%',
		itemStyle: {
			color: c
		}
	});

	const convertedSeries = [];
	for (let i = 0; i < option.series.length; i++) {
		console.log();
		const rawColor = option.series[i].color;
		const rawData = option.series[i].data;
		convertedSeries.push(createSeriesItem({c: rawColor, d: rawData }));
	}
	
	
	let options = {
		tooltip: {
			show: false
		},
		xAxis: {
			type: 'category',
			data: option.label,
			axisTick: {
				show: false
			},		
			axisLine: {
				lineStyle: {
					color: '#BDC0D2'
				}
			},
			axisLabel: {
				margin: 12,
				color: '#60637B',
				fontSize: 13.5,
				fontFamily:'Montserrat, Pretendard, Sans-serif'
			}
		},
		yAxis: {
			type: 'value',
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed',
					color: '#ECEEF5'
				}
			},
			axisLabel: {
				show: false
			}
		},
		series: convertedSeries
	}
	
	return (
		<>
			<div className='echart bar-chart'>
				<ECharts
					option={options}
				/>
			</div>
			<div className="chart-legend">
				{option.series.map((opt: any, idx: number) => (
					<span className="item" key={idx}>
						<i className="rect"
							style={{
								background: opt.color || '#ccc',
							}}
						></i>
						<span>{ opt.name }</span>
					</span>
				))}
			</div>
		</>
	)
}

export default _
