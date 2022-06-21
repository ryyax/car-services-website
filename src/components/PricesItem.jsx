import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getServices } from '../asyncFunctions/asyncServices';

export default function PricesItem({ price }) {
    return (
        <div className="prices-item">
            <div className="container prices-item__container">
                <div className="prices-item__items"></div>
            </div>
        </div>
    );
}
