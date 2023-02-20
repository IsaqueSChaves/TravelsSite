import React from 'react';
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import Passengers from '../pages/Passengers'
import PassengersData from '../pages/PassangersData';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/passengers' element={<Passengers />}/>
            <Route path='/data' element={<PassengersData />}/>
        </Routes>
    </div>
  );
}

export default App;
