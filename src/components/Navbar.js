import React from 'react';
import '../styles/Navbar.css';



const styles = {
  navbarStyle: {
    background: '#0D7369',
    fontSize:"19px",
    
  },

};


function Navbar({handlePageChange}) {
  return (
    <div style= {styles.navbarStyle} classNameName="nav-container flex" expand="lg" sticky="top">
      <nav classNameName="navbar-expand-lg">
        <div classNameName="container">


          <ul className="nav justify-content-end ">
            <li className="nav-item">
              <a className="nav-link link-dark" href="#"  onClick={()=> handlePageChange ('Home')} >About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-dark" href="#" onClick={()=> handlePageChange('Portfolio')}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-dark" href="#" onClick={()=> handlePageChange ('Contact')}> Contact Me</a>
            </li>
          </ul>
        </div>


      </nav>

    </div>
  );
}

export default Navbar;