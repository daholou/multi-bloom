import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import logo from "../../assets/logo.svg";

export const AppHeader = () =>
{
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

    return (
        <Navbar bg="dark" variant="dark"
                className="justify-content-between fixed-top header-app"
                expand="sm">
            {itemHome}
            {itemLogo}
        </Navbar>
    );
}
