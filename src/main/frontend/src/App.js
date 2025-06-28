import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";

function App(){
    return (
/*  const [data, setData] = useState('');

  useEffect(()=>{
    axios.get("/test")
        .then(res => setData(res.data))
        .catch(err => console.log("error : " + err))
  })

  return data;*/
  <div className="App">
    <Header/>
    <Home/>
    <Footer/>
  </div>
  )
}

export default App;