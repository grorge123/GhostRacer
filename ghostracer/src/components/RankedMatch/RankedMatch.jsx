import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import UserStatistics from './UserStatistics.jsx';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { connect, useDispatch } from 'react-redux'
import { withRouter } from "react-router";

import { addStake, lessStake } from '../../states/play-actions.js';
import { rankLadder } from '../../api/ladder.js'
import { getUserProfile } from '../../api/user.js'

class RankedMatch extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
    this.state = { 
        countDown: 10, 
        rank: -1,
        self: {},
        opponent: {}
    }
  }

  componentDidMount() {
      let handle = setInterval((() => {
        this.setState(prev => ({...prev, countDown: prev.countDown - 1}))
        if(this.state.countDown == 0) {
            clearInterval(handle)
            // this.props.history.push('/typingScreen')
        }
      }).bind(this), 1000)

      rankLadder(this.props.user.ID).then(
          ans => this.setState(prev => ({ ...prev, rank: ans.result }))
      )

      getUserProfile(this.props.user.ID).then(
        ans => this.setState(prev => ({ ...prev, self: ans }))
      )

      getUserProfile("lawrence").then(
        ans => this.setState(prev => ({ ...prev, opponent: ans }))
      )
  }

  render() {
    console.log(this.state)
    const border = {'borderStyle': 'solid'};
    const cent = {'textAlign': 'center'};
    const mtop = {'marginTop': '3rem'};
    return(
            <div>
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

                        <Row><Col><h3 style={mtop}>Rank Change</h3></Col></Row>
                        <Row>
                            <Col><i className="fas fa-arrow-down"></i><h5>17</h5></Col>
                            <Col><h3>{this.state.rank}</h3></Col>
                            <Col><i className="fas fa-arrow-up"></i><h5>20</h5></Col>
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
        less: () => dispatch(lessStake())
    }
};

export default connect(state => ({
    ...state
}), mapDispatchToProps)(withRouter(RankedMatch));
