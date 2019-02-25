import React, { Component } from 'react';
import { withFirebase } from '../../firebase'

class AuthLogout extends Component {

  handleClick() {
    this.props.firebase.signOut()
  }

  render() {
    return (
      <button
        className="btn btn-icon"
        onClick={() => this.handleClick()}>
        <i className="fas fa-times" />
      </button>
    )
  }

}

export default withFirebase(AuthLogout)
