import React from 'react'
import './Navbar.css'
import {BiShoppingBag} from 'react-icons/bi'
import {VscDesktopDownload} from 'react-icons/vsc'

export default function Navbar() {

  return (
    <div id='navbar' className='navbar'>
        <div className='navbar1'>
           <div className='navbar11'>
            <div>
                <div><BiShoppingBag /></div>
                <p>For Businesses</p>
            </div>
            <div>
                <div><VscDesktopDownload /></div>
                <p>Download The App</p>
            </div>
           </div>
           <div className='navbar12'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div> 
        </div>
        <div></div>
        <div></div>
    </div>
  )
}
