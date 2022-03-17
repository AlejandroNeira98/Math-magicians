import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.PureComponent {
  constructor(props) {
    super(props);
    this.retrieveSymbol = this.retrieveSymbol.bind(this);
  }

  retrieveSymbol(e) {
    const { retrieveSymbol } = this.props;
    retrieveSymbol(e.target.innerText);
  }

  render() {
    const { color, symbol } = this.props;
    return (
      <div>
        <button type="button" className={color} onClick={this.retrieveSymbol}>
          {symbol}
        </button>
      </div>
    );
  }
}

Key.propTypes = {
  color: PropTypes.string,
  symbol: PropTypes.string,
  retrieveSymbol: PropTypes.func.isRequired,
};

Key.defaultProps = {
  color: 'gray',
  symbol: '0',
};

export default Key;
