import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

class Start extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<Row>
				<Col>
					<Link className="btn" to="/timer">
						Start
					</Link>
				</Col>
			</Row>
		);
	}
}

export default Start;
