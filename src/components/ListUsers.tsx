import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import { GeoAltFill, Twitter, Link45deg, Building } from 'react-bootstrap-icons';
import AppContext from "../AppContext/AppContext";
import Counter from "./common/Counter";
import { Messages } from "../const/common";

const ListUsers: React.FunctionComponent = () => {
    const { activeUser } = useContext(AppContext);

    return (
        <Row xs={1} md={12}>
            <Col md="3"><img src={activeUser?.avatar_url} width="100px" /></Col>
            <Col md="9">
                <div className="userInfoHolder">
                    <div>{activeUser?.name}</div>
                    <div>{activeUser?.created_at &&
                        `Joined at ${new Date(activeUser.created_at).toJSON().slice(0, 10)}`}
                    </div>
                    <div>{activeUser?.login}</div>
                    <div className="userBio">
                        {activeUser?.bio ? activeUser.bio : `This Profile has no bio`}
                    </div>
                </div>
                <Row md="12" className="userDataCount">
                    <Counter counterValue={activeUser?.public_repos || 0} title={"Repos"} />
                    <Counter counterValue={activeUser?.followers || 0} title={"Followers"} />
                    <Counter counterValue={activeUser?.following || 0} title={"Following"} />
                </Row>
                <Row md="12" className="userDataCount">
                    <Col md="6">
                        <GeoAltFill size={16} /> {activeUser.location ?
                            activeUser.location : Messages.notAvailable}
                    </Col>
                    <Col md="6">
                        <Twitter size={16} /> {activeUser.twitter_username ?
                            activeUser.twitter_username : Messages.notAvailable}
                    </Col>
                    <Col md="6"><Link45deg size={16} /> {activeUser.blog ?
                        activeUser.blog : Messages.notAvailable}
                    </Col>
                    <Col md="6"><Building size={16} />
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