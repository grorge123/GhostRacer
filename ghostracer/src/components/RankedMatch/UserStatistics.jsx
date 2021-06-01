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


class UserStatistics extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render(){
    const cent = {'text-align': 'center'};
    return(
            <Container style={cent}>
                <Row><Col><h1>Software Studios</h1></Col></Row>
                <Row><Col><img src="https://i.pinimg.com/474x/c6/7f/d9/c67fd9080d3b0a28c508b50492078abf.jpg" /></Col></Row>
                <hr />
                <Row>
                    <Col>Avg Speed</Col>
                    <Col xs="3">65 WPM</Col>
                </Row>
                <Row>
                    <Col>Avg Accuracy</Col>
                    <Col xs="3">90%</Col>
                </Row>
                <Row>
                    <Col>Last 3</Col>
                    <Col xs="1">W</Col>
                    <Col xs="1">L</Col>
                    <Col xs="1">W</Col>
                </Row>
            </Container>
    )
  }
}

export default UserStatistics;
