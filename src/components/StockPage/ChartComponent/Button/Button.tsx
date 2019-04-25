import React from 'react';
import { NavLink } from "react-router-dom";

interface IOwnProps {
	isAdded: any,
	data: any
}

interface IProps extends IOwnProps { }

const Button = (props: IProps) => {
	debugger
	const title: string = props.isAdded === true ? 'sell' : 'bay';

	//const setStockIdOnClick = () => props.setStockId(props.id) 

	return (
		<>	
		<button>{title}</button>
		</>
	);
}

export default Button;