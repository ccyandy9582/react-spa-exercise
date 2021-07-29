import React from 'react'
import ReactDOM from 'react-dom'
import Links from './links'

class User extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      name: props.match.params.name
    }
  }
componentWillReceiveProps = (nextProps) => {
  this.setState({name: nextProps.match.params.name})
}

  render() {
    return (
      <div>
        <Links />
        <h1>
          Hello {this.state.name}, how are you?
        </h1>
      </div>
    )
  }
}

export default User