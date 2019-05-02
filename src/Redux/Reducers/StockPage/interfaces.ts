
export interface IStock {
	id: string;
	name: string;
	count: number;
	price: number;
	growth: string;
	isAdded: boolean;
	data: number[];
};

export interface IStocksState {
	status: string;
	currentStockId: string;
	stocks: IStock[];
	filter: string;
	isShowMyStocks: boolean;
};