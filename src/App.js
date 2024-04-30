// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './Card.tsx';
import data from './data.js'

function App() {
  const cards = data.map(item => {
    return(
      <Card
      item = {item}
/>
    ) 
  })
  return (
    <div className="App">
      <nav>
        <img className='image' alt='react' src="../airbnb.png"/>
      </nav>
      <img className='group' alt='group' src='../Group 77.png'/>
      <p className='online'>Online Experiences</p>
      <p className='paragraph'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
<div className='card-line'>
  {cards}
  

</div>
    </div>
  );
}

export default App;
