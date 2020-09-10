import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Photo from './components/Photo'

function App() {


const [data, setData] = useState([]);

useEffect(() => {
axios.get('https://api.nasa.gov/planetary/apod?api_key=gxWF7vOAOnWPfwHYjEfh1bEn5SEOoKY5DcvGhtOe')
  .then((res => {
    setData(res.data)
  }))
},[])


  return (
    <div className="App">
      <Photo title={data.title} hdurl={data.url} explanation={data.explanation} copyright={data.copyright} date={data.date}/>
    </div>
  );
}

export default App;
