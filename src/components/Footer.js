import React from 'react';
import '../styles/Footer.css';


const styles = {
  footerStyle: {
    background: '#0D7369',
  },
footingStyle: {
    fontSize: '20px',
  },
};



function Footer() {   
    return (
    <footer className="nav-container footer fixed-bottom  flex flex-wrap">
        <a href="https://github.com/Kpresents"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon align-items-center"/></a>
        <a href="https://www.linkedin.com/in/carolina-hernandez-25420257/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon align-items-center"/></a>
    </footer>
    )
}

export default Footer;