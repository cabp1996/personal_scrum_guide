
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { MainScreen } from '../screens/mainScreen';
import { TeamScreen } from '../screens/teamScreen';
import { FadeTransform } from 'react-animation-components';

export const AppRouter = () => {
    return (
        <Router>
            <FadeTransform in transformProps={{ enterTransform: 'translateX(0px)' }}>
                <div className="container mt-5 mb-5">
                    <Switch>
                        <Route exact path="/" component={MainScreen} />
                        <Route exact path="/team" component={TeamScreen} />
                    </Switch>
                </div>
            </FadeTransform>
        </Router>
    )
}
