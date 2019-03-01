import React, { Component } from 'react'
import { withFirebase } from './firebase'
import { connect } from 'react-redux'
import Main from './components/main/main'
import AuthLogin from './components/auth/auth-login'
import SET_USER from './store/actions/set-user'

class App extends Component {

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(user =>
      this.props.setUser(user)
    )
  }

  render() {
    return (
      <div className="App page-wrap">
        {
          this.props.user
          ? <Main />
          : <AuthLogin />
        }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: payload => dispatch(SET_USER(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(App))
