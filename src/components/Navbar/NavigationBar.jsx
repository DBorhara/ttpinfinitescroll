import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = (onChange, placeHolder) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#">O of Meow to the Ꝏ Power</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        ></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
