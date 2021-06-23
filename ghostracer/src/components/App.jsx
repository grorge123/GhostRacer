import React from 'react';
import PropTypes, { instanceOf, bool } from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
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

import { getUserProfileAction, loginAction } from '../states/user-actions.js';

import { Auth, Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AmplifyGreeting, AmplifySignOut } from "@aws-amplify/ui-react";

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

    const { cookies } = props.cookies
    this.state = {
      loggedIn: false,
      username: 'Leon',
      maxspeed: 100
    }
    Auth.currentAuthenticatedUser().then(user => {
      let username;
      if (user.name) {
        // this.setState({ username: user.name });
        username = user.name
      }
      if (user.username) {
        // this.setState({ username: user.username });
        username = user.username
      }
      this.props.dispatch(loginAction(username))
    });
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    // this.props.store
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/" render={() => (
              <MainPage />
            )} />
            <Route exact path="/friends" render={() => (
              <FriendsPage />
            )} />
            <Route exact path="/typingScreen" render={() => (
              <Play />
            )} />
            <Route exact path="/globalrank" render={() => (
              <GlobalRank />
            )} />
            <Route exact path="/matchResult" render={() => (
              <MatchResult />
            )} />
            <Route exact path="/rankedMatch" render={() => (
              <RankedMatch />
            )} />
            <Route>
              <div><h1>Invalid Link</h1></div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }


  handleLogin() {
    // cookies.set('field', content, {path: '/'})
    loginAction();
    console.log('triggered')
  }

}

export default withAuthenticator(withCookies(connect(state => ({ ...state }))(App)))
