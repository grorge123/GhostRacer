import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

class FriendList extends React.Component {
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  click(id) { this.props.onChange(id) }

  render() {
    let friends = this.props.friends.map(
      item => {
        return (
          <ListGroupItem key={item.ID}>
            <a href="#" onClick={this.click.bind(this, item.ID)}>
              {item.nickname}
            </a>
          </ListGroupItem>
        )
      }
    )
    return (
      <div><ListGroup>{friends}</ListGroup></div>
    )
  }
}

export default FriendList;
