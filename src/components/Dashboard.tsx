import React, { useContext, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PageHeader from "./PageHeader";
import ListUsers from "./ListUsers";

const Dashboard: React.FunctionComponent = () => {

    return (
        <Container>
            <Row xs={1} md={12} className="topHeader">
                <PageHeader />
                <ListUsers />
            </Row>
        </Container>
    )
}

export default Dashboard;