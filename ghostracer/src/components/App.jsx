import React from 'react';
import PropTypes, { instanceOf, bool } from 'prop-types';
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
import { withCookies, Cookies } from 'react-cookie';

import Login from 'components/Login.jsx';
import FriendsPage from 'components/FriendsPage/FriendsPage.jsx';
import GlobalRank from 'components/GlobalRank/GlobalRank.jsx';
import MatchResult from 'components/MatchResult/MatchResult.jsx';
import RankedMatch from 'components/RankedMatch/RankedMatch.jsx';
import MainPage from 'components/MainPage/MainPage.jsx';
import Play from 'components/Play/Play.jsx';

import { getUserProfileAction } from '../states/user-actions.js';

import './App.css';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object,
    dispatch: PropTypes.func,
    loggedIn: PropTypes.bool,
    loading: PropTypes.bool,
    username: PropTypes.string,
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);
    
    const {cookies} = props.cookies
    this.state = {
      loggedIn: false,
      username: 'Leon',
      maxspeed: 100
    }
    this.userProfileDetail = this.userProfileDetail.bind(this)
    this.handleLogin = this.handleLogin.bind(this)

    console.log(this.props)
    console.log(this.state)
  }

  componentDidMount(){
    this.props.store
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <div className="bg-faded bg-1">
            <Navbar className="navbar" color='faded' light expand>
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
    let ret;
    if (this.state.loggedIn) ret =
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
      </Box>;

    return ret;
  }

  handleLogin() {
    // cookies.set('field', content, {path: '/'})
    this.props.store.dispatch()
  }

}

export default withCookies(connect(state => ({ ...state }))(App))
