import React from 'react';
import AppointmentForm from './AppointmentFrom';

export default function MakeAnAppointmentPage() {
    return (
        <div className="makeanappointmentpage">
            <div className="makeanappointmentpage__header">
                <img
                    src="https://www.blueridge.edu/wp-content/uploads/2020/02/ftr-automotive-mechanics-GI1165311626.jpg"
                    alt="automechanics"
                    className="bgimage"
                />
                <h1 className="text-shadow">Залиште нам свій номер телефону і ми вам перетелефонуємо!</h1>
                <AppointmentForm />
            </div>
            <h1 className="makeanappointmentpage__title">Переваги нашого автосервісу</h1>
            <div className="makeanappointmentpage__pluses">
                <div className="makeanappointmentpage__plus plus">
                    <h2 className="plus__title">ВІДГУКИ ВІД НАШИХ КЛІЄНТІВ</h2>
                    <div className="plus__text">
                        Автосервіс СТО Грам цінує своїх постійних клієнтів. Ми піклуємося, щоб ви завжди залишались
                        задоволені. Ми проводимо регулярні акції та знижки!
                    </div>
                </div>
                <div className="makeanappointmentpage__plus plus">
                    <h2 className="plus__title">КОМАНДНА РОБОТА НАШИХ СПЕЦІАЛІСТІВ</h2>
                    <div className="plus__text">
                        Допоможе Вам зекономити час та кошти. Ми проводимо комплексне обслуговування основних агрегатів
                        на нашому автосервісі.
                    </div>
                </div>
                <div className="makeanappointmentpage__plus plus">
                    <h2 className="plus__title">ДОСТУПНІ ЦІНИ ТА ШВИДКЕ ВИКОНАННЯ РОБІТ</h2>
                    <div className="plus__text">
                        Дозволяє нам збільшувати базу нових задоволених клієнтів і завжди радувати постійних.
                    </div>
                </div>
                <div className="makeanappointmentpage__plus plus">
                    <h2 className="plus__title">ВИСОКА ЯКІСТЬ АВТОЗАПЧАСТИН</h2>
                    <div className="plus__text">
                        Всі запчастини ми купляємо тільки на перевірених гуртівнях. Також доставляємо їх із-за кордону,
                        що дозволяє зберегти ваше авто від підробки.
                    </div>
                </div>
            </div>
        </div>
    );
}
