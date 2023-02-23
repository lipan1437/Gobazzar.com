import './App.css';
import Navbar from './Components/Navbar';
import Topselling from './Components/Topselling';
import { Popular } from './Components/HomePage/popular';
import { BuySell } from './Components/HomePage/buy&sell';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Topselling/>
      <Popular/>
     <BuySell />
     
    </div>
  );
}

export default App;
