import './App.css';
import Navbar from './Components/Navbar';
import Topselling from './Components/Topselling';
import { Popular } from './Components/HomePage/popular';
import { BuySell } from './Components/HomePage/buy&sell';
import Trending  from './Components/HomePage/trandingadd';
import Mobile from './Components/HomePage/mobile';
import Home from './Components/HomePage/home&lifestyle';
import Electronics from './Components/HomePage/electronics';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Popular />
      <BuySell />
      <Trending />
      <Mobile />
      <Home />
      <Electronics />
      {/* <Topselling/> */}
    </div>
  );
}

export default App;
