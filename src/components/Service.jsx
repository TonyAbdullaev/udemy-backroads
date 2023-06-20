import React from 'react';

const Service = ({ icon, title, description}) => {
    return (
        <article className="service" key={title}>
            <span className="service-icon"><i className={`fas ${icon} fa-fw`}></i></span>
            <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                    {description}
                </p>
            </div>
        </article>
    );
};

export default Service;