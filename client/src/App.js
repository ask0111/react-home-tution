import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [state, setState] = useState([])
  const getQuotes = async ()=>{
    try {
      const res = await axios({url: 'http://localhost:8001/api/a1/user/quotes', 
      method: 'get',
      });
      if(res.status === 200){
        setState(res.data.getQuotes);
      }
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getQuotes()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        {
          state?.map(({text, auther})=> <p>{text} <sub> __{auther}</sub></p>)
        }
        
      </header>
    </div>
  );
}

export default App;
