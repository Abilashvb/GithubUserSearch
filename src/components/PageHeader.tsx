import React, { useCallback, useContext } from "react";
import { Button, Col, Form } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import AppContext from "../AppContext/AppContext";

const PageHeader: React.FunctionComponent = () => {
    const { onSearchClick } = useContext(AppContext);

    const onFormSubmit = useCallback((event: any) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        const formData = new FormData(event.target),
            formDataObj: any = Object.fromEntries(formData.entries());
        onSearchClick(formDataObj.searchText);

    }, []);

    return (
        <Form onSubmit={onFormSubmit}>
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