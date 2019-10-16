import React from 'react';
import Link from 'link-react';
import Navbar from 'react-bootstrap/Navbar'

const Nav = () => {
    return (
        <div className="Nav">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Taylor Lacerte</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">
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

export default Nav