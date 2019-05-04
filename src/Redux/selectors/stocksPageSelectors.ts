import { createSelector } from "reselect";
import { IStock } from "../Reducers/StockPage/interfaces";
import { filterByName } from "../../helpers/functions/functions";

const stocksPageSelector = (state: any): any => state.stocksPage;

export const filterSelector = createSelector(stocksPageSelector, (stockPage) => stockPage.filter || '');

export const isShowMyStocksSelector = createSelector(stocksPageSelector, (stockPage) => stockPage.isShowMyStocks)

export const stocksSelector = createSelector(stocksPageSelector, (stocksPage) => {
	switch (stocksPage.isShowMyStocks) {

		case true:
			const myStocks = stocksPage.stocks.filter((stock: IStock) => stock.isAdded) || [];
			if (stocksPage.filter) {
				return filterByName(myStocks, stocksPage.filter);
			} else return myStocks;

		case false:
			const allStocks = stocksPage.stocks || [];
			if (stocksPage.filter) {
				return filterByName(allStocks, stocksPage.filter);
			} else return allStocks;

		default:
			return allStocks
	}
});

export const currentStockIdSelector = createSelector(stocksPageSelector, (stocksPage) => stocksPage.currentStockId || ''
);

export const stockByIdSelector = createSelector(
	[stocksSelector, currentStockIdSelector],
	(stocks: [], currentStockId: string) => stocks && stocks.find((stock: IStock) => stock.id === currentStockId)
);
