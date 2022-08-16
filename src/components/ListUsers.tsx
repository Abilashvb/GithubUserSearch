import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import { GeoAltFill, Twitter, Link45deg, Building } from 'react-bootstrap-icons';
import AppContext from "../AppContext/AppContext";
import Counter from "./common/Counter";
import { Messages } from "../const/common";

const ListUsers: React.FunctionComponent = () => {
    const { initialUser } = useContext(AppContext);

    return (
        <Row xs={1} md={12}>
            <Col md="3"><img src={initialUser?.avatar_url} width="100px" /></Col>
            <Col md="9">
                <div className="userInfoHolder">
                    <div>{initialUser?.name}</div>
                    <div>{initialUser?.created_at &&
                        `Joined at ${new Date(initialUser.created_at).toJSON().slice(0, 10)}`}
                    </div>
                    <div>{initialUser?.login}</div>
                    <div className="userBio">
                        {initialUser?.bio ? initialUser.bio : `This Profile has no bio`}
                    </div>
                </div>
                <Row md="12" className="userDataCount">
                    <Counter counterValue={20} title={"Repos"} />
                    <Counter counterValue={3426} title={"Followers"} />
                    <Counter counterValue={4} title={"Following"} />
                </Row>
                <Row md="12" className="userDataCount">
                    <Col md="6">
                        <GeoAltFill size={16} /> {initialUser.location ?
                            initialUser.location : Messages.notAvailable}
                    </Col>
                    <Col md="6">
                        <Twitter size={16} /> {initialUser.twitter_username ?
                            initialUser.twitter_username : Messages.notAvailable}
                    </Col>
                    <Col md="6"><Link45deg size={16} /> {initialUser.blog ?
                        initialUser.blog : Messages.notAvailable}
                    </Col>
                    <Col md="6"><Building size={16} />
                        {initialUser.company ?
                            <a href={getCompanyLink(initialUser.company)}> {initialUser.company}</a>
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