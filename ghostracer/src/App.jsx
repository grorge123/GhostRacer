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

import './App.css';

class App extends React.Component{
  static propTypes = {
    loggedIn: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount(){
    this.setState({loggedIn: true}) // placeholder value
  }

  render(){
    return(
    <Router>
      <div className='App'>
        <div className="bg-faded">
        <Navbar color='faded' light expand>
          <NavbarToggler onClick={this.handleNavbarToggle}/>
          <Collapse isOpen={this.props.navbarToggle} navbar>
              <Nav navbar>
                  <NavItem>
                      <NavLink tag={Link} to='/'>Friends</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={Link} to='/login'>Leaderboard</NavLink>
                  </NavItem>
              </Nav>
              <Login loggedIn={this.state.loggedIn} onClick={this.handleLogin}>Login</Login>
          </Collapse>
        </Navbar>
        </div>
      </div>
      <Route exact path="/" render={() => (
        <App />
      )}/>
      <Route exact path="/login" render={() => (
        <Login />
      )}/>
      <div className='footer'>
        From Group 5 with ❤
      </div>
    </Router>
    )
  }

  handleLogin(){
    // todo: AWS Amplify auth
  }
}

export default App;