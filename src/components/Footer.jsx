import React from 'react';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__header">
                <h3 className="footer__header-text"></h3>
            </div>
            <div className="footer__horizontal-rule-container">
                <div className="footer__green-line"></div>
                <hr className="footer__horizontal-rule" />
                <div className="footer__green-line"></div>
            </div>
            <div className="footer__body">
                <h3 className="footer__body-text">&copy;2022 made by ryyax.</h3>
            </div>
        </div>
    );
}
