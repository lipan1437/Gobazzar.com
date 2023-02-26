import React from 'react'
import  Popular from '../Components/HomePage/popular';
import { BuySell } from '../Components/HomePage/buy&sell';
import Trending  from '../Components/HomePage/trandingadd';
import Mobile from '../Components/HomePage/mobile';
import Electronics from '../Components/HomePage/electronics';
import { Category } from '../Components/HomePage/category';
import { Alert } from '../Components/HomePage/alert';
import { Reviews } from '../Components/HomePage/reviews';
import Home from '../Components/HomePage/home&lifestyle'
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/HomePage/footer';


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div style={{width:"80%",margin:"auto"}}>
        <Popular />
      </div>
       
      <BuySell />
      <Trending />
      <Mobile />
      <Home />
      <Electronics />
      <Category />
      <Alert />
      <Reviews /> 
      <Footer />
    </div>
  )
}
