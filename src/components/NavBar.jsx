import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <div className="Nav">
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Taylor Lacerte</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link>
                    <Link to='/'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                <Link to='/aboutme'>About Me</Link>
                </Nav.Link>
                <Nav.Link>
                <Link to='/projects'>Projects</Link>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar