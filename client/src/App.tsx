import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import LoginPage from './Pages/Login.page';
import CameraPage from './Pages/Camera.page';
import GalleryPage from './Pages/Gallery.page';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<ProtectedRoute>
        </ProtectedRoute>}>
          <Route path='/camera' element={<CameraPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='*' element={<Navigate to="/camera" />} />
        </Route>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
