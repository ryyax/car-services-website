import React from 'react';
import { useState } from 'react';
import { postAppointment } from '../asyncFunctions/asyncAppointments';

export default function AppointmentForm() {
    const [modalClasses, setModalClasses] = useState(
        'appointment-form__modal-info appointment-form__modal-info_hidden'
    );

    function showModal() {
        setModalClasses('appointment-form__modal-info');
        setTimeout(hideModal, 3000);
    }

    function hideModal() {
        setModalClasses('appointment-form__modal-info appointment-form__modal-info_hidden');
    }

    return (
        <form
            className="appointment-form"
            onSubmit={(event) => {
                let phone = event.target.elements.phone.value;
                let message = event.target.elements.message.value;
                event.preventDefault();
                postAppointment(phone, message);
                event.target.elements.phone.value = '';
                event.target.elements.message.value = '';
                showModal();
            }}
        >
            <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                placeholder="Номер телефону у форматі 123-456-7890"
            />
            <textarea type="text" id="message" name="message" required placeholder="Повідомлення" />
            <input type="submit" id="submit" value="Записатись" />
            <div className={modalClasses}>Заявку прийнято, очікуйте на дзвінок, для уточнення деталей!</div>
        </form>
    );
}
