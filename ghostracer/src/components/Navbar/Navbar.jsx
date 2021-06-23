import React from 'react'
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

export default function Navbar(props) {
    return (
        <Navbar className="navbar" color='faded' light expand>
            <div className='container'>
                <Collapse isOpen={this.props.navbarToggle} navbar>
                    <Nav navbar>
                        <NavbarBrand className='text-info' href="/">Ghost Racer</NavbarBrand>
                        <NavItem>
                            <NavLink tag={Link} to='/friends'>Friends</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/globalrank'>Global Rank</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/play'>Start Game</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/leaderboard'>Leaderboard</NavLink>
                        </NavItem>
                    </Nav>
                    <Login loggedIn={this.state.loggedIn} onClick={this.handleLogin}>Login</Login>
                    {this.userProfileDetail()}
                </Collapse>
            </div>
        </Navbar>
    )
}