import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import List from '../StockPage/List/List'
import Chart from '../StockPage/ChartComponent/ChartComponent'
import { stocksSelector, currentStockIdSelector, stockByIdSelector } from '../../Redux/selectors/stocksPageSelectors';
import { setStockId, setShowMode } from '../../Redux/actionCreators/stockPageActionCreators';
import { withRouter, RouteComponentProps } from 'react-router';
import Sidebar from '../StockPage/Sidebar/Sidebar';

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
    stocks: IStock[];
    currentStockId: string;
    stock: any;
}

interface IDispatchProps {
    setStockId: any;
    setShowMode: any;
}

interface IOwnProps {
    ownProps?: any;
}

interface IRouterProps extends RouteComponentProps<any, any> { }

interface IProps extends IStateProps, IDispatchProps, IOwnProps, IRouterProps { }

class ListContainer extends React.Component<IProps> {

    componentDidMount() {
        this.props.setStockId(this.props.match.params.id)
    }

    render() {
        return (
            <>
                <Sidebar setShowMode={this.props.setShowMode}/>
                <List
                    stocks={this.props.stocks}
                    setStockId={this.props.setStockId}
                />
                <Chart {...this.props.stock} />
            </>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    stocks: stocksSelector,
    currentStockId: currentStockIdSelector,
    stock: stockByIdSelector
});

const mapDispatchToProps = {
    setStockId,
    setShowMode
}

export default withRouter(connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(ListContainer));