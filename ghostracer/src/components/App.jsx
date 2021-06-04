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

import './App.css';
import Login from './Login.jsx';
import Play from './Play/Play.jsx';
// import FriendsPage from './FriendsPage/FriendsPage.jsx';

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
          <div className='container'>
          <Collapse isOpen={this.props.navbarToggle} navbar>
              <Nav navbar>
                  <NavItem>
                      <NavLink tag={Link} to='/friends'>Friends</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={Link} to='/login'>Leaderboard</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={Link} to='/play'>Start Game</NavLink>
                  </NavItem>
              </Nav>
              <Login loggedIn={this.state.loggedIn} onClick={this.handleLogin}>Login</Login>
          </Collapse>
          </div>
        </Navbar>
        </div> 
        <Route exact path="/login" render={() => (
          <Login />
        )}/>
        <Route exact path="/play" render={() => (
            <Play />
        )}/>
      </div>
      <div className='footer'>
        From Group 5 with ❤
      </div>
      </Router>
    );
  }

  handleLogin(){
    // todo: AWS Amplify auth
  }
}

export default App;
