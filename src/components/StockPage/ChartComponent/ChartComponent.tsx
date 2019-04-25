import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface IOwnProps {
	id: string
	name: string
	count: number
	price: number
	growth: string
	isAdded: boolean
	data: number[]
}

interface IProps extends IOwnProps {}

const Chart = (props: IProps) => {
	const options = {
		title: {
			text: props.name
		},
		series: [{
			data: props.data
		}]
	}
	
debugger
	return (
		<>
			{
				props.data ? <div>
					<div>price</div>
					<div>growth</div>
					<div>Name</div>
					<div>
						<HighchartsReact
							highcharts={Highcharts}
							options={options as any}
						/>
					</div>
				</div> : <span>Select stock</span>
			}
		</>
	);
}

export default Chart;