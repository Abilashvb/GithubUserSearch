import React, { useCallback, useContext, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { BrightnessHigh, Moon } from 'react-bootstrap-icons';
import './Style.css';
import { Col, Row } from "react-bootstrap";
import AppContext from "../AppContext/AppContext";

const Layout: React.FunctionComponent = (props) => {

    const { isLightTheme, setIsLightTheme } = useContext(AppContext);

    useEffect(() => {
        document.title = 'GitHub User Search';
    }, []);

    const onLightThemeClick = useCallback(() => {
        debugger;
        setIsLightTheme(true);
    }, []);

    const onDarkThemeClick = useCallback(() => {
        setIsLightTheme(false);
    }, []);

    return (
        <div className={isLightTheme ? "lightAppBody" : "darkAppBody"}>
            <Container>
                <div className="layoutBody">
                    <Row>
                        <Col className="navHeader">
                            <div>DevFinder</div>
                            {isLightTheme ? (
                                <div onClick={onDarkThemeClick}>
                                    <Moon size={16} /> Dark
                                </div>
                            ) : (
                                <div onClick={onLightThemeClick}>
                                    <BrightnessHigh size={16} /> Light
                                </div>

                            )}
                        </Col>
                    </Row>
                    <Row>
                        {props.children}
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Layout;