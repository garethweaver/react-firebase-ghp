import React, {Component} from 'react'
import {withFirebase} from './firebase'
import Main from './components/main/main'
import AuthLogin from './components/auth/auth-login'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      authUser: null,
    }
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null })
    })
  }

  render() {
    return (
      <div className="App page-wrap">
        {
          this.state.authUser
          ? <Main />
          : <AuthLogin />
        }
      </div>
    )
  }

}

export default withFirebase(App)
