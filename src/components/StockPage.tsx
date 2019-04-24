import React from 'react';
import Sidebar from './StockPage/Sidebar/Sidebar'
import Container from './containers/Container'
import s from './StockPage.module.scss';

interface IStateProps {
    stateProps?: any
}

interface IDispatchProps{
    dispatchProps?: any
}

interface IOwnProps {
    ownProps?: any;
}

interface IProps extends IStateProps, IDispatchProps, IOwnProps {}

const StockPage = (props: any) => {
  return (
    <div className={s.wrapper}>
      <Sidebar />
      <Container {...props}/>
    </div>
  );
}

export default StockPage;