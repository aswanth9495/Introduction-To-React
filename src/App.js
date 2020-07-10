import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todoList: [
      { id: 0, item: 'Buy Milk' },
      { id: 1, item: 'Buy Groceries' },
    ],
  }

  addItem = (newTodo) => {
    const newTodoList = [...this.state.todoList, { id: this.state.todoList.length ,item: newTodo}];
    this.setState({
      todoList: newTodoList,
    })
  }
  deleteItem = (id) => {
    const newTodoList = this.state.todoList.filter(
      (item) => (
        item.id !== id
      )
    );

    this.setState({
      todoList: newTodoList,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <TodoList list={this.state.todoList} deleteItem={this.deleteItem} />
        <AddTodo addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
