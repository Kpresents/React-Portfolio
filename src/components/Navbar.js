import React from 'react';
import '../styles/Navbar.css';



const styles = {
  navbarStyle: {
    background: '#B57114',
    fontSize:"19px",
    
  },

};


function Navbar({handlePageChange}) {
  return (
    <div style= {styles.navbarStyle} className="nav-container" expand="lg" sticky="top">
      <nav class="navbar-expand-lg">
        <div class="container">


          <ul class="nav justify-content-end ">
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={()=> handlePageChange ('Home')} >About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={()=> handlePageChange('Portfolio')}>Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={()=> handlePageChange ('Contact')}> Contact Me</a>
            </li>
          </ul>
        </div>


      </nav>

    </div>
  );
}

export default Navbar;