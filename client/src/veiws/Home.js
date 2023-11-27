import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Constants from "../utils/Constants";

const Home = () => {
    const [state, setState] = useState([]);
  const getQuotes = async () => {
    try {
      const url = Constants.BASE_URL + Constants.Paths.USER_QUOTES;
      const res = await axios({ url, method: "get" });
      if (res.status === 200) {
        setState(res.data.getQuotes);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getQuotes();
  }, []);
    return (
        <div className="App">
      <header className="App-header">
        {state?.map(({ text, auther }, idx) => (
          <p key={idx}>
            {text} <sub> __{auther}</sub>
          </p>
        ))}
      </header>
    </div>
    );
};

export default Home;