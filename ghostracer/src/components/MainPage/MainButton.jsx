import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { PropTypes } from 'prop-types';

const styles = {
    root: {
        background: 'linear-gradient(90deg, rgba(0,0,0,0.2) 25%, rgba(128,128,128,0.8) 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        margin: '0 5% 3% 5%',
        height: '30%',
        width: '90%',
        color: 'white',
        fontSize: '2em',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        "&:hover": {
            background: props => `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${props.bg}) center center no-repeat`,
            borderColor: "#0062cc",
        },
    },
    label: {
        textTransform: 'capitalize',
        variant: 'outlined',
    }
}

class MainButton extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    }

    constructor(props){
        super(props)
        // console.log(this.props)
    }
    

    render() {
        return <Button classes={this.props.classes} onClick={this.props.onClick}>{this.props.text}</Button>
    }
}

export default withStyles(styles)(MainButton)

