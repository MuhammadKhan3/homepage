import Home from './pages/home';
import { Routes, Route } from "react-router-dom";
import Floor from './pages/floor';
import { useEffect, useState } from 'react';
function App() {
  const [floor,setFloor]=useState("");
  const [floorClicked,setfloorClicked]=useState("");

  return (
    <div className='w-full min-h-full h-full '>
     <Home  floor={floor} setFloor={setFloor} floorClicked={floorClicked} setfloorClicked={setfloorClicked} />    
      {/* <Routes >
      <Route path="/" element={    <Home/>}/>
      <Route path="/floor" element={    <Floor/>}/>

      </Routes> */}
    </div>
  );
}

export default App;
