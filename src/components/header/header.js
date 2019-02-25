import React, { Component } from 'react'
import AuthLogout from '../auth/auth-logout'
import './header.sass'

class Header extends Component {

  render() {
    return (
      <header className="Header">
        Logged in
        <AuthLogout />
      </header>
    )
  }

}

export default Header
