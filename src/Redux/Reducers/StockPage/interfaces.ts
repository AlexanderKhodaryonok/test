export interface IStock {
	id: string
	name: string
	count: number
	price: number
	growth: string
	isAdded: boolean
	data: number[]
}

export interface IStocksState {
	currentStockId?: string
	stocks?: IStock[]
}