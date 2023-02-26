import './App.css';
import Navbar from './Components/Navbar';
import Topselling from './Components/Topselling';
import Signup from './Components/Signup'
import Login from './Components/Login';

import Singlepage from './Components/Singlepage';

import MainRoutes from './Pages/MainRoutes';

import { Footer } from './Components/HomePage/footer';

import { Route,Routes } from 'react-router-dom';
import SingleBook from './Pages/SingleBook';
import HomePage from './Pages/HomePage';
import CreatePost from './Components/AdminPage/CreatePost';
import Posts from './Components/AdminPage/Posts'


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
        {/* <Route path='/detail' element={<Singlepage />} /> */}
        <Route path='/signUp' element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/admin/createPost' element={<CreatePost />} />
        <Route path='/admin/posts' element={<Posts />} />
        </Routes>

        <Footer />

    </div>
  );
}

export default App;
