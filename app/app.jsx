import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router'
import Login from './containers/login.jsx';

ReactDom.render(
		<Router>
	      <Route path="/" component={Login} />
	    </Router>,
	document.getElementById('app'));