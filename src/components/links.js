import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

class Links extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <Nav>
				<Nav.Item>
					<li>
						<Link to="/">Home</Link>
					</li>
          <li>
            <Link to="/user/andy">User</Link>
          </li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/topics">Topics</Link>
					</li>
				</Nav.Item>
			</Nav>
    )
  }
}

export default Links