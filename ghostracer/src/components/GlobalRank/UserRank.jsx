import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Table,
} from 'reactstrap';

import UserRankRow from './UserRankRow.jsx';

class UserRank extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div>
            <Table striped>
                <thead><tr>
                    <th>#</th>
                    <th> Global Ranked </th>
                    <th> avg wpm </th>
                    <th> avg acc </th>
                </tr></thead>
                <tbody>
                    <UserRankRow></UserRankRow>
                    <UserRankRow></UserRankRow>
                    <UserRankRow></UserRankRow>
                </tbody>
           </Table>
        </div>
    )
  }
}

export default UserRank;
