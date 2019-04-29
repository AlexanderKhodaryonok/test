import React from 'react';
import s from './sidebar.module.scss'

interface IOwnProps {
  setShowMode: (bool: boolean) => void
  isShowMyStocks: any;
}

interface IProps extends IOwnProps { }

const Sidebar = (props: IProps) => {

  let allStocksClass: any;
  let myStocksClass: any;
  
  if (props.isShowMyStocks) myStocksClass = s.active;
  if (!props.isShowMyStocks) allStocksClass = s.active;

  const myStocks = () => props.setShowMode(true)
  const allStocks = () => props.setShowMode(false)

  return (
    <div>
      <div className={allStocksClass} onClick={allStocks}>All stocks</div>
      <div className={myStocksClass} onClick={myStocks}>My stocks</div>
    </div>
  );
}

export default Sidebar;