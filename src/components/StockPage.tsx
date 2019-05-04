import React from 'react';
import Container from './containers/Container'
import s from './StockPage.module.scss';

const StockPage = () => {
	return (
		<div className={s.wrapper}>
			<Container />
		</div>
	);
}

export default StockPage;