import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Button
} from 'reactstrap';
import './Button.css';

import FriendBox from './FriendBox.jsx';
import FriendList from './FriendList.jsx';

class FriendsPage extends React.Component {
    // static propTypes = {
    //   loggedIn: PropTypes.bool
    // }

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        }
    }

    componentDidMount() {
        this.setState({ loggedIn: true }) // placeholder value
    }

    render() {
        const h5_style = {
            'text-align': 'center',
            'font-size': '4rem',
            'margin-bottom': '5rem'
        };
        const top_margin = {
            'margin-top': '5rem'
        };
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
                                        <FriendBox></FriendBox>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                            <div className="button-wrapper">
                                <button className="circle-button">Challenge!</button>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <div style={top_margin}><FriendList></FriendList></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default FriendsPage;
