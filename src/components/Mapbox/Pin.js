import * as React from 'react';

import ICON from "../../assets/icons/svgs/car.svg";

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none'
};

function Pin({size = 20, onClick}: {size?: number; onClick?: () => void}) {
  return (
    <img src={ICON}  style={{width:40,height:40}} onClick={onClick}/>
  );
}

export default React.memo(Pin);