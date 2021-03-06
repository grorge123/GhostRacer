import React from 'react';
import PropTypes, { instanceOf, bool } from 'prop-types';

import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { withCookies, Cookies } from 'react-cookie';
import { Auth } from 'aws-amplify';

import { IconButton, Icon } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles, withStyles, styled } from '@material-ui/core/styles'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import MainButton from './MainButton.jsx';
import BackButton from '../BackButton/BackButton.jsx'
import './MainPage.css';

import { loginAction } from '../../states/user-actions.js';
import { StoreMallDirectoryRounded } from '@material-ui/icons';
import { randomArticle, randomOpponent } from '../../api/ladder.js';
import { setOpponent, setMode, getParagraph } from '../../states/play-actions.js';
import { preload } from '../Play/Preload.js';
import { getUserProfile } from '../../api/user.js';
import { getUserData } from '../../states/user-actions.js'

const bgImageUrls = {
    story: '../images/intro-story.png',
    ranked: '../images/intro-ranked.png',
    quick: '../images/intro-quick.png'
}

const UButton = styled(IconButton)({
    margin: 'auto',
    height: '2em',
    width: '2em',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#ffffff',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    }
})

class MainPage extends React.Component {
    static propTypes = {
        username: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            showProfile: false
        }
        console.log(props)
        this.userProfileDetail = this.userProfileDetail.bind(this)
        this.toggleShowProfile = this.toggleShowProfile.bind(this)
        this.signout = this.signout.bind(this)
        this.storyModePage = this.storyModePage.bind(this)
        this.rankedModePage = this.rankedModePage.bind(this)
        this.quickGamePage = this.quickGamePage.bind(this)
    }

    componentDidMount(){
        getUserProfile(this.props.user.ID).then(data => {
            this.props.dispatch(getUserData(data))
        }).catch(error => console.log('Error fetch user data from server. ', error))
    }

    signout(){
        Auth.signOut()
        this.props.dispatch(loginAction)
        window.location.reload()
    }

    toggleShowProfile(){
        console.log('show profile:', this.state.showProfile)
        this.setState({showProfile: !this.state.showProfile})
    }

    // page switch functions

    storyModePage(){
        // do stuff here first then switch screen
        this.props.setMode('multiple')
        randomArticle(this.props.user.ID).then(
            ans => this.props.getParagraph(ans)
        ).then(
            () => randomOpponent(this.props.user.ID, {
                ID: this.props.user.ID,
                Ladder: 0,
                hash: this.props.input.hash
            }).then(
                oppo => this.props.setOpponent({
                    opponentID: oppo.Opponent0,
                    opponentSpeed: oppo.Speed0,
                    opponentTime: Math.floor(60 / oppo.Speed0),
                    opponentAccuracy: 100
                })
            ).then(
                () => this.props.history.push('/typingScreen')
            )
        )
    }

    rankedModePage() { console.log("globalrank"); this.props.history.push('/globalRank') }

    quickGamePage(){
        this.props.setMode('single')
        preload(this.props.getParagraph, this.props.history)
    }

    // page switch functions end


    userProfileDetail() {
        let ret, classes;
        if (this.state.showProfile) classes = 'show'
        else classes = 'hide'
        if (this.props.user.loggedIn) ret =
            <Box className={`user-detail smooth ${classes}`}>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Max Speed (WPM)</TableCell>
                                <TableCell align="right">Coins</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={this.props.user.username}>
                                <TableCell component="th" scope="row">
                                    {this.props.user.username}
                                </TableCell>
                                <TableCell align="right">{this.props.user.maxSpeed}</TableCell>
                                <TableCell align="right">{this.props.user.money}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>;
        return ret;
    }

    render() {
        return (
            <div className={"mainpage bg-2"}>
                <div className={'bg-dim'}>
                    <div className={"title main-title"}>
                        <span className={'title1'}>GHOST</span>
                        <span className={'title2'}>RACER</span>
                    </div>
                    <div className={'nav'}>
                        <UButton onClick={this.toggleShowProfile}><AccountCircleIcon /></UButton>
                        <Link className={'nav-button'} to="/friends">
                            <UButton><PeopleIcon /></UButton>
                        </Link>
                        <UButton><SettingsIcon /></UButton>
                        <UButton onClick={this.signout}><ExitToAppIcon /></UButton>
                        {this.userProfileDetail()}
                    </div>
                    <div className={'greeting smooth'}>
                        <span>Hi, {this.props.user.username}</span>
                    </div>
                    <div className={"menu-box"}>
                        <MainButton
                            className={'menu-button'}
                            bg={bgImageUrls.story}
                            text={'Story Mode'}
                            onClick={this.storyModePage}
                        />
                        <MainButton
                            bg={bgImageUrls.ranked}
                            text={'Ranked Mode'}
                            onClick={this.rankedModePage}
                        />
                        <MainButton
                            bg={bgImageUrls.quick}
                            text={'Quick Game'}
                            onClick={this.quickGamePage}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        setOpponent: (x) => dispatch(setOpponent(x)),
        setMode: (x) => dispatch(setMode(x)),
        getParagraph: (x) => dispatch(getParagraph(x)),
    }
};

export default withCookies(connect(state => ({
    ...state,

}), mapDispatchToProps)(withRouter(MainPage)));