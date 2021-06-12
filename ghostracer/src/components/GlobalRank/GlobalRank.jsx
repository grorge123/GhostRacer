import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { useSelector, useDispatch, useStore, connect } from 'react-redux'
import PropTypes from 'prop-types';
import { getTodayRaces } from '../../api/user.js';
import { getUserData } from '../../states/user-actions.js'

import UserRank from './UserRank.jsx';

class GlobalRank extends React.Component{
  constructor(props) {
    super(props);
  }
  
  abs(item) { return item > 0 ? item : -item; }

  render(){
    const centerize = { 'textAlign': 'center' };
    console.log(this.props)
    
    return(
        <div>
            <Container><Row>
                <Col>
                    <Table striped>
                        <thead>
                            <tr><th colSpan="3">
                                <h1 style={centerize}> [Your Statistics] </h1>
                            </th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><h3>Todays races</h3></td>
                                <td colSpan="2"><h1>ERROR</h1></td>
                            </tr>
                        
                            <tr>
                                <td><h3>Avg. Accuracy</h3></td>
                                <td colSpan="2"><h3>{this.props.play.accuracy}%</h3></td>
                            </tr>

                            <tr>
                                <td><h3>Avg. Speed</h3></td>
                                <td><h3>{this.props.play.speed} wpm</h3></td>
                                <td>
                                    <Row>
                                        <Col xs="1">
                                            <i className={
                                                this.props.play.speed > this.props.user.avgAccuracy ? 
                                                "fas fa-arrow-up" : 
                                                "fas fa-arrow-down"
                                            }></i>
                                        </Col>
                                        <Col>{
                                            this.abs(this.props.play.speed - this.props.user.avgAccuracy)
                                        } wpm</Col>
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>


                <Col>
                    <UserRank></UserRank>                
                </Col>
            </Row></Container>
        </div>
    )
  }
}

export default connect(state => ({
    ...state
}))(GlobalRank);

