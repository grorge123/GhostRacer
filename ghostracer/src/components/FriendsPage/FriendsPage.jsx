import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import './Button.css';

import FriendBox from './FriendBox.jsx';
import FriendList from './FriendList.jsx';

import { getUserProfile } from '../../api/user.js';
import { getFriendList } from '../../api/friend.js';

import { setOpponent } from '../../states/play-actions.js'
import { connect } from 'react-redux'
import { withRouter } from "react-router";

class FriendsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: {},
            showIndex: undefined
        }
        this.changeShown = this.changeShown.bind(this)
        this.challenge = this.challenge.bind(this)
    }

    challenge() {
        if(this.state.showIndex == undefined)
        this.props.history.push('/typingScreen?mode=single')
        else
            this.props.history.push('/rankedMatch')
    }

    changeShown(id) {
        this.props.setOpponent(id)
        this.setState({
            ...this.state,
            showIndex: id
        })
    }

    componentDidMount() {
        getFriendList(this.props.user.ID).then(
            result => {
                for (var i = 0; i < result.len; i++) {
                    if(result['friend' + i.toString()] != this.props.user.ID)
                        getUserProfile(result['friend' + i.toString()]).then(
                            ans => this.setState(
                                prev => ({
                                    friends: {
                                        ...prev.friends,
                                        [ans.ID]: ans
                                    }
                                })
                            )
                        )
                }
            }
        )
    }

    render() {
        const h5_style = {
            'textAlign': 'center',
            'fontSize': '4rem',
            'marginBottom': '5rem'
        };
        const top_margin = { 'marginTop': '1rem' };
        let friendsList = []
        for (var i in this.state.friends)
            friendsList.push(this.state.friends[i])

        let friendBox = {
            name: "You have no friend",
            wpm: 0,
            acc: 0,
            last: [false, false, false]
        }

        if (this.state.showIndex !== undefined)
            friendBox = {
                ...friendBox,
                name: this.state.friends[this.state.showIndex].nickname,
                wpm: this.state.friends[this.state.showIndex].speed,
                acc: this.state.friends[this.state.showIndex].acc,
                last: this.state.friends[this.state.showIndex].lastThree
            }


        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Container>
                                <Row>
                                    <Col>
                                        <h5 style={h5_style}> Frenemies </h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FriendBox
                                            name={friendBox.name}
                                            wpm={friendBox.wpm}
                                            acc={friendBox.acc}
                                            last={friendBox.last}
                                        ></FriendBox>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                            <div className="button-wrapper">
                                <button
                                    className="circle-button"
                                    onClick={this.challenge}>Challenge!
                                </button>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <div style={top_margin}>
                                    <FriendList
                                        onChange={this.changeShown}
                                        friends={friendsList}>
                                    </FriendList>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOpponent: (x) => dispatch(setOpponent(x))
    }
};

export default connect(state => ({
    ...state
}), mapDispatchToProps)(withRouter(FriendsPage));

