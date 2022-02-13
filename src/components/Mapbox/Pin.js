import * as React from 'react';
import ICON from "../../assets/icons/svgs/car.svg";

function Pin({size = 20, onClick}) {
  return (
    <img src={ICON} alt="icon red car"  style={{width:40,height:40}} onClick={onClick}/>
  );
}

export default React.memo(Pin);