import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import ConsultarPlaca from './Pages/Placa';
import Home from './Pages/Home';
import Pagamento from './Pages/Pagamento';
import Historico from './Pages/Historico';
import { useUser } from './UserContext';

function Navigation() {
    const { user } = useUser();

    return (
        <Router>
            <Routes>
                <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
                <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
                <Route path="/ConsultarPlaca" element={<ConsultarPlaca />} />
                <Route path="/Pagamento" element={<Pagamento />} />
                <Route path="/Historico" element={user ? <Historico /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default Navigation;
