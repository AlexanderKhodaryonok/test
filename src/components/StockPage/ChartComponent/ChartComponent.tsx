import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Button from './Button/Button';

interface IOwnProps {
	id: string
	name: string
	count: number
	price: number
	growth: string
	isAdded: boolean
	data: number[]
	moveStock: any
}

interface IProps extends IOwnProps { }

const Chart = (props: IProps) => {
	const options = {
		title: {
			text: props.name
		},
		series: [{
			data: props.data
		}]
	}

	return (
		<>
			{
				props.data ? <div>
					<div>
						<HighchartsReact
							highcharts={Highcharts}
							options={options as any}
						/>
					</div>
					<div>
						<Button
							isAdded={props.isAdded}
							data={props.data}
							moveStock={props.moveStock}
						/>
					</div>
				</div> : <span>Please, select stock</span>
			}
		</>
	);
}

export default Chart;