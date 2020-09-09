import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Photo from './components/Photo'

function App() {


const [data, setData] = useState([]);

useEffect(() => {
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-09-09')
  .then((res => {
    setData(res.data)
  }))
},[])


  return (
    <div className="App">
      <Photo title={data.title} hdurl={data.url} explanation={data.explanation}/>
    </div>
  );
}

export default App;
