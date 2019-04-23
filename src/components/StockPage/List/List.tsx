import React from 'react';
import {IStock, IStocksState } from '../../../Redux/Reducers/StockPage/interfaces'

const List = ( props: IStocksState ) => {
	return (
		<div>
			{
				props.stocks.map((stock: IStock): any => (
					<div key={stock.id}>
						<div>{stock.name}</div>
						<div>{stock.count} shares</div>
						<div>Chart</div>
						<button>{stock.price}</button>
					</div>
				))
			}
		</div>
	);
}

export default List;