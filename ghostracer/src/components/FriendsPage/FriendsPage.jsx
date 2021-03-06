import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';
import './Button.css';

import FriendBox from './FriendBox.jsx';
import FriendList from './FriendList.jsx';
import Avatar from '../Avatar/avatar.jsx'

import { getUserProfile } from '../../api/user.js';
import { addFriend, getFriendList } from '../../api/friend.js';
import { preload } from '../Play/Preload';

import { setOpponent, setMode, getParagraph } from '../../states/play-actions.js'
import { connect } from 'react-redux'
import { withRouter } from "react-router";

class FriendsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: {},
            showIndex: undefined,
            addFriendId: ""
        }
        this.changeShown = this.changeShown.bind(this)
        this.challenge = this.challenge.bind(this)
        this.addFriendHandler = this.addFriendHandler.bind(this)
        this.handleChangeFriendId = this.handleChangeFriendId.bind(this)
        this.load = this.load.bind(this)

        console.log(this.props.user)
    }

    challenge() {
        if (this.state.showIndex == undefined) {
            this.props.setMode('single')
            preload(this.props.getParagraph, this.props.history)
        } else this.props.history.push('/rankedMatch')
    }

    changeShown(id) {
        console.log(this.state, this.props)
        this.props.setOpponent({
            opponentID: id,
            opponentSpeed: this.state.friends[id].speed,
            opponentTime: 60 / this.state.friends[id].speed,
            opponentAccuracy: this.state.friends[id].acc
        })
        this.setState({
            ...this.state,
            showIndex: id
        })
    }

    handleChangeFriendId(e) { this.setState({ addFriendId: e.target.value }) }

    addFriendHandler() {
        addFriend(this.props.user.ID, this.state.addFriendId).then(
            this.load
        )
    }

    load() {
        this.setState({
            friends: {},
            showIndex: undefined,
            addFriendId: "",
            img: 2
        })
        getFriendList(this.props.user.ID).then(
            result => {
                for (var i = 0; i < result.len; i++) {
                    getUserProfile(result['friend' + i.toString()]).then(
                        ans => {
                            this.setState(
                                prev => ({
                                    friends: {
                                        ...prev.friends,
                                        [ans.ID]: ans
                                    }
                                })
                            )
                        }
                    )
                }
            }
        )
    }

    componentDidMount() { this.load(); }

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
            name: "Choose a friend to challenge",
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
                last: this.state.friends[this.state.showIndex].lastThree,
                img: this.state.friends[this.state.showIndex].img
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
                                        <Avatar width={'15rem'} id={2}></Avatar>
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
                    <hr></hr>
                    <Row><Col>
                        <Row><Col><input placeholder="Input User ID" value={this.addFriendId} onChange={this.handleChangeFriendId} /></Col></Row>
                        <Row><Col><Button onClick={this.addFriendHandler}>Add Friend</Button></Col></Row>
                    </Col></Row>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOpponent: (x) => dispatch(setOpponent(x)),
        setMode: (x) => dispatch(setMode(x)),
        getParagraph: (x) => dispatch(getParagraph(x))
    }
};

export default connect(state => ({
    ...state
}), mapDispatchToProps)(withRouter(FriendsPage));

