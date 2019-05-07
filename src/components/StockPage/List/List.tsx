import React from 'react';
import s from './list.module.scss';
import { NavLink } from 'react-router-dom';
import Price from './Price/Price';

interface IStock {
  id: string;
  name: string;
  count: number;
  price: number;
  growth: string;
  isAdded: boolean;
  data: number[];

}

interface IOwnProps {
  currentStockId: string;
  stocks: IStock[];
  stock?: IStock;
  setStockId: (id: string) => void;
}

interface IProps extends IOwnProps { }

const List = (props: IProps) => {
  return (
    <div>
      {
        props.stocks && props.stocks.map((stock: IStock): any => (
          <div key={stock.id} className={s.wrapper}>
            <NavLink to={`/stock/${stock.id}`} activeClassName={s.active}
              onClick={() => {
                return props.setStockId(stock.id);
              }}>
              <div className={s.informationBlock}>
                <div>
                  <div className={s.name}>{stock.name}</div>
                  <div className={s.count}>{stock.count} shares</div>
                </div>
                <div className={s.chart}>
                </div>
                <div>
                  <Price data={stock.data}
                    price={stock.price}
                  />
                </div>
              </div>
            </NavLink>
          </div>
        ))
      }
    </div>
  );
};

export default List;
