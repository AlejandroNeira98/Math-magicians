import React from 'react';
import Key from './InputCalc';
import calculate from './logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.retrieveSymbol = this.retrieveSymbol.bind(this);
    this.state = {
      display: '0',
      total: null,
      next: null,
      operation: null,
    };
  }

  async retrieveSymbol(symbol) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const operators = ['%', '÷', 'x', '-', '+'];
    const {
      display, total, next, operation,
    } = this.state;

    console.log(symbol);

    if (numbers.includes(symbol)) {
      if (display === '0') {
        this.setState({ display: symbol, total: symbol });
      } else if (total === null) {
        this.setState({ display: display + symbol, total: symbol });
      } else { this.setState({ display: display + symbol, total: total + symbol }); }
    } else if (operators.includes(symbol)) {
      this.setState({
        operation: symbol,
        next: total,
        total: null,
        display: `${display} ${symbol} `,
      });
    } else if (symbol === '=') {
      this.setState(calculate({ total, next, operation }, symbol));
      this.setState({ display: total });
    } else {
      this.setState(calculate({ total, next, operation }, symbol));
      this.setState({ display: total });
    }
    console.log(this.state);
  }

  render() {
    const { display } = this.state;
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
