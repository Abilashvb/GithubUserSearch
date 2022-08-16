import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Style.css';
import { Link } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";


const Layout: React.FunctionComponent = (props) => {

    useEffect(() => {
        document.title = 'GitHub User Search';
    }, []);

    return (
        <Container>
            <div className="layoutBody">
                <Row>
                    <Col className="navHeader">
                        <div>DevFinder</div>
                        <div>Light</div>
                    </Col>
                </Row>
                <Row>
                    {props.children}
                </Row>
            </div>
        </Container>
    )
}

export default Layout;