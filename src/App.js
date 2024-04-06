//app.js
//import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Alert from './components/Alert';

function App(){
  const [mode, setMode]= useState('light');
  
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.title='TextUtils-Dark Mode';
      setInterval(()=>{
        document.title='TextUtils is Amazing Now';
      },2000);
      setInterval(()=>{
        document.title='Install TextUtils Now';
      },1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title='TextUtils-Light Mode';
    }
  }
  return (
     <>
     
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/*<div>
        <BrowserRouter>
          <Routes>
            <Route path = "/About" element = {<About />}>about</Route>
          </Routes>
        </BrowserRouter>
  </div>*/}
      
      {/*<Alert alert="this is my type"/>*/}
      <div className="container my-3">
        <Textform heading="Try TextUtils-Word Counter, Character Counter, Remove extra Spaces" mode={mode} />
       <About/>
          </div>
    
</>
  );
}

export default App;
