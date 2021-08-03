import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { renderRoutes } from 'react-router-config';

import './index.scss';
import Home from './components/home'
import About from './components/about'
import Topics from './components/topics'
import User from './components/user'
import Start from './components/start';
import Timer from './components/timer';
import TimeUp from './components/timeUp';

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
  {
    path: '/timer',
    component: Timer
  },
  {
    path: '/timeStart',
    component: Start
  },
  {
    path: '/timeUp',
    component: TimeUp
  },
]

ReactDOM.render(
	<HashRouter>
		<Container>
      {renderRoutes(routes)}
		</Container>
	</HashRouter>,
	document.getElementById('app')
)