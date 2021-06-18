import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
    BrowserRouter as Router, Route, Switch, Link
} from 'react-router-dom';

import ReachabilityNavigator from '@aws-amplify/core/lib-esm/Util/Reachability';

import './MainPage.css';
import MainButton from './MainButton.jsx';

const bgImageUrls = {
    story: '../images/intro-story.png',
    ranked: '../images/intro-ranked.png',
    quick: '../images/intro-quick.png'
}
class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"mainpage bg-2"}>
                <div className={'bg-dim'}>
                    <div className={"title"}>
                        <span className={'title1'}>Ghost</span>
                        <span className={'title2'}>Racer</span>
                    </div>
                    <div className={"menu-box"}>
                        <Link to='/play'>
                            <MainButton bg={bgImageUrls.story} text={'Story Mode'}></MainButton>
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

export default MainPage;