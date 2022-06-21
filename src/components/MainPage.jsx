import React from 'react';
import AppointmentForm from './AppointmentFrom';

export default function MainPage() {
    return (
        <div className="mainpage">
            <div className="mainpage-header">
                <img
                    src="https://pro-sto.lviv.ua/templates/auto-servis/images/home-1-2048x819.jpg"
                    alt=""
                    className="bgimage"
                />
                <div className="container mainpage-header__container">
                    <div>
                        <h1 className="mainpage-header__title text-shadow">Діагностика авто</h1>
                        <h2 className="mainpage-header__subtitle text-shadow">Ми пропонуємо наступні послуги:</h2>
                        <ul className="mainpage-header__services">
                            <li className="mainpage-header__service">Комплексна діагностика підвіски</li>
                            <li className="mainpage-header__service">Діагностика двигуна</li>
                            <li className="mainpage-header__service">Діагностика електрообладнання</li>
                            <li className="mainpage-header__service">Перевірка кузова авто</li>
                        </ul>
                    </div>
                    <div className="mainpage-header__contact-form">
                        <AppointmentForm />
                    </div>
                </div>
            </div>
            <div className="mainpage-body">
                <div className="container mainpage-body__container">
                    <h1 className="mainpage-body__title">6 ПЕРЕВАГ НАШОГО СТО У ЛЬВОВІ:</h1>
                    <div className="mainpage-body__benefits">
                        <div className="mainpage-body__benefit">
                            <img src="https://pro-sto.lviv.ua/templates/auto-servis/images/pro-sto-1.svg" alt="" />
                            <div className="mainpage-body__benefit-title">ШВИДКЕ ОБСЛУГОВУВАННЯ</div>
                            <div className="mainpage-body__benefit-text">
                                Ніяких довгих черг, виконання послуг за мінімальний час.
                            </div>
                        </div>
                        <div className="mainpage-body__benefit">
                            <img src="https://pro-sto.lviv.ua/templates/auto-servis/images/pro-sto-2.svg" alt="" />
                            <div className="mainpage-body__benefit-title">НАЙКРАЩІ ЦІНИ</div>
                            <div className="mainpage-body__benefit-text">Пропонуємо ціни нижче, ніж у конкурентів</div>
                        </div>
                        <div className="mainpage-body__benefit">
                            <img src="https://pro-sto.lviv.ua/templates/auto-servis/images/pro-sto-3.svg" alt="" />
                            <div className="mainpage-body__benefit-title">ВИСОКИЙ ПРОФЕСІОНАЛІЗМ</div>
                            <div className="mainpage-body__benefit-text">
                                У нас кваліфіковані спеціалісти зі стажем від 5 років.
                            </div>
                        </div>
                        <div className="mainpage-body__benefit">
                            <img src="https://pro-sto.lviv.ua/templates/auto-servis/images/pro-sto-4.svg" alt="" />
                            <div className="mainpage-body__benefit-title">ВИГІДНІ ЗНИЖКИ</div>
                            <div className="mainpage-body__benefit-text">
                                Для постійних клієнтів ціни на послуги знижені до 10%.
                            </div>
                        </div>
                        <div className="mainpage-body__benefit">
                            <img src="https://pro-sto.lviv.ua/templates/auto-servis/images/pro-sto-5.svg" alt="" />
                            <div className="mainpage-body__benefit-title">ЩЕДРІ ПОДАРУНКИ</div>
                            <div className="mainpage-body__benefit-text">
                                Регулярно проводимо фінансово вигідні акції на послуги автосервісу.
                            </div>
                        </div>
                        <div className="mainpage-body__benefit">
                            <img src="https://pro-sto.lviv.ua/templates/auto-servis/images/pro-sto-6.svg" alt="" />
                            <div className="mainpage-body__benefit-title">ЯКІСНІ АВТОЗАПЧАСТИНИ</div>
                            <div className="mainpage-body__benefit-text">
                                Використовуємо + продаємо автозапчастини з Європи (Польщі, Німеччини та Литви)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
