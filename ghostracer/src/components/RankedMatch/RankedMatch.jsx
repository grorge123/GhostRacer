import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import UserStatistics from './UserStatistics.jsx';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import BackButton from '../BackButton/BackButton.jsx'

import { addStake, lessStake, setMode, getParagraph } from '../../states/play-actions.js';
import { getUserProfile } from '../../api/user.js'

import { preload } from '../Play/Preload';

class RankedMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countDown: 10,
            self: {
                "ID": "root",
                "speed": 1,
                "money": 0,
                "nickname": "root",
                "img": 4,
                "acc": 0,
                "todayRaces": 12,
                "lastThree": [0, 0, 1]
            },
            opponent: {
                "ID": "root",
                "speed": 1,
                "money": 0,
                "nickname": "root",
                "img": 4,
                "acc": 0,
                "todayRaces": 12,
                "lastThree": [0, 0, 1]
            }
        }
    }

    componentDidMount() {
        let handle = setInterval((() => {
            this.setState(prev => ({ ...prev, countDown: prev.countDown - 1 }))
            if (this.state.countDown == 0) {
                clearInterval(handle)
                this.props.setMode('multiple')
                preload(this.props.getParagraph, this.props.history)
                //this.props.history.push('/matchResult')
            }
        }).bind(this), 1000)

        getUserProfile(this.props.user.ID).then(
            ans => this.setState(prev => ({ ...prev, opponent: ans }))
        )

        getUserProfile(this.props.play.opponentID).then(
            ans => this.setState(prev => ({ ...prev, opponent: ans }))
        )
    }

    render() {
        const border = { 'borderStyle': 'solid' };
        const cent = { 'textAlign': 'center' };
        const mtop = { 'marginTop': '3rem' };
        return (
            <div>
                <BackButton />
                <Container><Row style={cent}>
                    <Col><UserStatistics info={this.state.self}></UserStatistics></Col>
                    <Col>
                        <Row><Col><h4>Countdown</h4></Col></Row>

                        <Row><Col><div style={border}>
                            <h2>{this.state.countDown}</h2>
                        </div></Col></Row>

                        <Row><Col><h3 style={mtop}>Your bet</h3></Col></Row>
                        <Row>
                            <Col>
                                <IconButton aria-label="delete" size="medium" onClick={this.props.add}>
                                    <i className="fas fa-arrow-circle-up"></i>
                                </IconButton>
                            </Col>
                            <Col>
                                <h3>{this.props.play.stakeSize}</h3>
                            </Col>
                            <Col>
                                <IconButton aria-label="delete" size="medium" onClick={this.props.less}>
                                    <i className="fas fa-arrow-circle-down"></i>
                                </IconButton>
                            </Col>
                        </Row>

                        <Row><Col><h3 style={mtop}>Coin Change</h3></Col></Row>
                        <Row>
                            <Col><i className="fas fa-arrow-down"></i><h5>{Math.floor(this.props.play.stakeSize / 2)}</h5></Col>
                            <Col><h3>{this.state.self.money}</h3></Col>
                            <Col><i className="fas fa-arrow-up"></i><h5>{this.props.play.stakeSize}</h5></Col>
                        </Row>
                    </Col>
                    <Col><UserStatistics info={this.state.opponent}></UserStatistics></Col>
                </Row></Container>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(addStake()),
        less: () => dispatch(lessStake()),
        setMode: (x) => dispatch(setMode(x)),
        getParagraph: (x) => dispatch(getParagraph(x))
    }
};

export default connect(state => ({
    ...state
}), mapDispatchToProps)(withRouter(RankedMatch));
