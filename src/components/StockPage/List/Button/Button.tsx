import React from 'react';
import { NavLink } from "react-router-dom";

interface IOwnProps {
	price: number;
	id: string;
	setStockId?: any;
}

interface IProps extends IOwnProps { }

const Button = (props: IProps) => {

	const setStockIdOnClick = () => props.setStockId(props.id) 

	return (
		<NavLink to={`/stock/${props.id}`}>
			<button onClick={setStockIdOnClick}>
				{props.price}
			</button>
		</NavLink>
	);
}

export default Button;