import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './pages/Login';
import Peliculas from './pages/Peliculas';
import Series from './pages/Series';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Watchlist from './pages/Watchlist';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path='details/:movieId'
              element={
                <ProtectedRoute>
                  <Details />
                </ProtectedRoute>
              }
            />
            <Route
              path='peliculas'
              element={
                <ProtectedRoute>
                  <Peliculas />
                </ProtectedRoute>
              }
            />
            <Route
              path='series'
              element={
                <ProtectedRoute>
                  <Series />
                </ProtectedRoute>
              }
            />
            <Route
              path='watchlist'
              element={
                <ProtectedRoute>
                  <Watchlist />
                </ProtectedRoute>
              }
            />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
