import React, { Component } from 'react'
import { withFirebase } from '../../firebase'
import Todo from './todo'
import Loader from '../loader/loader'
import './todo-list.sass'

class TodoList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todos: null,
    }
  }

  componentDidMount() {
    this.props.firebase
      .todos()
      .on('value', this.handleTodos)
  }

  componentWillUnmount() {
    this.props.firebase
      .todos()
      .off()
  }

  handleTodos = snapshot => {
    let todos = []
    if (snapshot.val()) {
      todos = Object.keys(snapshot.val())
        .map(i => {
          return {
            id: i,
            ...snapshot.val()[i],
          }
        }
      )
    }
    this.setState({todos})
  }

  getTodos() {
    return (
      this.state.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        )
      })
    )
  }

  render() {
    return (
      <ul className="TodoList">
        {
          this.state.todos
          ? this.getTodos()
          : <Loader />
        }
      </ul>
    )
  }

}

export default withFirebase(TodoList)
