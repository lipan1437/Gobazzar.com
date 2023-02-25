import './App.css';
import Navbar from './Components/Navbar';
import Topselling from './Components/Topselling';
import Signup from './Components/Signup'
import Login from './Components/Login';
import { Popular } from './Components/HomePage/popular';
import { BuySell } from './Components/HomePage/buy&sell';
import Trending  from './Components/HomePage/trandingadd';
import Mobile from './Components/HomePage/mobile';
import Electronics from './Components/HomePage/electronics';
import Singlepage from './Components/Singlepage';
import { Category } from './Components/HomePage/category';
import { Alert } from './Components/HomePage/alert';
import { Reviews } from './Components/HomePage/reviews';
import MainRoutes from './Pages/MainRoutes';
import { Route,Routes } from 'react-router-dom';
import SingleBook from './Pages/SingleBook';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">


      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products'  element={<MainRoutes/>} />
        <Route path='/productsDetail' element={<Singlepage />}/>
        <Route path='/books/:id' element={<SingleBook />} />
        <Route path='/topselling' element={<Topselling />} />
        <Route path='/detail' element={<Singlepage />} />
        <Route path='/signUp' element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Routes>


    </div>
  );
}

export default App;
