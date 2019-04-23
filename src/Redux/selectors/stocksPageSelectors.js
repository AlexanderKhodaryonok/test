import {createSelector} from "reselect";

const stocksPageSelector = state => state.stocksPage;
export const stocksSelector = createSelector(stocksPageSelector, (stocksPage) => {
	debugger
	return stocksPage.stocks || []
});