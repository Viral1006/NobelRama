import './App.css';
import Categories from './components/Categories';
import Celebrating from './components/Celebrating';
import Homepage from './components/Homepage';
import Journey from './components/Journey';

function App() {
  return (
    <div className="App">
     < Homepage />
     <Celebrating />
     <Categories />
     <Journey />
    </div>
  );
}

export default App;
