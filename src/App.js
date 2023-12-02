import React, { useState, useEffect } from 'react';
import './App.css';
import data from './data.json';
import Birthday from './Birthday';

function App() {
 const [people, setPeople] = useState([]);

 useEffect(() => {
   setPeople(data)
 }, []);

 return (
   <div className="App">
     <Birthday people={people} />
   </div>
 );
}

export default App;
