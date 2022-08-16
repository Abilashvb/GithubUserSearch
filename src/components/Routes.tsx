import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';

const Routes: React.FunctionComponent = () => (
    <Router>
        <Layout>
            <Switch>
                <Route path="/" component={Dashboard} key="dashboard" />
            </Switch>
        </Layout>
    </Router>
)

export default Routes;