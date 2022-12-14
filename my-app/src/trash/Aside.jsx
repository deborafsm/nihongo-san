import React, { useState }  from 'react'
import {
  ContainerAside
,MenuItemLink
} from './styleAside';
import menu from './menu.css'
import { FaFileAlt, FaHome, FaFolderOpen, FaUserPlus, FaUsers, FaUserCircle, FaFolderPlus, FaRegBuilding, FaListAlt } from 'react-icons/fa';
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';
const Aside = () => {
  
  
  return (
    <>
      <ContainerAside className="Menu">
        <Navbar expand={false}>
            <Container fluid>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-4 pe-2">
                        <NavDropdown id="offcanvasNavbarDropdown">
                            <NavDropdown.Item ><FaFileAlt /><MenuItemLink href="/home"> <p>CreateTest </p></MenuItemLink></NavDropdown.Item>
                            <NavDropdown.Item ><FaFileAlt /><MenuItemLink href="/monografos"> LISTA</MenuItemLink></NavDropdown.Item>
                            <NavDropdown.Item ><FaFileAlt /><MenuItemLink href="/digrafos"> ReaderTest</MenuItemLink></NavDropdown.Item>
                            <NavDropdown.Item ><FaFileAlt /><MenuItemLink href="/germinados"> ReaderTest</MenuItemLink></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
            </Container>
        </Navbar>

    </ContainerAside>
    </>
  );
};
export default Aside;
