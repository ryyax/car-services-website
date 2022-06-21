import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { mainURL } from './constants/constants';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import MakeAnAppointmentPage from './components/MakeAnAppointmentPage';
import ServicesPage from './components/ServicesPage';
import PricesPage from './components/PricesPage';

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <div className="page-links">
                    <div className="page-links__logo-container">
                        <NavLink to={mainURL} className="page-links__logo">
                            CTO "Gramm"
                        </NavLink>
                    </div>
                    <div className="container page-links__container">
                        <NavLink to={mainURL + 'services'} className="page-links__link">
                            Послуги
                        </NavLink>
                        <NavLink to={mainURL + 'prices'} className="page-links__link">
                            Ціни
                        </NavLink>
                        <NavLink to={mainURL + 'makeanappointment'} className="page-links__link">
                            Записатись на СТО
                        </NavLink>
                    </div>
                    <div></div>
                </div>
                <Routes>
                    <Route path={mainURL} element={<MainPage />} />
                    <Route path={mainURL + 'makeanappointment'} element={<MakeAnAppointmentPage />} />
                    <Route path={mainURL + 'services'} element={<ServicesPage />}></Route>
                    <Route path={mainURL + 'prices'} element={<PricesPage />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
