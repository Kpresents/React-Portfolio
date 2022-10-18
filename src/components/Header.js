import React from 'react';
import '../styles/Header.css';



const styles = {
  headerStyle: {
    background: '#085159',
  
  },

};



function Header() {
  return (
    <header style={styles.headerStyle} className="header flex jumbotron w-100 h-100 ">
      <h1> Carolina Hernandez</h1>
     
    </header>
  );
}

export default Header;