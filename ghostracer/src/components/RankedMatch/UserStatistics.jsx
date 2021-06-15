import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Avatar from '../Avatar/avatar.jsx'

class UserStatistics extends React.Component {
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render() {
    const left = { 'textAlign': 'left' };
    const right = { 'textAlign': 'right' };
    return (
      <Container>
        <Row><Col><h1>{this.props.info.nickname}</h1></Col></Row>
        <Row><Col><Avatar width={'20rem'} id={this.props.info.img}></Avatar></Col></Row>
        <hr />
        <Row>
          <Col style={left}>Avg Speed</Col>
          <Col xs="3" style={right}>{this.props.info.speed}</Col>
        </Row>
        <Row>
          <Col style={left}>Avg Accuracy</Col>
          <Col xs="3" style={right}>{this.props.info.acc}</Col>
        </Row>
        <Row>
          <Col style={left}>Last 3</Col>
          <Col xs="1" style={right}>W</Col>
          <Col xs="1" style={right}>L</Col>
          <Col xs="1" style={right}>W</Col>
        </Row>
      </Container>
    )
  }
}

export default UserStatistics;
