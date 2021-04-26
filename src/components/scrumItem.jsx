import React from 'react';
import PropTypes from 'prop-types';

export const ScrumItem = ({ history, image, title, description, route }) => {
    const handleClick = () => {
        history.push(route);
    };

    return (

        <div className="card" onClick={handleClick}>
            <div className="card-image-container">
                <img className="card-img-top" src={image} alt={image} />
            </div>
            <div className="card-body">
                <h5 className="card-title center">{title}</h5>
                <hr />
                <p className="card-text">
                    {description}
                </p>
            </div>
        </div>
    )
}


ScrumItem.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
};
