import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Button from './Button/Button';
import s from './chartComponent.module.scss'

interface IOwnProps {
	id: string;
	name: string;
	count: number;
	price: number;
	growth: string;
	isAdded: boolean;
	data: number[];
	moveStock: any;
}

interface IProps extends IOwnProps { }

const Chart = (props: IProps) => {
	
	let dataCopy
	if (props.data) dataCopy = [...props.data];
	const options = {
		title: {
			text: props.name
		},
		series: [{
			data: dataCopy
		}]
	}

	return (
		<div>
			{
				props.data ? <div className={s.wrapper}>
					<div>
						<HighchartsReact
							highcharts={Highcharts}
							options={options as any}
						/>
					</div>
					<div className={s.button}>
						<Button
							isAdded={props.isAdded}
							data={props.data}
							moveStock={props.moveStock}
						/>
					</div>
				</div> : <span>Please, select stock</span>
			}
		</div>
	);
}

export default Chart;