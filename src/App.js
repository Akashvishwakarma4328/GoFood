import './App.css';
import Home from './screens/Home';
import { Router, Route, Routes } from 'react-router-dom';
function App() {
  return (


    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </>
  );
}

export default App;
