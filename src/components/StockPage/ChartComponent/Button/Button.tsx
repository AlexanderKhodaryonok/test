import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import s from './button.module.scss';

interface IOwnProps {
  isAdded: boolean;
  data: number[];
  sendStocks: (payload: { id: string, bool: boolean }) => void;
}

interface IRouterProps extends RouteComponentProps<any, any> { }

interface IProps extends IOwnProps, IRouterProps { }

const Button = (props: IProps) => {

  const title: string = props.isAdded ? 'Sell' : 'Buy';
  const colorClass: any = props.isAdded ? s.red : s.green;

  const buttonClick = () => {
    return props.sendStocks({ id: props.match.params.id, bool: !props.isAdded });
  };

  return (
    <>
      <button className={`${s.button} ${colorClass}`} onClick={buttonClick} >{title}</button>
    </>
  );
};

export default withRouter(Button);
