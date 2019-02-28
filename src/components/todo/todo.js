import React, { Component } from 'react'
import { withFirebase } from '../../firebase'
import './todo.sass'

class Todo extends Component {

  toggleTodo() {
    let todo = {
      ...this.props.todo,
      done: !this.props.todo.done,
    }

    delete todo.id

    this.props.firebase
      .todo(this.props.todo.id)
      .set(todo)
  }

  deleteTodo() {
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
            onChange={(e) => this.toggleTodo()} />
          <span>
            {this.props.todo.text}
          </span>
        </label>
        <button
          onClick={(e) => this.deleteTodo()}
          className="btn btn-icon">
          <i className="fas fa-times" />
        </button>
      </div>
    )
  }

}

export default withFirebase(Todo)
