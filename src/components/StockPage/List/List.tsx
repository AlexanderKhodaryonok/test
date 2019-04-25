import React from 'react';
import Button from './Button/Button'

interface IStock {
	id: string
	name: string
	count: number
	price: number
	growth?: string
	isAdded?: boolean
	data?: number[]
}

// interface IStateProps {
//     stocks?: IStock[];
//     currentStockId?: string;
// }

// interface IDispatchProps{
//     setStockId?: any;
// }

interface IOwnProps {
	stocks?: IStock[];
	setStockId: (id: string) => void
}

interface IProps extends IOwnProps {}

const List = (props: IProps) => {
	return (
		<div>
			{
				props.stocks && props.stocks.map((stock: IStock): any => (
					<div key={stock.id}>
						<div>{stock.name}</div>
						<div>{stock.count} shares</div>
						<div>Chart</div>
						<Button 
							price={stock.price}
							id={stock.id}
							setStockId={props.setStockId}
						/>
						{/*<button>{stock.price}</button>*/}
					</div>
				))
			}
		</div>
	);
}

export default List;