import api, { mock } from '../Redux/axios/axiosInstance';
import { IStock } from '../Redux/Reducers/StockPage/interfaces';

mock.onGet('/stocks').reply(200, {
  stocks: [
    {
      id: '111111',
      name: 'APPL',
      count: 150,
      price: 105.67,
      growth: '9.23%',
      isAdded: true,
      data: [1, 2, 3, 2, 6, 4, 7, 4, 8],
    },
    {
      id: '2',
      name: 'TWTR',
      count: 80,
      price: 15.91,
      growth: '-0.92%',
      isAdded: false,
      data: [10, 11, 8, 6, 6, 4, 5, 4, 2],
    },
    {
      id: '3',
      name: 'TSLA',
      count: 75,
      price: 227.75,
      growth: '5.17%',
      isAdded: true,
      data: [1, 2, 3, 2, 6, 4, 5, 5, 6],
    },
    {
      id: '4',
      name: 'FB',
      count: 110,
      price: 113.05,
      growth: '4.25%',
      isAdded: false,
      data: [2, 4, 6, 7, 3, 4, 6, 7, 4, 6],
    },
    {
      id: '5',
      name: 'NFLX',
      count: 110,
      price: 98.36,
      growth: '6.86%',
      isAdded: false,
      data: [1, 2, 3, 3, 4, 6, 5, 3, 6],
    },
    {
      id: '6',
      name: 'F',
      count: 50,
      price: 13.08,
      growth: '-7.29%',
      isAdded: true,
      data: [11, 9, 10, 7, 7, 8, 9, 6, 4],
    },
  ],
});

mock.onPost('/stocks').reply(200, {
  stocks: [
    {
      id: '111111',
      name: 'APPL',
      count: 150,
      price: 105.67,
      growth: '9.23%',
      isAdded: true,
      data: [1, 2, 3, 2, 6, 4, 7, 4, 8],
    },
    {
      id: '2',
      name: 'TWTR',
      count: 80,
      price: 15.91,
      growth: '-0.92%',
      isAdded: false,
      data: [10, 11, 8, 6, 6, 4, 5, 4, 2],
    },
    {
      id: '3',
      name: 'TSLA',
      count: 75,
      price: 227.75,
      growth: '5.17%',
      isAdded: true,
      data: [1, 2, 3, 2, 6, 4, 5, 5, 6],
    },
    {
      id: '4',
      name: 'FB',
      count: 110,
      price: 113.05,
      growth: '4.25%',
      isAdded: false,
      data: [2, 4, 6, 7, 3, 4, 6, 7, 4, 6],
    },
    {
      id: '5',
      name: 'NFLX',
      count: 110,
      price: 98.36,
      growth: '6.86%',
      isAdded: false,
      data: [1, 2, 3, 3, 4, 6, 5, 3, 6],
    },
    {
      id: '6',
      name: 'F',
      count: 50,
      price: 13.08,
      growth: '-7.29%',
      isAdded: true,
      data: [11, 9, 10, 7, 7, 8, 9, 6, 4],
    },
  ],
});

export const getStocksRequest = () => api.get('/stocks');
export const setStocksRequest = (stocks: IStock[]) => api.post('/stocks', stocks);
