import React from 'react';
import s from './search.module.scss'

interface IOwnProps {
	filter: string;
	setFilter: (stockName: string) => void
}

interface IProps extends IOwnProps { }

const Search = (props: IProps) => {

	const changeFilter = (e: any) => props.setFilter(e.target.value) 

	return (
		<>
			<input 
				className={s.search}
				type="text"
				placeholder={'Search by stock or market name'}
				onChange={changeFilter}
			/>
		</>
	);
}

export default Search;