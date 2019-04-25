import React, { FunctionComponent } from 'react';
import Sidebar from './StockPage/Sidebar/Sidebar'
import Container from './containers/Container'
import s from './StockPage.module.scss';
/*
interface IStateProps {
    stateProps?: any
}

interface IDispatchProps{
    dispatchProps?: any
}
*/
interface IOwnProps {
	readonly ownProps?: any;
}

interface IProps extends /*IStateProps, IDispatchProps,*/ IOwnProps { }

//why crash when I set type as Iprops?
const StockPage: FunctionComponent<any> = (props) => {
	return (
		<div className={s.wrapper}>
			<Sidebar />
			<Container {...props} />
		</div>
	);
}

export default StockPage;