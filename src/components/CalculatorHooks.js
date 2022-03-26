import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../scss/Calculator.scss';

const buttons = [
  {
    symbol: '+',
    id: 'Plus',
    color: 'Orange',
  },
  {
    symbol: '-',
    id: 'Minus',
    color: 'Orange',
  },
  {
    symbol: '+/-',
    id: 'Inverter',
    color: 'Gray',
  },
  {
    symbol: 'x',
    id: 'Times',
    color: 'Orange',
  },
  {
    symbol: '÷',
    id: 'Divide',
    color: 'Orange',
  },
  {
    symbol: '0',
    id: 'Zero',
    color: 'Gray',
  },
  {
    symbol: '1',
    id: 'One',
    color: 'Gray',
  },
  {
    symbol: '2',
    id: 'Two',
    color: 'Gray',
  },
  {
    symbol: '3',
    id: 'Three',
    color: 'Gray',
  },
  {
    symbol: '4',
    id: 'Four',
    color: 'Gray',
  },
  {
    symbol: '5',
    id: 'Five',
    color: 'Gray',
  },
  {
    symbol: '6',
    id: 'Six',
    color: 'Gray',
  },
  {
    symbol: '7',
    id: 'Seven',
    color: 'Gray',
  },
  {
    symbol: '8',
    id: 'Eight',
    color: 'Gray',
  },
  {
    symbol: '9',
    id: 'Nine',
    color: 'Gray',
  },
  {
    symbol: '=',
    id: 'Equal',
    color: 'Orange',
  },
  {
    symbol: '%',
    id: 'Modulo',
    color: 'Gray',
  },
  {
    symbol: '.',
    id: 'Dot',
    color: 'Gray',
  },
  {
    symbol: 'AC',
    id: 'Reset',
    color: 'Gray',
  },
];

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null });
  const { total, next } = state;

  let result;
  if (total === null && next !== null) {
    result = next;
  } else if (total !== null && next === null) {
    result = total;
  } else {
    result = next;
  }

  const handleClick = (e) => {
    const update = calculate(state, e.target.innerText);
    setState(update);
  };

  return (
    <section className="CalculatorSection">
      <h2 className="CalculatorTitle">Let&apos;s do some math!</h2>
      <div className="Calculator">
        <section className="Result">{result}</section>
        <section className="Pad">
          {buttons.map((button) => (<button key={button.id} onClick={handleClick} type="button" className={`Button ${button.id} ${button.color}`}>{button.symbol}</button>))}
        </section>
      </div>
    </section>
  );
};

export default Calculator;
