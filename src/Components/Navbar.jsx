
import PropTypes from 'prop-types';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../App.css';

const Navigation = (props) => {
  const location = useLocation();
  const [isNavOpen, setNavOpen] = useState(false);


  const isActiveLink = (pathname) => {
    return pathname === location.pathname ? "actv" : "";
  };
  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const handleNavItemClick = () => {
    setNavOpen(false);
  };



const handleLogout = () => {
  // Perform logout actions (e.g., clearing localStorage, API requests, etc.)
  localStorage.removeItem('authToken');
};


  return (
    <nav
      className="navbar navbar-expand-lg bg-nav fixed-top"
      >
      <div className="container-fluid">
        <Link className=" c-white fs-1 navbar-brand mb-0 h1 pixelfont " to="/">
          Eventopia
        </Link>
        <button
          className={`navbar-toggler navbar-toggle-icon ${
            isNavOpen ? "" : "collapsed"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span
            onClick={handleNavToggle}
            className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isNavOpen ? "show" : ""
          }`}
          id="navbarSupportedContent">
          <ul className="navbar-nav w-55 justify-content-between d-flex ">
            <li className="nav-item">
              <Link
                onClick={handleNavItemClick}
                className={`  pixelfont fs-2 nlink nav-link ${isActiveLink(
                  "/"
                )}`}
                to="/">
                Home
              </Link>
            </li>
             <li className="nav-item">
              <Link
                onClick={handleNavItemClick}
                className={` pixelfont fs-2 nav-link nlink ${isActiveLink(
                  "/events"
                )}`}
                to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleNavItemClick}
                className={` pixelfont fs-2 nav-link nlink ${isActiveLink(
                  "/about"
                )}`}
                to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleNavItemClick}
                className={` pixelfont fs-2 nav-link nlink ${isActiveLink(
                  "/contact"
                )}`}
                to="/contact">
                Contact
              </Link>
            </li>
            {props.isLoggedIn === false && (
              <>
              <li className="nav-item">
              <Link
                onClick={handleNavItemClick}
                className={` pixelfont fs-2 nav-link nlink ${isActiveLink(
                  "/signup"
                )}`}
                to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleNavItemClick}
                className={` pixelfont fs-2 nav-link nlink ${isActiveLink(
                  "/login"
                )}`}
                to="/login">
                Login
              </Link>
            </li>
              </>
            )}
            
            {props.isLoggedIn === true && ( 
              <>
                
                <li className="nav-item">
                  <Link
                    
                    className={` pixelfont fs-2 nav-link nlink ${isActiveLink(
                      "/admin"
                    )}`}
                  to="/admin">
                  PostEvent
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={handleLogout}
                    className={` pixelfont fs-2 nav-link nlink ${isActiveLink(
                      "/"
                    )}`}
                  to="/">
                  Logout
                  </Link>
                </li>
                

                </>
            )}
            
            </ul> 
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};


export default Navigation;