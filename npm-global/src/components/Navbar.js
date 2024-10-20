// Navbar.js
import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuIcon from './assets/app.png'; // Update the path as needed

function NavigationBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Image icon to trigger Offcanvas */}
            <img
                src={MenuIcon}
                alt="Menu"
                className="nav-icon"
                onClick={handleShow}
                style={{ cursor: 'pointer', width: '45px', height: '45px', margin: '20px' }} // Adjust size and margin as needed
            />

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >NAVIGATION</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleClose}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={handleClose}>
                                ABOUT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills" onClick={handleClose}>
                                SKILLS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={handleClose}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default NavigationBar;
