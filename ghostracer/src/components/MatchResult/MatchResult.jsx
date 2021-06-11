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


class MatchResult extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render(){
    const mtop = { 'marginTop': '1rem' };
    const m2top = { 'marginTop': '2rem', 'fontSize': '1.5rem' };
    const cent = { 'textAlign': 'center' };
    return(
            <div>
                <Container><Row style={cent}>
                    <Col>
                        <Row style={mtop}><Col>
                            <img src="https://i.pinimg.com/474x/39/17/1f/39171fff9e994180efbe7e7f320af67e.jpg" />
                        </Col></Row>
                        <Row style={mtop}>
                            <Col>Coins</Col>
                            <Col xs="1"><i className="fas fa-arrow-up"></i></Col>
                            <Col>50</Col>
                            <Col>1,550</Col>
                        </Row>
                        <Row style={mtop}>
                            <Col>Rank</Col>
                            <Col xs="1"><i className="fas fa-arrow-up"></i></Col>
                            <Col>20</Col>
                            <Col>1,161</Col>
                        </Row>                       
                        <Row style={mtop}>
                            <Col><Button>Continue</Button></Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row style={m2top}><Col><h1>YOU WIN!</h1></Col></Row>
                        <Row style={m2top}>
                            <Col>Time</Col>
                            <Col>1:03</Col>
                            <Col>></Col>
                            <Col>1:05</Col>
                        </Row>
                        <Row style={m2top}>
                            <Col>WPM</Col>
                            <Col>75</Col>
                            <Col>></Col>
                            <Col>71</Col>
                        </Row>
                        <Row style={m2top}>
                            <Col>Acc</Col>
                            <Col>80</Col>
                            <Col>></Col>
                            <Col>90</Col>
                        </Row>
                    </Col>
                </Row></Container>
            </div>
    )
  }
}

export default MatchResult;
