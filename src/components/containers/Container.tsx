import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import List from '../StockPage/List/List'
import Chart from '../StockPage/ChartComponent/ChartComponent'
import { stocksSelector, currentStockIdSelector, stockByIdSelector, filterSelector } from '../../Redux/selectors/stocksPageSelectors';
import { setStockId, setShowMode, setFilter } from '../../Redux/actionCreators/stockPageActionCreators';
import { withRouter, RouteComponentProps } from 'react-router';
import Sidebar from '../StockPage/Sidebar/Sidebar';
import Search from '../StockPage/Search/Search';
import s from './container.module.scss';

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
    filter: string;
}

interface IDispatchProps {
    setStockId: any;
    setShowMode: any;
    setFilter: any;
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
                <div className={s.wrapper}>
                    <div className={s.logo}>
                        cartinka
                    </div>
                    <div className={s.sidebar}>
                        <Sidebar setShowMode={this.props.setShowMode} />
                    </div>
                    <div className={s.search}>
                        <Search
                            filter={this.props.filter}
                            setFilter={this.props.setFilter}
                        />
                    </div>
                    <div className={s.list}>
                        <List
                            stocks={this.props.stocks}
                            setStockId={this.props.setStockId}
                        />
                    </div>
                    <div className={s.chart}>
                        <Chart {...this.props.stock} />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    stocks: stocksSelector,
    currentStockId: currentStockIdSelector,
    stock: stockByIdSelector,
    filter: filterSelector
});

const mapDispatchToProps = {
    setStockId,
    setShowMode,
    setFilter
}

export default withRouter(connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(ListContainer));