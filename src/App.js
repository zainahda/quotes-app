import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

const App = () => {

  const [quotes, setQuotes] = useState({
      quote: "",
      anime: "",
      character: ""
  });

  useEffect(() => {
    getData();
  }, [])


  const getData = () => {
    axios.get(`https://animechan.vercel.app/api/random`).then((res) => {
      setQuotes(res.data);
    }).catch((error) => {
      console.log("Error", error);
    });
  };

  return (
    <div>
      <blockquote>
        {" "}
        <q>{quotes.quote}</q>
        <cite>
          <b>{quotes.character}</b> famous in - {quotes.anime}
        </cite>
        <button onClick={getData}>Refresh Quotes</button>
      </blockquote>
    </div>
  )
}

export default App;

