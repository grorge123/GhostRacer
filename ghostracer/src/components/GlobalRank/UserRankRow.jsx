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

class UserRankRow extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render(){
    const mbot = { 'marginTop': '1rem' };
    return(
        <tr>
            <th scope="row"> #{this.props.info.rank} </th>
            <td> {this.props.info.nickname} </td>
            <td> {this.props.info.speed} </td>
            <td> {this.props.info.acc}% </td>
        </tr>
    )
  } 
}

export default UserRankRow;
