import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Table,
} from 'reactstrap';

import UserRankRow from './UserRankRow.jsx';
import { getLadder } from '../../api/ladder.js';
import { getUserProfile } from '../../api/user.js';

class UserRank extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
    this.state = {ranking: []}
  }

  componentDidMount() {
    getLadder("lawrence").then(
      ladder => Promise.all(
        JSON.parse(ladder).data
      ).then(
        result => result.map(
          item => getUserProfile(item.name).then(
            info => this.setState(prevState => ({
              ranking: [...prevState.ranking, info]
            }))
          )
        )
      )
    )
  }

  render() {
    console.log(this.state)
    let rows = []
    for(let i = 1;i <= this.state.ranking.length;i++) {
      let p = {"rank": i, ...this.state.ranking[i - 1]}
      rows.push(<UserRankRow key={i} info={p}></UserRankRow>)
    }
      
    return(
        <div>
            <Table striped>
                <thead><tr>
                    <th> Global Rank </th>
                    <th> name </th>
                    <th> avg wpm </th>
                    <th> avg acc </th>
                </tr></thead>
                <tbody>{rows}</tbody>
           </Table>
        </div>
    )
  }
}

export default UserRank;
