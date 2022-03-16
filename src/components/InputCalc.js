import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.PureComponent {
  render() {
    const { color, symbol } = this.props;
    return (
      <div>
        <button type="button" className={color}>
          {symbol}
        </button>
      </div>
    );
  }
}

Key.propTypes = {
  color: PropTypes.string,
  symbol: PropTypes.string,
};

Key.defaultProps = {
  color: 'gray',
  symbol: '0',
};

export default Key;
