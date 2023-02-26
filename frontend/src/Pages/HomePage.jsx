import React from 'react'
import { Popular } from '../Components/HomePage/popular';
import { BuySell } from '../Components/HomePage/buy&sell';
import Trending  from '../Components/HomePage/trandingadd';
import Mobile from '../Components/HomePage/mobile';
import Electronics from '../Components/HomePage/electronics';
import { Category } from '../Components/HomePage/category';
import { Alert } from '../Components/HomePage/alert';
import { Reviews } from '../Components/HomePage/reviews';
import Home from '../Components/HomePage/home&lifestyle'


export default function HomePage() {
  return (
    <div>
       <Popular />
      <BuySell />
      <Trending />
      <Mobile />
      <Home />
      <Electronics />
      <Category />
      <Alert />
      <Reviews /> 
    </div>
  )
}
