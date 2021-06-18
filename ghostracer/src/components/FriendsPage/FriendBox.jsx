import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import Arrow from '../Arrows/arrows.jsx'

class FriendBox extends React.Component{
  static propTypes = {
    name: PropTypes.string,
    wpm: PropTypes.number,
    acc: PropTypes.number,
    last: PropTypes.array
  }

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
    let winlose = this.props.last.map(
      item => (
        <Col xs="2">
          <label style={item ? green : red}> 
            {item ? 'W' : 'L'} 
          </label>
        </Col>
      )
    )

    return(
            <div>
                <Container>
                    <div><Row><Col><h3 style={text_center}>
                      {this.props.name}
                    </h3></Col></Row></div>
                    <div><Row>
                        <Col xs="6"><label style={text_center}> WPM </label></Col>
                        <Col><label style={text_center}> {this.props.wpm} </label></Col>
                        <Col><label style={text_center}> 
                          <Arrow a={this.props.user.avgSpeed} b={this.props.wpm}></Arrow>
                        </label></Col>
                    </Row>
                    <Row>
                        <Col xs="6"><label style={text_center}> ACC  </label></Col>
                        <Col><label style={text_center}> {this.props.acc}  </label></Col>
                        <Col><label style={text_center}> 
                         <Arrow a={this.props.user.avgAccuracy} b={this.props.acc}></Arrow>
                        </label></Col>
                    </Row>          
                    <Row>
                        <Col xs="6"><label style={text_center}> Last </label></Col>
                        {winlose}
                    </Row></div>
                </Container>
            </div>
    )
  }
}

export default connect(state => ({
  ...state
}))(FriendBox);
