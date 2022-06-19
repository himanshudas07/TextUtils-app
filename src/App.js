import './App.css';
import Navbar from './components/Navbar';
import React , {useState} from 'react';
import About from './components/About';

import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  const [mode,setMode]=useState("light")

  const toggleMode = ()=>{

    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = '#05284a';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode }/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode={mode} />} /> 
          <Route exact path="/" element={<TextForm mode={mode} heading="Enter text here to analyze"/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
} 

export default App;
