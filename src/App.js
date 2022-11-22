
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Title" about="About Us"/>
      {/* <Navbar/> */}
      <div className="container py-3">
        {/* <TextForm heading="Convert Uppercase Text" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
