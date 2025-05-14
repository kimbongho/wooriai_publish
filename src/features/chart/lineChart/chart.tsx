import * as echarts from 'echarts/core';
import ECharts, { EChartsReactProps } from 'echarts-for-react';

const _ = ({ option }: any) => {

	const createSeriesItem = ({ type, d }:any) => ({
		type: 'line',
		data: d,
		symbol: type == 'type1' ? "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM+SURBVHgBdVRNSFRRFD7nvjczGUhDP4SlpbsWgraMICNqGVq4C0ppUy3SgiBIc2wlIVi0dOFEm1oUI1FQGOiqRUEaZWU/phGk+Jc/qNO793TOve/NjGnDnHfePfd83zv3/FyEDX7NKUrG/T8NgKoGAauUggo2ExgYAqTvRKa341o8vREW15G1rNZ5PvQgYlJ2WTsneSASik0WRGOGIHWzxb/7X8Km1mwXezZZnOIHOayQWmfMg6yNHQ1Re2drrH0d4YWry20KoQ2ELEeC4CKK2MhFHBGjIgT5w63OVPxSjvDclXnOl9fjiJxzIoGwv9KH0hIFJTsV8PFgaobg7bCGL9+0dQwjJwfxTnTd8Hvt+9nL86MKsRzDcJLFCKfqi2BLsSMnJhNCHQAEzDX7m+Dx8ywsLpGLEoWT5tRiUYV3+uL8GQXUQIwSICcFzjdshm1bEXwfrHgei3LRiyTiCHt2efDxs4YgMGiMYHGTiWUnFBldF2gDWhOIruZj7timLCgRB4jHoEAjxFjH+CPJJELlPs/iQqFAY43S2pQ7g7Fy6ECMwcRAssC4JUDW6GwxF7Xsle5SNgiJkLFotK72may6sBh7d3t8RLTHjGySDmPcwhgW3tOcy7LdLkJjq2+3y4WQ5I2nQRIr2pL5nusB8TNhHZV8yIh2ftxm9lQYthRbSHHIY2Lk5NqvjXwNpF8tkwAwBCrMFwXDlpmc0lx5lyruAM6hGVQ60IP5HBIMj2TteOQ6nvIjgDmDk5evV0Bz/oKA8UZLDseV0TCgOUFRlZ/0LcHEtLZ9R4XwsBdJBoP1zJyBV2+Wc8UUfNZARsUSq2lezEats7Cg4XrHNPya1DbxheKqSTA1beBO96xrtSA8XWBGH3VvT9tTHK3/WYtoMrn5lapx0g4fLILjx4qhrNSz1X33IQvvP2Whb2AJllfCLghvHx6Oxsy9knQuVUdOjnexQ3N0IUT3wdqbpmCv4J2nOfX0fkl77nLIk/5o491UtM63A665uiC6FGyx6fazB2XNAAX7a0nHG1i1SZPKeAso0iGELBfCHC8aXzzckynEryNcQ4xYyyWt4GWVkDLRGDfkEH+h3xiT7s9UzP2L+wsLfbZs4TXJJgAAAABJRU5ErkJggg=="
			: type == 'type2' ? "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALzSURBVHgBdVQ9T1RBFD0z+8FiwGyyG0I0JpAYEkzIAjZ2/AALMBQmNi4Wxk74BQu/AO1s1LXVBqwo1agtLJ2FWRZZEygAw0dYdt+MZ+bd93h8TXLfTObde+bcc++MwlWjXs+jp6cMpSagdYk7gzRLq9E2YMwyisXqVaHq0k6zOYVM5j3B8t5BKY8UeiurwhnW2gY/8wT+cD3gzs4inV6GOIoxVsUANCU0BRzeB1hAobBwGbDZrCitKw5EnM8zF6Z+nzD2DNDRfYW+vrkzwK2tMr8uzTj+ptZ43NWF8UwGo+k0Au79CgJ8arWw0m4jIYf1ccY8Qn//coiwuVnnz4GIyS2Cvc3ncTuV8luOWYdcOpxPOf8h8NzhIbaNAYvmpSHLfbRagyk0Gk/pV+YJIV0GLBWLGCSrLMEzYmma5m9nPVw/IPMVsm0bI4mrHMG3NTqdKfBEt2kJOp3L4S7Buhl0g9YtliOQn2ldtDtkP01JHBFHQhnjUp9wBw64Dc+Q9ry31wf4QKbu5pybZe3+ZcXGeXAUSzKKxEbTBBlNVrGUzXrntFSMlYdhkJaCueJ0RNP79LWRVCHGQDpU1GvnQ9KRiWZuGGkVIwcxCCmuUy5VK53pZhZIqyBoQPRz1H+enMTie4uKIY2tpV3c+rdrH+ovBbXMdk0TaM3TdifQfhwfI9mPsBbXjY8HB+4KhhoGgaJtau58JUslwuLN7i42Tk9hJFUjfeh09LM/w+Jvp4PP7EUlmSEktKTRble52LNS5X90fNhooE7QqJnbnIOouV1jM9Vnzab3t2Jc1zE0VA1zW1+fdOiJ6+Q1esLb8qJQwD32ZkCgb0dH+E5J3u3t4UAYRx1Cm8HwcDUWS9dqi0xlNrpq/mWJXhjRNH55LmjJQs2bkZGF2CcetVqFeswngxFeK0QHxQXjhUPYca9RKs3GZHFxrK6WuVmx7ga5ICErwUi8k/v8OYOxsaVk+GXABDC/kwif/5Iwcj1b4/oL96oE278Y9h+FkI6Gr73U4AAAAABJRU5ErkJggg=="
			: type == 'type3' ? "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMlSURBVHgBxVRfS1RREJ85d3V3lXBLpdKiW1D4VBT4IEktQU9RSiL0EKQfILL6ALtG7/kNVHoRhKigx9rd6M9DQUEEQYVa9lCWpIKru/ecaeace3evZdSblx3O3XPn95uZ38w5AFvxlJ9f8MX+xxc326RCf8Y0pq4gQhZRnQRQzo83yFARkSYAdAl7pmb/SVh5fH7EQ5VDhS2WgV2EhyJSy4tEhEtEesw7PjX6V0Jd7Btn3JAjYZbQJXqXFQjlJ7sQRppg0uE/CHXhzC1CHHE+AnUA+yQ4WbPOZJUQUlfAkeKk1zs9XCMMHp4eAlTj8lcyUUoBqRRgey9AWw9vNDKhYb5FwNVZgIUnDFqJ1YnErNe8E3fHkArZjNbqFZe6j0yYWLIN8NBlwMZW1yQJQ4ZJq7yyrX0HmrvNpMtWAlTigD+VXj6gqmu6n8X1yWj+GAA0ZAC7rgM2dQIl0mxNgF6aLcWlpwFkTbUD+hdFC4thLJLW26vQPJQAL7hERolqaMvdcRQw3cEBPd5TYU2SnQYUcCR7sh2gtRvoa9E1y7Upq9jxCEchMoED7TzFWSSdqdAwyfxJqyV6rKdqsIaZY5yhlgxB8Gj04QSYIBN2ysbAbQdZEwZgIjYE3BBSVk2rJbI8yAmkWh2Rmwah8BOG63djptzc6bLTiUsmdEGERFZCJlNSOn8znvWxGhKG846giII5LhVBSpaPKx+ZWDky0dAeFgVuLLE+h5LF8ntwUgWudNKvFehqIdJQzHx5ADWJYw9tcuxp4WmYoWCrzFeZ5VTMpNEBH86qJdTz98EsvmAnI6pYc++iI7mOi63MgPlWsg1xGRo0gb5nw5bv+DNcnk9RZjw2Dd1jgC1dEMot5TCQj55eB/rxEoI3N7nKVahfFjCXOvd2f8Id5GCYFD4StGHxcPUzVEoD4O3tA6/zLAfYLU5glt5ZSczCs7ok0eE3dHXD5VCe3pPnPHL1WyZ2o9Q0xRARuzj43RgcbR74kN9A6Eg7cryTc1pFCIxfAlGJYZ9QzsKN5sFP+ZoL/PaUp3dlSW4eAt91BWM+sf+EJSbOpwfni3H8LxCljQyMGfFOAAAAAElFTkSuQmCC"
			: '',
		symbolSize: 12,
		lineStyle:  type == 'type1' ? {
			color: '#3e5eff',
			width: 2
		} : type == 'type2' ? {
			color: '#00d5ff',
			width: 2
		} : type == 'type3' ? {
			color: '#F6AB1A',
			width: 2
		} : {},		
		areaStyle: type == 'type1' ? {
			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
				{ offset: 0, color: 'rgba(65,105,225,0.3)' },
				{ offset: 1, color: 'rgba(65,105,225,0.0)' }
			])
		} : type == 'type2' ? {
			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
				{ offset: 0, color: 'rgba(0, 221, 221, 0.3)' },
				{ offset: 1, color: 'rgba(0, 221, 221, 0.0)' },
			]),
		} : type == 'type3' ? {
			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
				{ offset: 0, color: 'rgba(246, 171, 26 ,0.3)' },
				{ offset: 1, color: 'rgba(246, 171, 26 ,0.0)' },
			]),
		} : {}
	});

	const convertedSeries = [];
	for (let i = 0; i < option.series.length; i++) {
		const rawType = option.series[i].type;
		const rawData = option.series[i].data;
		convertedSeries.push(createSeriesItem({type: rawType, d: rawData }));
	}

	const typeColorMap: Record<string, string> = {
		type1: 'linear-gradient(180deg, #4252E2 0%, #7E8BFF 100%)',
		type2: 'linear-gradient(180deg, #00DDDD 0%, #77ECF2 100%)',
		type3: 'linear-gradient(19.98deg, #FFCA62 28.33%, #F6AB1A 97.78%)'
	};
	
	let options = {
		tooltip: {
			show: false
		},
		xAxis: {
			type: 'category',
			data: option.label,
			boundaryGap: false,
			axisTick: {
				show: false,	
			},		
			splitLine: {
				show: true, // ← 세로 라인 보이기
				lineStyle: {
					type: 'dashed', 
					color: '#BDC0D2' 
				}
			},			
			axisLine: {
				// show: false, // ← x축 기준선(0점 선) 숨기기
				lineStyle: {
					type: 'dashed',
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
		<div className='echart line-chart'>
			<ECharts
				option={options}
			/>
		</div>
		<div className="chart-legend">
      {option.series.map((opt: any, idx: number) => (
        <span className="item" key={idx}>
          <i
            className="bar"
            style={{
              background: typeColorMap[opt.type] || '#ccc',
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
