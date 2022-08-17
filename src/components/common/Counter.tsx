import React from "react";
import { Col } from "react-bootstrap";
import "../Style.css"
const Counter: React.FunctionComponent<IProps> = (props) => {

    return (
        <Col md="4" className="counterHolder" key={props.title}>
            <div className="subText">{props.title}</div>
            <div>{props.counterValue}</div>
        </Col>
    )
}

export default Counter;

interface IProps {
    title: string;
    counterValue: number;
}