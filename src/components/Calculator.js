import React from 'react';
import Key from './InputCalc';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="screen">0</div>
        <div className="row">
          <Key symbol="AC" />
          <Key symbol="+/-" />
          <Key symbol="%" />
          <Key symbol="/" color="orange" />
        </div>
        <div className="row">
          <Key symbol="7" />
          <Key symbol="8" />
          <Key symbol="9" />
          <Key symbol="X" color="orange" />
        </div>
        <div className="row">
          <Key symbol="4" />
          <Key symbol="5" />
          <Key symbol="6" />
          <Key symbol="-" color="orange" />
        </div>
        <div className="row">
          <Key symbol="1" />
          <Key symbol="2" />
          <Key symbol="3" />
          <Key symbol="+" color="orange" />
        </div>
        <div className="row">
          <Key symbol="0" color="double" />
          <Key symbol="." />
          <Key symbol="=" color="orange" />
        </div>
      </div>
    );
  }
}

export default Calculator;
