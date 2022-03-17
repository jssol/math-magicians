import React from 'react';
import './scss/App.scss';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  render() {
    const { theme } = this.state;
    return (
      <div className={`App ${theme}`}>
        <Calculator />
      </div>
    );
  }
}

export default App;
