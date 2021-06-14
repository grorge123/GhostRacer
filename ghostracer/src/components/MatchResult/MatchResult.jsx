import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';

import { connect } from 'react-redux'
import { withRouter } from "react-router";

import Arrow from '../Arrows/arrows.jsx';
import { rankLadder } from '../../api/ladder.js'

class MatchResult extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        rank: -1
    }
  }

  componentDidMount() {
      rankLadder(this.props.user.ID).then(
          result => this.setState({rank: result})
      )
  }

  abs(x) { return x > 0 ? x : -x; }
  
  trinityComparision(x) {
      if(x == 0) return '=';
      if(x > 0) return '>';
      if(x < 0) return '<';
  }

  render(){
    const mtop = { 'marginTop': '1rem' };
    const m2top = { 'marginTop': '2rem', 'fontSize': '1.5rem' };
    const cent = { 'textAlign': 'center' };
    return(
            <div>
                <Container><Row style={cent}>
                    <Col>
                        <Row style={mtop}><Col>
                            <img src="https://i.pinimg.com/474x/39/17/1f/39171fff9e994180efbe7e7f320af67e.jpg" />
                        </Col></Row>
                        <Row style={mtop}>
                            <Col xs="4"></Col>
                            <Col xs="1">Coins</Col>
                            <Col xs="1" style={{textAlign: 'right', padding: '0px'}}>
                                <Arrow a={this.props.play.gainedCoin} b={0}>
                                </Arrow>
                            </Col>
                            <Col xs="1" style={{textAlign: 'left', paddingLeft: '0.2rem'}}>
                                {this.abs(this.props.play.gainedCoin)}
                            </Col>
                            <Col xs="1"><u>
                                {this.abs(this.props.play.gainedCoin * this.props.play.stakeSize)}
                            </u></Col>
                        </Row>
                        <Row style={mtop}>
                            <Col xs="4"></Col>
                            <Col xs="1">Rank</Col>
                            <Col xs="1" style={{textAlign: 'right', padding: '0px'}}>
                                <Arrow a={this.props.play.gainedRank} b={0}>
                                </Arrow>
                            </Col>
                            <Col xs="1" style={{textAlign: 'left', paddingLeft: '0.2rem'}}>
                                {this.abs(this.props.play.gainedRank)}
                            </Col>
                            <Col xs="1"><u>
                                {this.abs(this.props.play.gainedRank * this.props.play.stakeSize)}
                            </u></Col>
                        </Row>                       
                        <Row style={mtop}>
                            <Col><Button>Continue</Button></Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row style={m2top}><Col><h1>
                            YOU {this.props.play.result ? 'WIN' : 'LOSE'}
                        </h1></Col></Row>
                        <Row style={m2top}>
                            <Col>Time</Col>
                            <Col>{this.props.play.time}</Col>
                            <Col>
                                {this.trinityComparision(this.props.play.time - this.props.play.opponentTime)}
                            </Col>
                            <Col>{this.props.play.opponentTime}</Col>
                        </Row>
                        <Row style={m2top}>
                            <Col>WPM</Col>
                            <Col>{this.props.play.speed}</Col>
                            <Col>
                                {this.trinityComparision(this.props.play.speed - this.props.play.opponentSpeed)}
                            </Col>
                            <Col>{this.props.play.opponentSpeed}</Col>
                        </Row>
                        <Row style={m2top}>
                            <Col>Acc</Col>
                            <Col>{this.props.play.accuracy}</Col>
                            <Col>
                                {this.trinityComparision(this.props.play.accuracy - this.props.play.opponentAccuracy)}
                            </Col>
                            <Col>{this.props.play.opponentAccuracy}</Col>
                        </Row>
                    </Col>
                </Row></Container>
            </div>
    )
  }
}

export default connect(state => ({
    ...state
}))(withRouter(MatchResult));
