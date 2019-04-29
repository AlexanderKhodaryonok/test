import React from 'react';
import StockPage from './components/StockPage'
import Routes from './components/Routes/Routes';
import s from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <Routes />
    </div>
  );
}

export default App;
