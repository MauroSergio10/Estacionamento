import './App.css';
import Navigation from './Navigation';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <div className="poppins-regular App ">
        <Navigation />
      </div>
    </UserProvider>

  );
}

export default App;
