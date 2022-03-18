import React, { useState } from 'react';
import './scss/App.scss';
import Calculator from './components/CalculatorHooks';

function App() {
  const [state] = useState({ theme: 'light' });
  const { theme } = state;
  return (
    <div className={`App ${theme}`}>
      <Calculator />
    </div>
  );
}

export default App;
