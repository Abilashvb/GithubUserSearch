import React from "react";
import { Col } from "react-bootstrap";

const Counter: React.FunctionComponent<IProps> = (props) => {

    return (
        <Col md="3" className="counterHolder" key={props.title}>
            <div>{props.title}</div>
            <div>{props.counterValue}</div>
        </Col>
    )
}

export default Counter;

interface IProps {
    title: string;
    counterValue: number;
}