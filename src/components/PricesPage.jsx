import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPrices } from '../asyncFunctions/asyncPrices';
import { getServices } from '../asyncFunctions/asyncServices';
import { mainURL } from '../constants/constants';

export default function PricesPage() {
    const [prices, setPrices] = useState([]);
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getPrices().then((data) => {
            setPrices(data);
        });
        getServices().then((data) => setServices(data));
    }, []);

    function getPrice(title) {
        for (let obj of prices) {
            if (obj.title === title) {
                return obj.price;
            }
        }
    }

    return (
        <div className="servicespage">
            <div className="container servicespage__container">
                <h1 className="servicespage__title">Ціни у нашому автосервісі</h1>
                <button className="servicespage__prices-button" onClick={() => navigate(mainURL + 'makeanappointment')}>
                    Записатись на СТО
                </button>

                <div className="servicespage__services">
                    {services.map((service) => {
                        return (
                            <div className="prices-item">
                                <div className="container prices-item__container">
                                    <h2 className="prices-item__title">{service.title}</h2>
                                    <div className="prices-item__items">
                                        {service.services.map((service) => {
                                            return (
                                                <div className="prices-item__item">
                                                    <div className="prices-item__item-title">{service}</div>
                                                    <div className="prices-item__item-price">{getPrice(service)}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
