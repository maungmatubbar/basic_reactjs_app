
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const[mode,setMode] = useState('light');
  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#5F6176";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title="Title" about="About Us" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}
      <div className="container py-3">
        <TextForm heading="Convert Uppercase Text" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
