import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';

class TimeUp extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<Row>
				<Col>
					<h1>Time's Up!!</h1>
				</Col>
			</Row>
		);
	}
}

export default TimeUp;
