import React from "react";

class Key extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className={this.props.color}>
          {this.props.simbol}
        </button>
      </div>
    );
  }
}

class InputCalculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div className="screen">0</div>
        <div className="row">
          <Key simbol="AC"></Key>
          <Key simbol="+/-"></Key>
          <Key simbol="%"></Key>
          <Key simbol="/" color="orange"></Key>
        </div>
        <div className="row">
          <Key simbol="7"></Key>
          <Key simbol="8"></Key>
          <Key simbol="9"></Key>
          <Key simbol="X" color="orange"></Key>
        </div>
        <div className="row">
          <Key simbol="4"></Key>
          <Key simbol="5"></Key>
          <Key simbol="6"></Key>
          <Key simbol="-" color="orange"></Key>
        </div>
        <div className="row">
          <Key simbol="1"></Key>
          <Key simbol="2"></Key>
          <Key simbol="3"></Key>
          <Key simbol="+" color="orange"></Key>
        </div>
        <div className="row">
          <Key simbol="0" color="double"></Key>
          <Key simbol="."></Key>
          <Key simbol="=" color="orange"></Key>
        </div>
      </div>
    );
  }
}

export default InputCalculator;