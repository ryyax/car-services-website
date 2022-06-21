import axios from 'axios';

const appointmentsURL = 'http://localhost:3000/appointments';

export async function postAppointment(phone, message) {
    axios.post(appointmentsURL, { id: Date.now(), phone, message });
}
