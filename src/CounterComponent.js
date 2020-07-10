import React, { Component } from 'react';

class CounterComponent extends Component {
  state = {
    count: 0,
  }

  handlePlus = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    })
  }

  handleMinus = () => {
    let newCount = this.state.count - 1;
    this.setState({
      count: newCount,
    })
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <br />
        <button onClick={this.handlePlus}>+</button> 
        <button onClick={this.handleMinus}>-</button>
      </div>
    )
  }
}

export default CounterComponent;
