import { createSelector } from "reselect";

const stocksPageSelector = (state: any): any => state.stocksPage;

export const filterSelector = createSelector(stocksPageSelector, (stockPage) => stockPage.filter || '');

export const stocksSelector = createSelector(stocksPageSelector, (stocksPage) => {
	debugger

	switch (stocksPage.isShowMyStocks) {

		case true:
			let myStocks = stocksPage.stocks.filter((stock: any) => stock.isAdded) || [];
			if (stocksPage.filter) {
				let filteredStocks = myStocks.filter((stock: any) => stock.name.toLowerCase().includes(stocksPage.filter.toLowerCase()))
				return filteredStocks.filter((stock: any) => stock.isAdded) || []
			} else return myStocks;

		case false:
			let allStocks = stocksPage.stocks || [];
			if (stocksPage.filter) {
				let filteredAllStocks = allStocks.filter((stock: any) => {
					return stock.name.toLowerCase().includes(stocksPage.filter.toLowerCase())
				}
				)
				return filteredAllStocks || [];
			} else return allStocks;
	}
});

export const currentStockIdSelector = createSelector(stocksPageSelector, (stocksPage) => stocksPage.currentStockId || ''
);

export const stockByIdSelector = createSelector(
	[stocksSelector, currentStockIdSelector],
	(stocks: [], currentStockId: string) => stocks.find((stock: any) => stock.id === currentStockId) || {}
);
