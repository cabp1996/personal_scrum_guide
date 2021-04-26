import React from 'react'

export const BackButton = ({ history }) => {
    return (
        <div className="text-left mb-2">
            <button className="btn btn-danger btn-sm"
                onClick={() => history.goBack()}
            ><i className="fa fa-arrow-circle-o-left" aria-hidden="true"> Volver</i></button>
        </div>
    );
}
