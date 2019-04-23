import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import List from '../StockPage/List/List'
import Chart from '../StockPage/ChartComponent/ChartComponent'
import { stocksSelector } from '../../Redux/selectors/stocksPageSelectors';
import { IStock, IStocksState } from '../../Redux/Reducers/StockPage/interfaces'

interface IStateProps {
	stocks: IStock[]
}

class ListContainer extends React.Component {
    render() {
        return (
            <>
                <List {...this.props} />
                <Chart {...this.props} />
            </>
        );
    }
}

const mapStateToProps = (state: IStocksState):IStateProps => {
    return {
        stocks: stocksSelector(state)
    }
}

export default connect<IStocksState>(mapStateToProps, null)(ListContainer);