import React, {useState} from "react";
import {Navbar, Nav, Modal, Button} from "react-bootstrap";
import logo from "../../assets/logo.svg";

const TXT = {
    modalClose: "Close",
    modalTitle: "Credits for the original idea",
    modalOk: "Check it out on Youtube",
    modalCancel: "Maybe later...",
    modalText: "This application is fully inspired by a Youtube video that I" +
        " stumbled upon in 2021. The video itself is very well made and really" +
        " well explained (it's in French). " +
        " The idea is actually a lot simpler than it looks, and that's why" +
        " these figures are so amazing. Basically these are only" +
        " graphical representations of our good old multiplication" +
        " tables. If you wish to learn more about these, I strongly encourage " +
        " you to check it out if you are at all interested.",
};

export const AppHeader = () =>
{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const itemHome = (
        <Navbar.Brand className="header-app-item">
            Multi(×)Bloom
        </Navbar.Brand>);

    const itemLogo = (
        <Navbar.Brand className="header-app-item">
            <Nav.Link
                style={{margin: '0', padding: '0'}}
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer">
                <img src={logo}
                     className="App-logo"
                     height={36}
                     alt="logo"/>
                Powered by ReactJS
            </Nav.Link>
        </Navbar.Brand>);

    const modal = (
        <Modal show={show}
               onHide={handleClose}
               animation={false}>
            <Modal.Header closeButton closeLabel={TXT.modalClose}>
                <Modal.Title>{TXT.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{TXT.modalText}</p>
                <p><small>This webapp was developped by Damien Aholou (that's me :) )</small></p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>
                    {TXT.modalCancel}
                </Button>
                <a href={"https://www.youtube.com/watch?v=-X49VQgi86E&ab_channel=Micka%C3%ABlLaunay"}
                   target="_blank"
                   rel="noreferrer"
                   className="btn btn-outline-success">
                    {TXT.modalOk}
                </a>
            </Modal.Footer>
        </Modal>
    );

    const itemCredits = (
        <Navbar.Brand className="header-app-item">
            <Button onClick={handleShow} variant={"outline-info"}>
                Inspired by...
            </Button>
            {modal}
        </Navbar.Brand>);

    return (
        <Navbar bg="dark" variant="dark"
                className="justify-content-between fixed-top header-app"
                expand="sm">
            {itemHome}
            {itemCredits}
            {itemLogo}
        </Navbar>
    );
}
