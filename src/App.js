import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchCharacters from './Pages/SearchCharacters';
import MyFavorites from './Pages/MyFavorites';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchCharacters />} />
        <Route path="/MyFavorites" element={<MyFavorites />} />
      </Routes>
    </Router>
  );
}

export default App;
