// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('dark');

  const toggleMode=()=>{
    if(mode === 'dark'){
      setMode('light')
      setModeText('dark')
      document.body.style.backgroundColor = "white"
    }else{
      setMode('dark')
      setModeText('light')
      document.body.style.backgroundColor = "grey"
      // document.body.style.backgroundColor = "#212529"
    }
  }
  return (
    <>
    <Navbar title_name = "TextUtils" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
    <TextForm heading = "Enter your Text to Analyze"/>
    {/* <About /> */}
    </>
  );
}

export default App;
