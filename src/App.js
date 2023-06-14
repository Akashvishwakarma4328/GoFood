import './App.css';
import Home from './screens/Home';
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { Router, Route, Routes } from 'react-router-dom';
function App() {
  return (


    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      
    </>
  );
}

export default App;
