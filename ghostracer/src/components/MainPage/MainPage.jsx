import React from 'react';
import PropTypes, { instanceOf, bool } from 'prop-types';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { withCookies, Cookies } from 'react-cookie';

import { IconButton, Icon } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles, withStyles, styled } from '@material-ui/core/styles'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import MainButton from './MainButton.jsx';
import BackButton from '../BackButton/BackButton.jsx'
import './MainPage.css';

import ReachabilityNavigator from '@aws-amplify/core/lib-esm/Util/Reachability';

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
        console.log(props)
        this.userProfileDetail = this.userProfileDetail.bind(this)
    }

    userProfileDetail() {
        let ret;
        if (this.props.user.loggedIn) ret =
            <Box className='user-detail smooth'>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Max Speed (WPM)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={this.props.user.username}>
                                <TableCell component="th" scope="row">
                                    {this.props.user.username}
                                </TableCell>
                                <TableCell align="right">{this.props.maxspeed}</TableCell>
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
                        <UButton><AccountCircleIcon /></UButton>
                        <UButton><PeopleIcon /></UButton>
                        <UButton><SettingsIcon /></UButton>
                        {this.userProfileDetail()}
                    </div>
                    <div className={'greeting smooth'}>
                        <span>Hi, {this.props.user.username}</span>
                    </div>
                    <div className={"menu-box"}>
                        <Link to='/play'>
                            <MainButton className={'menu-button'} bg={bgImageUrls.story} text={'Story Mode'}></MainButton>
                        </Link>
                        <Link to='/globalrank'>
                            <MainButton bg={bgImageUrls.ranked} text={'Ranked Mode'}></MainButton>
                        </Link>
                        <Link to='/play'>
                            <MainButton bg={bgImageUrls.quick} text={'Quick Game'}></MainButton>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withCookies(connect(state => ({
    ...state,

}))(MainPage));