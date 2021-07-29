import React from 'react'
import ReactDOM from 'react-dom'
import Links from './links'

class Topics extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        <Links />
        <h1>
        Topics
        </h1>
      </div>
    )
  }
}

export default Topics