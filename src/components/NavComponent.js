// eslint-disable-next-line 
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Rickandmorty</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/search">Buscador</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default NavComponent