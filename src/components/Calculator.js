import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.PureComponent {
  render() {
    const { symbol, color } = this.props;
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
  symbol: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Key;
