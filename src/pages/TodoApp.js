import React from 'react';
import { connect } from 'react-redux';

import {addTodoItem} from '../stores/todoAppStore';

class TodoApp extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoItem({ text: e.target.todo.value })
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.todoList.map((item,i) => (<h2 key={i}>{i+1}. {item.text}</h2>))}
        <form onSubmit={(e) => this.handleSubmit(e)} >
          <h3> Add todo </h3>
          <input type="text" name="todo" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    addTodoItem({ text }) {
      dispatch(addTodoItem({ text }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);