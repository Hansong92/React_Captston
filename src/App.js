import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import StrokeCal from './pages/StrokeCal';
import MRI from './pages/MRI';
import ModelExplanation from './pages/ModelExplanation'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MRI" element={<MRI />} />
        <Route path="/StrokeCal" element={<StrokeCal />} />
        <Route path="/model-explanation" element={<ModelExplanation />} />
      </Routes>
    </Router>
  );
}

export default App;
