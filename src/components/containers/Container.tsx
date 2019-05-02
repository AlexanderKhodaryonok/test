import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import List from '../StockPage/List/List'
import Chart from '../StockPage/ChartComponent/ChartComponent'
import { stocksSelector, currentStockIdSelector, stockByIdSelector, filterSelector, isShowMyStocksSelector } from '../../Redux/selectors/stocksPageSelectors';
import { setStockId, setShowMode, setFilter, moveStock } from '../../Redux/actionCreators/stockPageActionCreators';
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
    isShowMyStocks: boolean;
}

interface IDispatchProps {
    setStockId: (id: string) => void;
    setShowMode: (bool: boolean) => void;
    setFilter: (id: string) => void;
    moveStock: any;
}



interface IRouterProps extends RouteComponentProps<any, any> { }

interface IProps extends IStateProps, IDispatchProps, IRouterProps { }

class ListContainer extends React.Component<IProps> {

    componentDidMount() {
        this.props.setStockId(this.props.match.params.id)
    }

    render() {
        return (
            
                <div className={s.wrapper}>
                    <div className={s.logo}>
                        Logo
                    </div>
                    <div className={s.sidebar}>
                        <Sidebar 
                            setShowMode={this.props.setShowMode}
                            isShowMyStocks={this.props.isShowMyStocks}
                        />
                    </div>
                    <div className={s.search}>
                        <Search
                            filter={this.props.filter}
                            setFilter={this.props.setFilter}
                        />
                    </div>
                    <div className={s.list}>
                        <List
                            currentStockId={this.props.currentStockId}
                            stocks={this.props.stocks}
                            setStockId={this.props.setStockId}
                        />
                    </div>
                    <div className={s.chart}>
                        <Chart {...this.props.stock}
                            moveStock={this.props.moveStock}
                        />
                    </div>
                </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    stocks: stocksSelector,
    currentStockId: currentStockIdSelector,
    stock: stockByIdSelector,
    filter: filterSelector,
    isShowMyStocks: isShowMyStocksSelector
});

const mapDispatchToProps = {
    setStockId,
    setShowMode,
    setFilter,
    moveStock
}

export default withRouter(connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(ListContainer));