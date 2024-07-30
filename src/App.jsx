import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Categories from './components/Categories';
// import Celebrating from './components/Celebrating';
// import Formfooter from './components/Formfooter';
import Homepage from './components/Homepage';
// import Journey from './components/Journey';
// import Lucky from './components/Lucky';
import Winners from './components/Winners';
// import Celebrating from './components/Celebrating';
// import Categories from './components/Categories';
// import Journey from './components/Journey';
// import Lucky from './components/Lucky';
// import Formfooter from './components/Formfooter';
// import { Winnie } from './Winnie';
function App() {
  return (
    <div className="App ">
      <Router>
      <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/" element={<Celebrating />} />
          <Route path="/" element={<Categories />} />
          <Route path="/" element={<Journey />} />
          <Route path="/" element={<Lucky />} />
          <Route path="/" element={<Formfooter />} /> */}
          <Route path="/winners" element={<Winners/>} />
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
