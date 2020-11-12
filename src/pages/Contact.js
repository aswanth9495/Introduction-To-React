import React, { Component } from 'react';

class Contact extends Component {
  state = {
    count: 0
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  handleMinus = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  componentDidMount() {
    console.log('Component Did Mount')
  }
  componentDidUpdate(prevProps) {
    // this.setState({
    //   count: this.state.count + 1,
    // })
    console.log(prevProps);
    console.log('ComponentDidUpdate');
  }
  componentWillUnmount(){
    console.log('Component Will Unmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should component Update', nextProps, nextState)
    return this.state.count < nextState.count;
  }

  static getDerivedStateFromProps(props, state) {
    console.log('derived props')
    console.log(state, props);
    return {
      count: state.count + 1
    };
  }
  getSnapshotBeforeUpdate(prevProps, prevStates) {
    console.log("Snapshot");
    console.log(prevProps, prevStates)
    return {
      count: prevStates.count,
    };
  }
  render() {
    console.log('render')
    return (
      <div> 
        <h1>{this.state.count}</h1>
        <button onClick={this.handleAdd}> Add</button>
        <button onClick={this.handleMinus}> Minus</button>
      </div> 
    );
  }
}

export default Contact;