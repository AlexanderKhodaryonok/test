import React from 'react';

interface IOwnProps {
	setShowMode: (bool: boolean) => void
}

interface IProps extends IOwnProps {}

const Sidebar = (props: IProps) => {

  const myStocks = () => props.setShowMode(true)
  const allStocks = () => props.setShowMode(false)

  return (
    <div>
      <div onClick={allStocks}>All stocks</div>
      <div onClick={myStocks}>My stocks</div>
    </div>
  );
}

export default Sidebar;