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
import FriendsPage from './FriendsPage/FriendsPage.jsx';
import GlobalRank from './GlobalRank/GlobalRank.jsx';
import MatchResult from './MatchResult/MatchResult.jsx';
import RankedMatch from './RankedMatch/RankedMatch.jsx';
import Play from './Play/Play.jsx';
// import FriendsPage from './FriendsPage/FriendsPage.jsx';

import './App.css';

class App extends React.Component {
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn : true
    }
  }

  render() {
    return (
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
                      <NavLink tag={Link} to='/globalrank'>Global Rank</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to='/play'>Start Game</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to='/leaderboard'>Leaderboard</NavLink>
                    </NavItem>
                  </Nav>
                  <Login loggedIn={this.state.loggedIn} onClick={this.handleLogin}>Login</Login>
                </Collapse>
              </div>
            </Navbar>
          </div>
          <Route exact path="/friends" render={() => (
            <FriendsPage></FriendsPage>
          )} />
          <Route exact path="/play" render={() => (
            <Play />
          )} />
          <Route exact path="/globalrank" render={() => (
            <GlobalRank></GlobalRank>
          )} />
        </div>
        <div className='footer'>
          From Group 5 with ❤
      </div>
      </Router>
    )
  }
}

export default App;
