import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import s from './button.module.scss'

interface IOwnProps {
  isAdded: boolean;
  data: number[];
  sendStocks: any;
}

interface IRouterProps extends RouteComponentProps<any, any> { }

interface IProps extends IOwnProps, IRouterProps { }

const Button = (props: IProps) => {

  const title: string = props.isAdded === true ? 'Sell' : 'Buy';
  const colorClass: any = props.isAdded === true ? s.red : s.green;

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
