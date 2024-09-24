import React from "react";

export default function Navbar(props) {
  return (
  
    <nav  
        className={props.darkMode ? "dark" : ""}
    > 
        <img 
            className="nav-logo-icon"     
            src="/images/logo192.png"
        />
        <h3 className="nav-icon-text">ReactFacts</h3>        

        <div className="toggler">
            
            <p className="toggler-light">Light</p>
            
            <div 
              className="toggler-slider"
              onClick={props.toggleDarkMode}
            >
                <div className="toggler-circle"></div>        
            </div>
            
            <p className="toggler-black">Black</p>
        </div>
    </nav>

  )}