import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';


class FriendList extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render(){
    return(
        <ListGroupItem>
            <a href="#">Cras justo odio</a>
        </ListGroupItem>
    )
  }
}

export default FriendList;
