import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
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

  render(){
    const h5_style = {
        'textAlign': 'center',
        'fontSize': '4rem',
        'marginBottom': '5rem'
    };
    const top_margin = {
        'marginTop': '1rem'
    };
    return(
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
