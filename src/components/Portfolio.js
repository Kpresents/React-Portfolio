import React from 'react';
import '../styles/Portfolio.css';
import scenantics from '../Assets/Scenantics.png'
import recipeat from '../Assets/RecipEat.png'






function Portfolio () {
  return (
    <div  className="portfolio mb-0 ">
      <h1 className= 'fs-1 fw-bold text-success'>My Work</h1>
     <ul className="resume list-group list-group-flush">
<li>
    ScenAntics - A Movie Game Night Experience 
    <br></br> 
    Creating the front-end UI and framework to make the page flow for the best user experience.
  
</li>
<figure>
        <a href="https://github.com/JamesAHo/ScenAntics" target="_blank">
          <img src={scenantics}
            className='w-50 p-3' alt="movie icons to select from, text Scenantics"></img>
        </a>
      </figure>
      <br></br>
<li>
  RecipEat- Using Products in Your Own Home to Build a Nice Meal at Home
  <br></br>
  Helped create the UI styling using Bulma 

</li>
<br></br>
<figure>
        <a href="https://alexap2022.github.io/RecipEat/" target="_blank">
          <img src={recipeat}
            className='w-50 p-5' alt="Search engine to input ingredients and search results"></img>
        </a>
      </figure>

     </ul>
    </div>
  );
}

export default Portfolio;

