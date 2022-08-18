import React from "react";
import { ExclamationCircle } from 'react-bootstrap-icons';
import "../Style.css"
const ErrorMessage: React.FunctionComponent<IProps> = (props) => {

    return (
        <div className="errorHolder">
            <ExclamationCircle size={20} /> {props.errorMessage}
        </div>
    )
}

export default ErrorMessage;

interface IProps {
    errorMessage: string
}