import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { renderRoutes } from 'react-router-config';

import './index.scss';
import Home from './components/home'
import About from './components/about'
import Topics from './components/topics'
import User from './components/user'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/topics',
    component: Topics
  },
  {
    path: '/user/:name',
    component: User
  },
]

ReactDOM.render(
	<BrowserRouter>
		<Container>
      {renderRoutes(routes)}
		</Container>
	</BrowserRouter>,
	document.getElementById('app')
)