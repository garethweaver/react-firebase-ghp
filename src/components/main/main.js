import React, { Component } from 'react'
import Header from '../header/header'
import TodoList from '../todo/todo-list'
import AddTodo from '../todo/add-todo'
import './main.sass'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <TodoList />
        <AddTodo />
      </div>
    )
  }

}

export default Main
