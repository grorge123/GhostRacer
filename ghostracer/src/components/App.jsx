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
  Switch
} from 'react-router-dom';

import Login from './Login.jsx';
import FriendsPage from './FriendsPage/FriendsPage.jsx';
import GlobalRank from './GlobalRank/GlobalRank.jsx';
import MatchResult from './MatchResult/MatchResult.jsx';
import RankedMatch from './RankedMatch/RankedMatch.jsx';

import './App.css';

class App extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router>
            <Switch>
                <Route path="/friendsPage">
                    <FriendsPage></FriendsPage>
                </Route>

                <Route path="/globalRank">
                    <GlobalRank></GlobalRank>
                </Route>

                <Route path="/matchResult">
                    <MatchResult></MatchResult>
                </Route>

                <Route path="/rankedMatch">
                    <RankedMatch></RankedMatch>
                </Route>
            </Switch>
        </Router>
    );
  }
}

export default App;
