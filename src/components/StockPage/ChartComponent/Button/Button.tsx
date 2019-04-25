import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

interface IOwnProps {
	isAdded: any,
	data: any,
	moveStock: any
}

interface IRouterProps extends RouteComponentProps<any, any> { }

interface IProps extends IOwnProps, IRouterProps { }

const Button = (props: IProps) => {
	debugger
	const title: string = props.isAdded === true ? 'sell' : 'buy';

	const buttonClick = () => {
		debugger
		return props.moveStock({id: props.match.params.id, bool: !props.isAdded})
	} 

	return (
		<>	
		<button onClick={buttonClick} >{title}</button>
		</>
	);
}

export default withRouter(Button);