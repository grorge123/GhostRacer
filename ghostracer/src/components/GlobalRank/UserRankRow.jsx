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

class UserRankRow extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render(){
    const mbot = { 'margin-top': '1rem' };
    return(
        <div style={mbot}><Row>
            <Col> 1st </Col>
            <Col> Uncle Roger </Col>
            <Col> 130 </Col>
            <Col> 99% </Col>
        </Row></div>
    )
  }
}

export default UserRankRow;
