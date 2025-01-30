import { Routes, Route } from 'react-router-dom';
import './App.css';

// Importing components
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';
import Service1 from './Components/Service1/Service1';
function App() {
  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service1" element={<Service1 />} />
      </Routes>
    </div>
    
  );
}
export default App;
