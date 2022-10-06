import React from 'react';
import '../styles/Contact.css';



const styles = {
    contactStyle: {
        background: '#193C40',
        fontSize:"16px",
        
      },
    
    };
    
    function Contact() {
      return (
        <div style={styles.contactStyle} className='contact'>
        
          <h1>Contact Me </h1>
          <a href="mailto:kpresents.0@gmail.com">Email: Kpresents.0@gmail.com</a>
           

    </div>
      );
    }
    
    export default Contact;