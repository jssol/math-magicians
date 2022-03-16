import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      buttons: [
        {
          value: '+',
          id: 'Plus',
        },
      ],
    };
  }

  render() {
    return (
      <div className="Calculator">
        <section className="Result">{this.state.result}</section>
        <section className="Pad">{this.state.buttons.map((button) => <button id={button.id} type="button" className="Button">{button.value}</button>)}</section>
      </div>
    );
  }
}
