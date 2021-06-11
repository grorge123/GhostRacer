import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';
import FriendListItem from './FriendListItem.jsx';

class FriendList extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div>
            <ListGroup>
                <FriendListItem></FriendListItem>
                <FriendListItem></FriendListItem>
                <FriendListItem></FriendListItem>
                <FriendListItem></FriendListItem>
                <FriendListItem></FriendListItem>
                <FriendListItem></FriendListItem>
                <FriendListItem></FriendListItem>
            </ListGroup>
        </div>
    )
  }
}

export default FriendList;
