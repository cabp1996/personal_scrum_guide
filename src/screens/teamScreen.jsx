import React from 'react'
import { BackButton } from '../components/backButton'
import { FadeTransform } from 'react-animation-components';

export const TeamScreen = ({ history }) => {
    return (
        <FadeTransform in transformProps={{ enterTransform: 'translateX(0px)' }}>
            <div>
                <BackButton
                    history={history}
                />
                <h1>Team</h1>
            </div>
        </FadeTransform>
    );
}
