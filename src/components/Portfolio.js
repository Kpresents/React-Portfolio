import React from 'react';
import '../styles/Portfolio.css';



const styles = {
  PortStyle: {
    background: '#193C40',
  },

};


function Portfolio () {
  return (
    <div style={styles.PortStyle} className="portfolio">
      <h1 >My Work</h1>
    </div>
  );
}

export default Portfolio;