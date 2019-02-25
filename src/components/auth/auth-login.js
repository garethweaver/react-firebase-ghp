import React, { Component } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui'
import { withFirebase, getUIConfig } from '../../firebase'
import firebase from 'firebase'

class AuthLogin extends Component {

  render() {
    return (
      <StyledFirebaseAuth
        uiConfig={getUIConfig(firebase)}
        firebaseAuth={firebase.auth()} />
    )
  }

}

export default withFirebase(AuthLogin)
