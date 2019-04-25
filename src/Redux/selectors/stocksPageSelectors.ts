import { createSelector } from "reselect";

const stocksPageSelector = (state: any): any => state.stocksPage;

export const stocksSelector = createSelector(stocksPageSelector, (stocksPage) => {
	return stocksPage.stocks || []
});

export const currentStockIdSelector = createSelector(stocksPageSelector, (stocksPage) => {
	return stocksPage.currentStockId || ''
});

export const stockByIdSelector = createSelector(
	[stocksSelector, currentStockIdSelector],
	(stocks: [], currentStockId: string) => {
		let qwe = stocks.find((stock: any) => stock.id === currentStockId) || {}
		debugger
		return qwe
	}
);
