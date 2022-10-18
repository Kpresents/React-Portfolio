import React from 'react';
import '../styles/Contact.css';




const styles = {
    contactStyle: {
        background:'#BF5A36',
        fontSize:"20px",

    
        
      },
    
    };
    
    function Contact() {
      return (
        <div style={styles.contactStyle} className='contact border rounded mb-0 w-75 p-3 '>
        
          <h1>Contact Me </h1>
          <a href="mailto:kpresents.0@gmail.com" className='link-dark'>Email: Kpresents.0@gmail.com</a>

           

    </div>
      );
    }
    
    export default Contact;