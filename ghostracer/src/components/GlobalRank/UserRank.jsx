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

import UserRankRow from './UserRankRow.jsx';

class UserRank extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col> Global Ranked </Col>
                    <Col> avg wpm </Col>
                    <Col> avg acc </Col>
                </Row>
                <UserRankRow></UserRankRow>
                <UserRankRow></UserRankRow>
                <UserRankRow></UserRankRow>
            </Container>
        </div>
    )
  }
}

export default UserRank;
