import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './css/index.css';
import About from './About';
import Code from './Code';
import Design from './Design';
import Contact from './Contact';
import logo from './assets/Logo.png';


const tabs = [
    {
        label: 'About',
        id: 1,
        path: '/',
    },
    {
        label: 'Design',
        id: 2,
        path: '/design',
    },
    {
        label: 'Code',
        id: 3,
        path: '/code',
    },
    {
        label: 'Contact',
        id: 4,
        path: '/contact',
    },
];

const routing = (
  <Router>
    <div className="app">
      <ul className="nav">
        <img src={ logo } className="nav--logo" />
        {
            tabs.map(tab => (
                <li className="nav--list">
                    <NavLink
                        exact
                        className={ `nav--item nav--item__${tab.id}` }
                        activeClassName={ `nav--item__${tab.id}__active` }
                        to={ tab.path }
                    >
                        { tab.label }
                    </NavLink>
                </li>
            ))
        }
      </ul>
      <Route exact path="/" component={About} />
      <Route path="/design" component={Design} />
      <Route path="/code" component={Code} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
