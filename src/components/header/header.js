import React, { Component } from 'react'
import { connect } from 'react-redux'
import ThemeSwitch from '../theme-switch/theme-switch'
import AuthLogout from '../auth/auth-logout'
import './header.sass'

class Header extends Component {

  render() {
    return (
      <header
        className={`
          Header
          theme--${this.props.themeChoices[this.props.theme]}
        `}>
        <div>Logged in</div>
        <ThemeSwitch />
        <AuthLogout />
      </header>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    themeChoices: state.themeChoices,
  };
}

export default connect(mapStateToProps)(Header)
