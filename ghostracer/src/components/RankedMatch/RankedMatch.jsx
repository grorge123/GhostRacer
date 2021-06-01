import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import UserStatistics from './UserStatistics.jsx';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class RankedMatch extends React.Component{
  // static propTypes = {
  //   loggedIn: PropTypes.bool
  // }

  constructor(props) {
    super(props);
  }

  render(){
    const border = {'border-style': 'solid'};
    const cent = {'text-align': 'center'};
    const mtop = {'margin-top': '3rem'};
    return(
            <div>
                <Container><Row style={cent}>
                    <Col><UserStatistics></UserStatistics></Col>
                    <Col>
                        <Row><Col><h4>Countdown</h4></Col></Row>
                        
                        <Row><Col><div style={border}>
                            <h2>8</h2>
                        </div></Col></Row>

                        <Row><Col><h3 style={mtop}>Your bet</h3></Col></Row>
                        <Row>
                            <Col>
                                <IconButton aria-label="delete" size="medium">
                                    <i className="fas fa-arrow-circle-up"></i>
                                </IconButton>
                            </Col>
                            <Col>
                                <h3>10</h3>
                            </Col>
                            <Col>
                                <IconButton aria-label="delete" size="medium">
                                    <i className="fas fa-arrow-circle-down"></i>
                                </IconButton>
                            </Col>
                        </Row>

                        <Row><Col><h3 style={mtop}>Rank Change</h3></Col></Row>

                    </Col>
                    <Col><UserStatistics></UserStatistics></Col>
                </Row></Container>
            </div>
    )
  }
}

export default RankedMatch;
