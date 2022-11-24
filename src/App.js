import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './pages/Login';
import Peliculas from './pages/Peliculas';
import Series from './pages/Series';
import './App.css';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='details/:movieId' element={<Details />} />
            <Route path='peliculas' element={<Peliculas />} />
            <Route path='series' element={<Series />} />
            <Route path='login' element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
