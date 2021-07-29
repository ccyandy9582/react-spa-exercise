import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './index.scss';
import Home from './components/home'
import About from './components/about'
import Topics from './components/topics'
import User from './components/user'

ReactDOM.render(
	<BrowserRouter>
		<Container>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/user/:name" component={User} />
		</Container>
	</BrowserRouter>,
	document.getElementById('app')
)