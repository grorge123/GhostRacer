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


class FriendsPage extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  componentDidMount(){
    this.setState({loggedIn: true}) // placeholder value
  }

  render(){
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        qwer                        
                    </Col>
                    <Col>
                        One of three columns
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}

export default FriendsPage;
