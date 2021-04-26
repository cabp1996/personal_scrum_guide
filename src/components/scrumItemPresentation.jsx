import React from 'react';

export const ScrumItemPresentation = ({ title, description, extra, icon, extraicon }) => {
    const descriptionIconClass = `fa ${icon}`;
    const descriptionExtraIconClass = `fa ${extraicon}`;
    return (
        <div className="mb-2">
            <div className="center">
                <h2>{title}</h2>
                <hr />
            </div>

            <div className="mr-5 ml-5">
                <p className="text-secondary"><i className={descriptionIconClass} aria-hidden="true"></i> {description}</p>

                {extra &&
                    <p className="text-secondary"><i className={descriptionExtraIconClass} aria-hidden="true"></i> {extra}</p>
                }
            </div>


        </div>
    );
}


