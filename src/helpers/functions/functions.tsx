import { IStock } from '../../Redux/Reducers/StockPage/interfaces';

// how to add type to state (in parameters)?
export const findCurrentStock = (state: any, id: string): number => {
  let index: number = 0;
  index = state.stocks.findIndex((stock: IStock) => stock.id === id);
  return index;
};

export const filterByName = (stocks: IStock[], filter: string): IStock[] => {
  return stocks.filter((stock: IStock) => stock.name.toLowerCase()
  .includes(filter.toLowerCase())) || [];
};
