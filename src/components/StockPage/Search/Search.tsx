import React from 'react';

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
				type="text"
				placeholder={'search'}
				onChange={changeFilter}
			/>
		</>
	);
}

export default Search;