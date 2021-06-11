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
  Button,
  Table
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
    const centerize = { 'textAlign': 'center' };
    return(
        <div>
            <Container><Row>
                <Col>
                    <Table striped>
                        <thead>
                            <tr><th colSpan="3">
                                <h1 style={centerize}> [Your Statistics] </h1>
                            </th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><h3>Todays races</h3></td>
                                <td colSpan="2"><h1>7</h1></td>
                            </tr>
                        
                            <tr>
                                <td><h3>Avg. Accuracy</h3></td>
                                <td colSpan="2"><h3>80%</h3></td>
                            </tr>

                            <tr>
                                <td><h3>Avg. Speed</h3></td>
                                <td><h3>73 wpm</h3></td>
                                <td>
                                    <Row>
                                        <Col xs="1">
                                            <i className="fas fa-arrow-down"></i>
                                            {/* <i className="fas fa-arrow-up"></i> */}
                                        </Col>
                                        <Col>73 wpm</Col>
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
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
