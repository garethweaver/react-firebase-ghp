import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThemeSwitch extends Component {

  cycleTheme(event) {
    event.preventDefault()
    this.props.dispatch({type: 'CYCLE_THEME'})
  }

  render() {
    return (
      <button
        className="btn btn-icon"
        onClick={(event) => this.cycleTheme(event)}>
        <i className="far fa-clone" />
      </button>
    )
  }

}

export default connect()(ThemeSwitch)
