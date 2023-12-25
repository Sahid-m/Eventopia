import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import HomePage from './Pages/HomePage';
import LoginPage from "./Pages/LoginPage";
import Signup from "./Pages/Signup";

function App() {
  
      const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));
         const handleLogin = () => {
            setIsLoggedIn(!!localStorage.getItem('authToken'));
          };
  
  useEffect(() => {
      handleLogin();
      }, []);

  return (
    <>
      <Router > 
        <Navbar isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route exact path="/" Component={<HomePage/>} />
          <Route exact path="/contact" Component={<Contact/>} />
          <Route exact path="/events" Component={<Events/>} />
          <Route exact path="/about" Component={<AboutUs/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        </Routes>      
      </Router>
      
    </>
  )
}

export default App
