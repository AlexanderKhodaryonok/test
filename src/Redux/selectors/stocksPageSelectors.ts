import { createSelector } from "reselect";

const stocksPageSelector = (state: any): any => state.stocksPage;

export const stocksSelector = createSelector(stocksPageSelector, (stocksPage) => {
	switch (stocksPage.isShowMyStocks) {

		case true:
			return stocksPage.stocks.filter((stock: any) => stock.isAdded) || []

		case stocksPage.isShowMyStocks:
			return stocksPage.stocks || [];
	}
});

export const currentStockIdSelector = createSelector(stocksPageSelector, (stocksPage) => stocksPage.currentStockId || ''
);

export const stockByIdSelector = createSelector(
	[stocksSelector, currentStockIdSelector],
	(stocks: [], currentStockId: string) => stocks.find((stock: any) => stock.id === currentStockId) || {}
);
