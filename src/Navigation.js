import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import ConsultarPlaca from './Pages/Placa'
import Home from './Pages/Home';

function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/ConsultarPlaca" element={<ConsultarPlaca />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default Navigation;