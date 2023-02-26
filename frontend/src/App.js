import './App.css';
import Topselling from './Components/Topselling';
import Signup from './Components/Signup'
import Login from './Components/Login';

import Singlepage from './Components/Singlepage';

import MainRoutes from './Pages/MainRoutes';
import { Route,Routes } from 'react-router-dom';
import SingleBook from './Pages/SingleBook';
import HomePage from './Pages/HomePage';
import CreatePost from './Components/AdminPage/CreatePost';
import Posts from './Components/AdminPage/Posts'
import Admin from './Components/AdminPage/Admin';
import User from './Components/AdminPage/User';


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products'  element={<MainRoutes/>} />
        <Route path='/productsDetail' element={<Singlepage />}/>
        <Route path='/books/:id' element={<SingleBook />} />
        <Route path='/topselling' element={<Topselling />} />
        <Route path='/signUp' element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/admin/createPost' element={<CreatePost />} />
        <Route path='/admin/posts' element={<Posts />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/admin/user' element={<User />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>


    </div>
  );
}

export default App;
