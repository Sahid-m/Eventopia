import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import HomePage from './Pages/HomePage';


function App() {
  

  return (
    <>
      <Router > 
        <Navbar />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/events" Component={Events} />
          <Route exact path="/about" Component={AboutUs} />
        </Routes>      
      </Router>
      
    </>
  )
}

export default App
