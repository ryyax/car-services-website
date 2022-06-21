import React from 'react';

export default function ServiceItem({ service }) {
    return (
        <div className="service">
            <img src={service.imageURL} alt="service" className="bgimage" />
            <h2 className="service__title">{service.title}</h2>
            <ul className="service__items">
                {service.services.map((item) => {
                    return <li className="service__item">{item}</li>;
                })}
            </ul>
        </div>
    );
}
