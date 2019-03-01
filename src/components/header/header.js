import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withFirebase } from '../../firebase'
import Clicker from '../clicker/clicker'
import CYCLE_THEME from '../../store/actions/cycle-theme'
import './header.sass'

class Header extends Component {

  render() {
    return (
      <header
        className={`
          Header
          theme--${this.props.themeChoices[this.props.theme]}
        `}>
        <div>{this.props.user.email}</div>
        <Clicker
          onClick={this.props.onSwitchClick}
          icon="far fa-clone" />
        <Clicker
          onClick={this.props.firebase.signOut}
          icon="fas fa-times" />
      </header>
    )
  }

}

const mapStateToProps = state => {
  return {
    theme: state.theme,
    themeChoices: state.themeChoices,
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSwitchClick: () => dispatch(CYCLE_THEME),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(Header))
