import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const PageHeader: React.FunctionComponent = () => {

    return (
        <Form>
            <Row xs={1} md={12}>
                <Col md="10">
                    <Form.Control
                        name={"searchText"}
                        required
                        type={"text"}
                        placeholder={"Search Users"}
                    />
                </Col>
                <Col md="2">
                    <Button
                        variant="secondary"
                        size="lg" className="footerBtn"
                        type="submit"
                    >
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default PageHeader;