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


class FriendBox extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render(){
    const text_center = {
        'textAlign': 'center',
        'width': '100%'
    };
    const red = { 'color': 'red', ...text_center };
    const green = { 'color': 'green', ...text_center };
    
    return(
            <div>
                <Container>
                    <div><Row><Col><h3 style={text_center}> Friend_7 </h3></Col></Row></div>
                    <div><Row>
                        <Col><label style={text_center}> WPM </label></Col>
                        <Col><label style={text_center}> 75  </label></Col>
                        <Col><label style={text_center}> =  </label></Col>
                    </Row>
                    <Row>
                        <Col><label style={text_center}> ACC  </label></Col>
                        <Col><label style={text_center}> 75  </label></Col>
                        <Col><label style={text_center}> 
                            <i className="fas fa-arrow-down"></i>
                            {/*<i className="fas fa-arrow-up"></i>*/}
                        </label></Col>
                    </Row>          
                    <Row>
                        <Col><label style={text_center}> Last </label></Col>
                        <Col xs="8">
                            <label style={green}> W </label>
                        </Col>
                    </Row></div>
                </Container>
            </div>
    )
  }
}

export default FriendBox;
