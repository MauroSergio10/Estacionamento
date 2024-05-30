import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default Navigation;