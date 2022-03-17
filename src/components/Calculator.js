import React from 'react';
import Key from './InputCalc';
import calculate from './logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.retrieveSymbol = this.retrieveSymbol.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  retrieveSymbol(symbol) {
    const {
      total, next, operation,
    } = this.state;
    console.log(symbol);

    this.setState(calculate({ total, next, operation }, symbol));
    this.setState((prevState) => ({
      total: prevState.total,
      next: prevState.next,
      operation: prevState.operation,
    }));

    console.log(this.state);
  }

  render() {
    let display = '0';
    const { next, total, operation } = this.state;
    if (next === null && total === null && operation === null) { display = '0'; }
    if (next !== null && total === null && operation === null) { display = next; }
    if (next === null && total !== null && operation !== null) { display = '0'; }
    if (next !== null && total !== null && operation !== null) { display = next; }
    if (next === null && total !== null && operation === null) { display = total; }
    return (
      <div>
        <div className="screen">{display}</div>
        <div className="row">
          <Key symbol="AC" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="+/-" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="%" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="÷" color="orange" retrieveSymbol={this.retrieveSymbol} />
        </div>
        <div className="row">
          <Key symbol="7" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="8" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="9" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="x" color="orange" retrieveSymbol={this.retrieveSymbol} />
        </div>
        <div className="row">
          <Key symbol="4" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="5" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="6" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="-" color="orange" retrieveSymbol={this.retrieveSymbol} />
        </div>
        <div className="row">
          <Key symbol="1" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="2" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="3" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="+" color="orange" retrieveSymbol={this.retrieveSymbol} />
        </div>
        <div className="row">
          <Key symbol="0" color="double" retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="." retrieveSymbol={this.retrieveSymbol} />
          <Key symbol="=" color="orange" retrieveSymbol={this.retrieveSymbol} />
        </div>
      </div>
    );
  }
}

export default Calculator;
