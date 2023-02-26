import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../Components/ProductPage/PrivateRoute'
import Books from './Books'
import EditBook from './EditBook'
import Login from '../Components/Login'
import SingleBook from './SingleBook'
import Navbar from '../Components/Navbar'
import {Footer} from '../Components/HomePage/footer'

export default function MainRoutes() {
  return (
    <div>
    <Navbar />
    <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={
        <PrivateRoute>
          <SingleBook/>
        </PrivateRoute>
          } 
          />
        <Route path="/books/:id/edit" element={
        <PrivateRoute>
          <EditBook/>
         </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
    <Footer />
    </div>
  )
}
