import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Chart = () => {

  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3, 2, 6, 4, 7, 4, 8]
    }]
  }

  return (
    <>
      <div>
        <div>price</div>
        <div>growth</div>
        <div>Name</div>
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
      </div>
    </>
  );
}

export default Chart;