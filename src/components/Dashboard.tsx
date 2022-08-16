import React, { useContext, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { getInitialUsers } from "../services/userServices";


const Dashboard: React.FunctionComponent = () => {

    useEffect(() => {
        getInitialUsers();
    }, []);

    return (
        <Container>
            <Row xs={1} md={12} className="topHeader">
                <h3>Welcome..</h3>
            </Row>
        </Container>
    )
}

export default Dashboard;