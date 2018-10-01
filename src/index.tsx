import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PeopleList } from './components/PeopleList';
import { HomePage } from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'; //tslint:disable-line
import './index.scss';
import * as logo from './logo.jpg';


ReactDOM.render(
	<div className="main">
		<img src={logo} />
		<HomePage />
	</div>,
	document.getElementById('app')
);
