import React, { Component } from 'react'
import { withFirebase } from '../../firebase'
import './add-todo.sass'

class AddTodo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  addTodo(event) {
    event.preventDefault()
    if (this.state.value !== '') {
      this.props.firebase
        .todos()
        .push({
          text: this.state.value,
          done: false,
          user: this.props.firebase.auth.currentUser.email,
        })
      this.setState({
        value: ''
      })
    }
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form
        className="AddTodo"
        onSubmit={(event) => this.addTodo(event)}>
        <input
          type="text"
          placeholder="Add a todo..."
          value={this.state.value}
          onChange={(event) => this.onChange(event)} />
        <button
          type="submit"
          className="btn btn-icon">
          <i className="fas fa-plus" />
        </button>
      </form>
    )
  }

}

export default withFirebase(AddTodo)
