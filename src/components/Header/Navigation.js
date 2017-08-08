import React from 'react';
import './Nav.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = { isOpen: false }
  // }

  // handleOpen = () => {
  //   this.setState({ isOpen: true })
  // }

  // handleClose = () => {
  //   this.setState({ isOpen: false })
  // }
  render() {

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Kiva</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {/* <NavDropdown
            onMouseEnter = { this.handleOpen }
            onMouseLeave = { this.handleClose }
            open={ this.state.isOpen }
            title="Lend" 
            className="menuItem" 
            href="/Lend"
          > */}
          <NavDropdown title="Lend">
            Categories
            <MenuItem>Women</MenuItem>
            <MenuItem>Agriculture</MenuItem>
            <MenuItem>Education</MenuItem>
            <MenuItem>Health</MenuItem>
            <MenuItem>Single Parents</MenuItem>
            <MenuItem>Refugees and IDPs</MenuItem>
            <MenuItem>Food</MenuItem>
            <MenuItem>Kiva U.S.</MenuItem>
            <MenuItem>Expiring Soon</MenuItem>
            <MenuItem>Social Enterprises</MenuItem>
            <MenuItem>Retail Businesses</MenuItem>
            <MenuItem>Arts</MenuItem>
            <MenuItem>Green</MenuItem>
            <MenuItem>Water and Sanitation</MenuItem>
            <MenuItem>Conflict Zones</MenuItem>
            <MenuItem>Men</MenuItem>
            <MenuItem>Underbanked Areas</MenuItem>
            <MenuItem>Groups</MenuItem>
            <MenuItem>Short-Term Loans</MenuItem>
            <MenuItem>All Categories</MenuItem>
            <MenuItem>All Loans</MenuItem>
          </NavDropdown>
          <NavDropdown 
            title="About" 
          >
            <MenuItem>About Us</MenuItem>
            <MenuItem>How Kiva Works</MenuItem>
            <MenuItem>Impact</MenuItem>
            <MenuItem>Leadership</MenuItem>
            <MenuItem>Finaces</MenuItem>
            <MenuItem>Press</MenuItem>
            <MenuItem>Due Diligence</MenuItem>
          </NavDropdown>
          <NavItem href="http://localhost:3001/auth/">Sign In</NavItem>
        </Nav>
      </Navbar>
    );
  }
}