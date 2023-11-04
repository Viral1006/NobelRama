import './App.css';
import Categories from './components/Categories';
import Celebrating from './components/Celebrating';
import Formfooter from './components/Formfooter';
import Homepage from './components/Homepage';
import Journey from './components/Journey';
import Lucky from './components/Lucky';

function App() {
  return (
    <div className="App">
     < Homepage />
     <Celebrating />
     <Categories />
     <Journey />
     <Lucky />
     <Formfooter/>
    </div>
  );
}

export default App;
