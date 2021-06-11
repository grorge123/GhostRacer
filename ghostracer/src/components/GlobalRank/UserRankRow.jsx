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
            <th scope="row"> 1st </th>
            <td> Uncle Roger </td>
            <td> 130 </td>
            <td> 99% </td>
        </tr>
    )
  }
}

export default UserRankRow;
