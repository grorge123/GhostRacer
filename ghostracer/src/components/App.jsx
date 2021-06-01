import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Login from './Login.jsx';
import FriendsPage from './FriendsPage/FriendsPage.jsx';
import GlobalRank from './GlobalRank/GlobalRank.jsx';

import './App.css';

class App extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render(){
    return(
        <Router>
            {/* <FriendsPage></FriendsPage> */} 
            <GlobalRank></GlobalRank>
        </Router>
    )
  }
}

export default App;
