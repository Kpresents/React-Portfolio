import React from 'react';
import '../styles/Home.css';


const styles = {
  homeStyle: {
    background: '#193C40',
    

  },

};

function Home() {
  return (
    <div style={styles.homeStyle} className='home'>


      <p class='lead'>
        I am a first generation Mexican-American, born and raised in the City of Los Angeles. I graduated
        from CSULA in Film and Media Studies.
        I worked in Post-Production for 12 years, my job was to watch MOVIES for a living which was awesome!
        but then I decided I needed a challenge and wanted to
        advance in my career. I moved on to work for the Netflix Localization team for their international
        releases. My job was to make sure we subtitled all their international features and episodics
        in their corresponding languages for all regions. Like many COVID-19 shifted my life and I found
        myself wanting yet another challenge and I now work as a Project Manager
        for a tech company called Yospace, which is based out of the UK. This is why I am now going to UCLA's
        Coding Bootcamp to better understand how the engineers and project scope all function as one.
      </p>

    </div >
  );
} 

export default Home;
