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

import UserRank from './UserRank.jsx';

class GlobalRank extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render(){
    const centerize = { 'text-align': 'center' };
    return(
        <div>
            <Container><Row>
                <Col>
                    <Row><Col>
                        <h1 style={centerize}> [Your Statistics] </h1>
                    </Col></Row>
                    
                    <Row><Col>
                        <Row>
                            <Col><h3>Todays races</h3></Col>
                            <Col><h1>7</h1></Col>
                        </Row>
                    </Col></Row>
                    
                    <Row><Col>
                        <Row>
                            <Col><h3>Avg. Accuracy</h3></Col>
                            <Col><h3>80%</h3></Col>
                            <Col></Col>
                        </Row>
                    </Col></Row>

                    <Row><Col>
                        <Row>
                            <Col><h3>Avg. Speed</h3></Col>
                            <Col><h3>73 wpm</h3></Col>
                            <Col>
                                <Row>
                                    <Col xs="1">
                                        <i className="fas fa-arrow-down"></i>
                                        {/* <i className="fas fa-arrow-up"></i> */}
                                    </Col>
                                    <Col>73 wpm</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col></Row>
                </Col>


                <Col>
                    <UserRank></UserRank>                
                </Col>
            </Row></Container>
        </div>
    )
  }
}

export default GlobalRank;
