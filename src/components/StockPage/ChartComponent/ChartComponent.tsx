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
  sendStocks: ( payload: { id: string, bool: boolean } ) => void;
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
    <>
      {
        props.data ? <div className={s.wrapper}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options as any}
            className={s.chart}
          />
          <div className={s.button}>
            <Button
              isAdded={props.isAdded}
              data={props.data}
              sendStocks={props.sendStocks}
            />
          </div>
        </div> : <span>Please, select stock</span>
      }
    </>
  );
}

export default Chart;