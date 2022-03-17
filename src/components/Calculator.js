import React from 'react';
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

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => (calculate(state, e.target.innerText)));
  }

  render() {
    const { total } = this.state;
    return (
      <div className="Calculator">
        <section className="Result">{total}</section>
        <section className="Pad">
          {buttons.map((button) => (<button key={button.id} onClick={this.handleClick} type="button" className={`Button ${button.id} ${button.color}`}>{button.symbol}</button>))}
        </section>
      </div>
    );
  }
}

export default Calculator;
