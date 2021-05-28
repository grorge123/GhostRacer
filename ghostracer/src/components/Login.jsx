import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

import './Login.css'

class Login extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidUpdate(){
        
    }

    render(){
        return (
            <Button color="primary">{(this.props.loggedIn) ? "Logout" : "Login"}</Button>
        )
    }
}

export default Login;
