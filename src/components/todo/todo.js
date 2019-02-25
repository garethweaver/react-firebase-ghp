import React, { Component } from 'react'
import { withFirebase } from '../../firebase'
import './todo.sass'

class Todo extends Component {

  toggleTodo(event) {
    let todo = {
      ...this.props.todo,
      done: !this.props.todo.done,
    }

    delete todo.id

    this.props.firebase
      .todo(this.props.todo.id)
      .set(todo)
  }

  deleteTodo(event) {
    event.preventDefault()
    this.props.firebase
      .todo(this.props.todo.id)
      .remove()
  }

  render() {
    return (
      <div className="Todo">
        <label className={this.props.todo.done ? 'done' : null}>
          <input
            type="checkbox"
            checked={this.props.todo.done}
            onChange={(event) => this.toggleTodo(event)} />
          <span>
            {this.props.todo.text}
          </span>
        </label>
        <button
          onClick={(event) => this.deleteTodo(event)}
          className="btn btn-icon">
          <i className="fas fa-times" />
        </button>
      </div>
    )
  }

}

export default withFirebase(Todo)
