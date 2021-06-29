import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';

import { connect } from 'react-redux'
import { withRouter } from "react-router";

import Arrow from '../Arrows/arrows.jsx';
import { rankLadder, updateLadder, changeMoney } from '../../api/ladder.js'
import Avatar from '../Avatar/avatar.jsx';
import { getUserProfile } from '../../api/user.js';

class MatchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rank: 0, gainedRank: 0, coin: 0, gainedCoin: 0 }
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        updateLadder(this.props.user.ID, {
            speed: this.props.play.speed,
            hash: this.props.input.hash,
            money: this.props.play.stakeSize,
            win: this.props.play.gameResult
        }).then(
            ans => this.setState(prev => ({ ...prev, gainedRank: parseInt(ans.result) }))
        )

        rankLadder(this.props.user.ID, {
            speed: this.props.play.speed,
            hash: this.props.input.hash,
            money: this.props.play.stakeSize
        }).then(
            ans => this.setState(prev => ({ ...prev, rank: parseInt(ans.result) }))
        )
        
        getUserProfile(this.props.user.ID).then(
            ans => this.setState(prev => ({ ...prev, coin: ans.money }))
        ).then(() => {
            changeMoney(this.props.user.ID, {
                delta: this.state.gainedCoin
            })  
        })

        this.setState({
            gainedCoin: this.props.play.gameResult ? this.props.play.stakeSize : -Math.floor(this.props.play.stakeSize / 2)
        })
    }

    abs(x) { return x > 0 ? x : -x; }

    trinityComparision(x) {
        if (x == 0) return '=';
        if (x > 0) return '>';
        if (x < 0) return '<';
    }

    submit() {
        this.props.history.push('/')
    }

    render() {
        console.log(this.state)
        const mtop = { 'marginTop': '1rem' };
        const m2top = { 'marginTop': '2rem', 'fontSize': '1.5rem' };
        const cent = { 'textAlign': 'center' };
        return (
            <div>
                <Container><Row style={cent}>
                    <Col>
                        <Row style={mtop}><Col>
                            <Avatar width={"20rem"} id={this.props.user.avatar}></Avatar>
                        </Col></Row>
                        <Row style={mtop}>
                            <Col xs="4"></Col>
                            <Col xs="1">Coins</Col>
                            <Col xs="1" style={{ textAlign: 'right', padding: '0px' }}>
                                <Arrow a={this.state.gainedCoin} b={0}>
                                </Arrow>
                            </Col>
                            <Col xs="1" style={{ textAlign: 'left', paddingLeft: '0.2rem' }}>
                                {this.abs(this.state.gainedCoin)}
                            </Col>
                            <Col xs="1"><u>
                                {Math.max(0, this.state.gainedCoin + this.state.coin)}
                            </u></Col>
                        </Row>
                        <Row style={mtop}>
                            <Col xs="4"></Col>
                            <Col xs="1">Rank</Col>
                            <Col xs="1" style={{ textAlign: 'right', padding: '0px' }}>
                                <Arrow a={this.props.play.gainedRank} b={0}>
                                </Arrow>
                            </Col>
                            <Col xs="1" style={{ textAlign: 'left', paddingLeft: '0.2rem' }}>
                                {this.abs(this.state.gainedRank)}
                            </Col>
                            <Col xs="1"><u>
                                {this.state.gainedRank + this.state.rank}
                            </u></Col>
                        </Row>
                        <Row style={mtop}>
                            <Col><Button onClick={this.submit}>Continue</Button></Col>
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
                            <Col>{this.props.play.accuracy}%</Col>
                            <Col>
                                {this.trinityComparision(this.props.play.accuracy - this.props.play.opponentAccuracy)}
                            </Col>
                            <Col>{this.props.play.opponentAccuracy}%</Col>
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
