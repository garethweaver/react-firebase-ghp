import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
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
        <Helmet>
          <title>Kortical Todos</title>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400"
            rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossorigin="anonymous" />
        </Helmet>
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
