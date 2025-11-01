
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() { 

  const [mode, setmode] = useState("");
  return (
    <>
<Navbar title="textuits2" abouttext="About us" />
{/* <Navbar /> */}

<div className='container my-3'>
<Textform heading="Enter the text to analyze below"/>
<About/>

</div>
</>
  );
}
export default App;


zubair
