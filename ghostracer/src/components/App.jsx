import React from 'react';
import PropTypes, { bool } from 'prop-types';
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
  Box,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper
} from '@material-ui/core'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux'

import Login from 'components/Login.jsx';
import FriendsPage from 'components/FriendsPage/FriendsPage.jsx';
import GlobalRank from 'components/GlobalRank/GlobalRank.jsx';
import MatchResult from 'components/MatchResult/MatchResult.jsx';
import RankedMatch from 'components/RankedMatch/RankedMatch.jsx';
import MainPage from 'components/MainPage/MainPage.jsx';
import Play from 'components/Play/Play.jsx';
// import FriendsPage from './FriendsPage/FriendsPage.jsx';

import { getUserProfileAction } from '../states/user-actions.js';

import 'components/App.css';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object,
    dispatch: PropTypes.func,
    loggedIn: PropTypes.bool,
    loading: PropTypes.bool,
    username: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: 'Leon',
      maxspeed: 100
    }
    this.userProfileDetail = this.userProfileDetail.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
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
                    <NavbarBrand className='text-info' href="/">Ghost Racer</NavbarBrand>
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
                  {this.userProfileDetail()}
                </Collapse>
              </div>
            </Navbar>
            <MainPage />
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

  userProfileDetail() {
    return (
      <Box className='user-detail'>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Max Speed (WPM)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={this.state.username}>
                <TableCell component="th" scope="row">
                  {this.state.username}
                </TableCell>
                <TableCell align="right">{this.state.maxspeed}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    )
  }

  handleLogin() {

  }

}

export default connect(state => ({...state}))(App)
