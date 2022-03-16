import React from 'react';
import '../scss/Calculator.scss';

const buttons = [
  {
    value: '+',
    symbol: '+',
    id: 'Plus',
    color: 'Orange',
  },
  {
    value: '-',
    symbol: '-',
    id: 'Minus',
    color: 'Orange',
  },
  {
    value: '',
    symbol: '+/-',
    id: 'Inverter',
    color: 'Gray',
  },
  {
    value: '*',
    symbol: 'x',
    id: 'Times',
    color: 'Orange',
  },
  {
    value: '/',
    symbol: '÷',
    id: 'Divide',
    color: 'Orange',
  },
  {
    value: '0',
    symbol: '0',
    id: 'Zero',
    color: 'Gray',
  },
  {
    value: '1',
    symbol: '1',
    id: 'One',
    color: 'Gray',
  },
  {
    value: '2',
    symbol: '2',
    id: 'Two',
    color: 'Gray',
  },
  {
    value: '3',
    symbol: '3',
    id: 'Three',
    color: 'Gray',
  },
  {
    value: '4',
    symbol: '4',
    id: 'Four',
    color: 'Gray',
  },
  {
    value: '5',
    symbol: '5',
    id: 'Five',
    color: 'Gray',
  },
  {
    value: '6',
    symbol: '6',
    id: 'Six',
    color: 'Gray',
  },
  {
    value: '7',
    symbol: '7',
    id: 'Seven',
    color: 'Gray',
  },
  {
    value: '8',
    symbol: '8',
    id: 'Eight',
    color: 'Gray',
  },
  {
    value: '9',
    symbol: '9',
    id: 'Nine',
    color: 'Gray',
  },
  {
    value: '=',
    symbol: '=',
    id: 'Equal',
    color: 'Orange',
  },
  {
    value: '%',
    symbol: '%',
    id: 'Modulo',
    color: 'Gray',
  },
  {
    value: '.',
    symbol: '.',
    id: 'Dot',
    color: 'Gray',
  },
  {
    value: 'AC',
    symbol: 'AC',
    id: 'Reset',
    color: 'Gray',
  },
];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="Calculator">
        <section className="Result">{result}</section>
        <section className="Pad">
          {buttons.map((button) => <button key={button.id} type="button" className={`Button ${button.id} ${button.color}`}>{button.symbol}</button>)}
        </section>
      </div>
    );
  }
}

export default Calculator;
