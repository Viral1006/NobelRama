import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Categories from './components/Categories';
// import Celebrating from './components/Celebrating';
// import Formfooter from './components/Formfooter';
import Homepage from './components/Homepage';
// import Journey from './components/Journey';
// import Lucky from './components/Lucky';
import Winners from './components/Winners';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/winners" element={<Winners />} />
        </Routes>
        </Router>
      
    </div>
  );
}

export default App;
