import React from 'react';

interface IOwnProps {
	filter: string;
}

interface IProps extends IOwnProps {}

const Search = (props:IProps) => {

		return (
			<>
				<input type="text"
					placeholder={'search'}
					//value={this.state.search}
				/>
			</>
		);
}

export default Search;