import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import MyFavorites from './Pages/MyFavorites';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyFavorites" element={<MyFavorites />} />
      </Routes>
    </Router>
  );
}

export default App;
