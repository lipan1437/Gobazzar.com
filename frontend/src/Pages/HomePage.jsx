import React from 'react'
import { Popular } from '../Components/HomePage/popular';
import { BuySell } from '../Components/HomePage/buy&sell';
import Trending  from '../Components/HomePage/trandingadd';
import Mobile from '../Components/HomePage/mobile';
import Electronics from '../Components/HomePage/electronics';

export default function HomePage() {
  return (
    <div>
      <Popular />
      <BuySell />
      <Trending />
      <Mobile />

      <Electronics />  
    </div>
  )
}
