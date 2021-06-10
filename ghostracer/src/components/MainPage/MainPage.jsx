import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles'

// styles
const useStyles = makeStyles({
    menuButtons: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
})

class MainPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={"mainpage"}>
                <div className={"title"}>
                    <span>Ghost</span>
                    <span>Racer</span>
                </div>
                <div className={"menu-box"}>
                    <div className={"menu-button "}></div>
                    <Button className={useStyles.menuButtons}>Play</Button>
                    <Button className={useStyles.menuButtons}>Friends</Button>
                    <Button className={useStyles.menuButtons}>Settings</Button>
                </div>
            </div>
        )
    }
}

export default MainPage;