import React from 'react';
import Sidebar from './StockPage/Sidebar/Sidebar'
import Container from './containers/Container'
import s from './StockPage.module.scss';

const StockPage: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <Sidebar />
      <Container />
    </div>
  );
}

export default StockPage;