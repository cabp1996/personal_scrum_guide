import React from 'react';

export const ArtifactItem = ({ name, points, extra }) => {
    return (
        <div className="card card-secondary mb-3">
            <div className="card-header">{name}</div>
            <div className="card-body">
                <strong>Descripción:</strong>

                <ul>
                    {points.map((point) => {
                        return (
                            <li
                                key={point.substring(0, 10)}
                            >{point}</li>
                        );
                    })}
                </ul>

                {extra &&
                    <p className="text-secondary">
                        {extra}
                    </p>
                }
            </div>
        </div>
    );
}
