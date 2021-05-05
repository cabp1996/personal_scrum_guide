
import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";
import { FadeTransform } from 'react-animation-components';
import { MainScreen } from '../screens/mainScreen';
import { TeamScreen } from '../screens/teamScreen';
import { EventsScreen } from '../screens/eventsScreen';
import { ArtifactScreen } from '../screens/artifactScreen';
import { Footer } from '../components/footer';

export const AppRouter = () => {
    return (
        <HashRouter basename='/'>
            <FadeTransform in transformProps={{ enterTransform: 'translateX(0px)' }}>
                <div className="container mt-5 mb-5">
                    <Switch>
                        <Route exact path="/" component={MainScreen} />
                        <Route exact path="/team" component={TeamScreen} />
                        <Route exact path="/events" component={EventsScreen} />
                        <Route exact path="/artifacts" component={ArtifactScreen} />
                    </Switch>
                </div>

                <Footer />
            </FadeTransform>
        </HashRouter>
    )
}
