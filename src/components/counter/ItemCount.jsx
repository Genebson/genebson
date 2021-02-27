import React, { useState } from 'react';
import Display from './display/Display';
import Buttons from './button/Button';
import Add from './add/Add';

const style = {
  margin: '100px auto',
  width: 200,
  height: 150,
  // backgroundColor: 'black',
  boxSizing: 'border-box',
}

const upper = {
  display: 'flex',
  justifyContent: 'space-around'
}

const lower = {
  width: 400,
  display: 'flex',
  justifyContent: 'center'
}

const ItemCount = ({ onAdd, cantidad, inicial, counter, setCounter }) => {

  // let [counter, setCounter] = useState(inicial);

  const handleClick = (amount) => {
    return (
      () => {
        let total = (amount < 1) ? 1 : amount; //no puede ser menor a 0
        let limiter = (total > cantidad) ? cantidad : total; //no puede superar el stock
        setCounter(limiter);
      }
    )
  }

  let prop = { counter, setCounter } //Con este operador paso counter y setcounter

  return (
    <div className="itemCount" {...{ style }}>
      <div className="upper" style={upper}>
        <Buttons suma={false} onClick={handleClick} {...prop} />
        <Display valor={counter} />
        <Buttons suma={true} onClick={handleClick} {...prop} />
      </div>
      <div className="lower" style={lower}>
        <Add onAdd={onAdd} {...{ counter }} />
      </div>
    </div>
  );
}

export default ItemCount;