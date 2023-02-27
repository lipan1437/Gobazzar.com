import React from 'react';
import  SidebarWithHeader  from './SidebarWithHeader'
import './AdminDetail.css'
import Sejal from '../../Image/Sejal.jpg'

export default function AdminDetail() {
  return (
    <div>
        <SidebarWithHeader />
        <div className='containerHead'>
        <div class="container">
		<div class="person">
			<img src={Sejal} alt="Person 1" />
			<h1>Sejal Jaiswal</h1>
			<p>Email : 710sejal@gmail.com</p>
			<p> Web Developer</p>
            <p>Location: Indore (Madhya Pradsh)</p>
		</div>
		
		
        </div>
    </div>
    </div>
  )
}
