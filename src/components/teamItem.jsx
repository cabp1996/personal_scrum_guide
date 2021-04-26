import React from 'react'

export const TeamItem = ({ name, description, functions }) => {
    return (
        <div className="card card-secondary mb-3">
            <div className="card-header">{name}</div>
            <div className="card-body">
                <p>{description}</p>
                <hr />
                <div className="text-center">
                    <strong> <i class="fa fa-check" aria-hidden="true"></i> Funciones
                </strong>
                </div>
                <ul>
                    {functions.map((func) => {
                        return (
                            <li
                                key={func.substring(0, 5)}
                            >{func}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
