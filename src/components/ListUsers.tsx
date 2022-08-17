import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import { GeoAltFill, Twitter, Link45deg, Building } from 'react-bootstrap-icons';
import './Style.css';
import AppContext from "../AppContext/AppContext";
import Counter from "./common/Counter";
import { Messages } from "../const/common";

const ListUsers: React.FunctionComponent = () => {
    const { activeUser } = useContext(AppContext);

    return (
        <Row xs={1} md={12} className="detailsHolder">
            <Col md="3"><img src={activeUser?.avatar_url} width="100px" className="profileImage" /></Col>
            <Col md="9">
                <div className="userInfoHolder">
                    <h1>{activeUser?.name}</h1>
                    <div className="subText">{activeUser?.created_at &&
                        `Joined ${new Date(activeUser.created_at).toDateString()}`}
                    </div>
                </div>
                <div className="login">{activeUser.login && `@${activeUser.login}`}</div>
                <div className={`${activeUser?.bio ? "bioHolder" : "bioNotFound"}`}>
                    {activeUser?.bio ? activeUser.bio : `This Profile has no bio`}
                </div>
                <Row md="12" className="userDataCount">
                    <Counter counterValue={activeUser?.public_repos || 0} title={"Repos"} />
                    <Counter counterValue={activeUser?.followers || 0} title={"Followers"} />
                    <Counter counterValue={activeUser?.following || 0} title={"Following"} />
                </Row>
                <Row md="12" className="footer">
                    <Col md="6" className={`${activeUser?.location ? "" : "itemNotFound"}`}>
                        <GeoAltFill size={16} /> {activeUser.location ?
                            activeUser.location : Messages.notAvailable}
                    </Col>
                    <Col md="6" className={`${activeUser?.twitter_username ? "" : "itemNotFound"}`}>
                        <Twitter size={16} /> {activeUser.twitter_username ?
                            activeUser.twitter_username : Messages.notAvailable}
                    </Col>
                    <Col md="6" className={`${activeUser?.blog ? "" : "itemNotFound"}`}>
                        <Link45deg size={16} /> {activeUser.blog ?
                            activeUser.blog : Messages.notAvailable}
                    </Col>
                    <Col md="6" className={`${activeUser?.company ? "" : "itemNotFound"}`}>
                        <Building size={16} />
                        {activeUser.company ?
                            <a href={getCompanyLink(activeUser.company)}> {activeUser.company}</a>
                            : Messages.notAvailable}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ListUsers;

const getCompanyLink = (link: string): string => {
    let companyLink = link;
    if (link.startsWith("@")) {
        const formatedText = link.slice(0, 1);
        companyLink = `https://github.com/${formatedText}`;

    }
    return companyLink;
}