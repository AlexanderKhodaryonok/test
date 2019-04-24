import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import List from '../StockPage/List/List'
import Chart from '../StockPage/ChartComponent/ChartComponent'
import { stocksSelector } from '../../Redux/selectors/stocksPageSelectors';

interface IStock {
	id: string
	name: string
	count: number
	price: number
	growth: string
	isAdded: boolean
	data: number[]
}

interface IStateProps {
    stocks?: IStock[];
    currentStockId?: string;
}

interface IDispatchProps{
    func?: any;
}

interface IOwnProps {
    ownProps: any;
}

interface IProps extends IStateProps, IDispatchProps, IOwnProps {}

class ListContainer extends React.Component <IProps> {
    constructor(props: IProps){
        super(props)
    }
    render() {
        return (
            <>
                <List {...this.props} />
                <Chart />
            </>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    stocks: stocksSelector,
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => {
    return {

    }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(ListContainer);