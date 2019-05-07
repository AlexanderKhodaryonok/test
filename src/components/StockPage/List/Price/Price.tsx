import React from 'react';
import s from './price.module.scss';

interface IOwnProps {
  price: number;
  data: number[];
}

interface IProps extends IOwnProps { }

const Price = (props: IProps) => {
  let priceColor: string;

  if (props.data[0] < props.data[props.data.length - 1]) {
    priceColor = s.greenPrice;
  } else priceColor = s.redPrice;

  return (
    <div className={`${s.price} ${priceColor}`}>
      <span className={s.priceSpan}>{props.price}</span>
    </div>
  );
};

export default Price;
