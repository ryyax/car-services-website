import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getServices } from '../asyncFunctions/asyncServices';
import ServiceItem from './ServiceItem';
import { mainURL } from '../constants/constants';

export default function ServicesPage() {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getServices().then((data) => setServices(data));
    }, []);

    return (
        <div className="servicespage">
            <div className="container servicespage__container">
                <h1 className="servicespage__title">Послуги автосервісу</h1>
                <button className="servicespage__prices-button" onClick={() => navigate(mainURL + 'prices')}>
                    Переглянути ціни
                </button>
                <div className="servicespage__services text-shadow">
                    {services.map((service) => (
                        <ServiceItem service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}
