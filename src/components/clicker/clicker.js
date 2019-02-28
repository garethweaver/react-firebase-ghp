import React, { Component } from 'react'

class Clicker extends Component {

  render() {
    return (
      <button
        className="btn btn-icon"
        onClick={e => {
          e.preventDefault()
          this.props.onClick()
        }}>
        <i className={this.props.icon} />
      </button>
    )
  }

}

export default Clicker
