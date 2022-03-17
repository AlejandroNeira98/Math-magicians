import React from 'react';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div id="calc">
        <Calculator />
      </div>
    );
  }
}

export default App;
