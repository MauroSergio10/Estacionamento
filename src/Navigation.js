import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import FinalizarPedido from './Pages/FinalizarPedido'

function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="FinalizarPedido" element={<FinalizarPedido/ >} />
            </Routes>
        </Router>
    );
}

export default Navigation;