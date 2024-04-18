import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './Card.tsx';

function App() {
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
<Card
picture= "https://images.unsplash.com/photo-1713283699002-ac9462cedf0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
star= "5.0"
description= "Interior Design Exhibit"
price= "125"
/>
<Card
picture= "https://images.unsplash.com/photo-1710170600429-0d6e04d2d96e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
star= "4.0"
description= "Travel Tour"
price= "175"
/>
<Card
picture= "https://images.unsplash.com/photo-1713188702328-1115b19bb465?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
star= "5.0"
description= "Photography Exhibit"
price= "150"
/>
</div>
    </div>
  );
}

export default App;
