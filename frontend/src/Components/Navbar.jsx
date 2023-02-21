import React from 'react'
import './Navbar.css'
import {BiShoppingBag} from 'react-icons/bi'
import {VscDesktopDownload} from 'react-icons/vsc'
import {MdOutlineLocalOffer} from 'react-icons/md'
import {IoStorefrontOutline,IoChatbubblesSharp} from 'react-icons/io5'
import {HiOutlineCurrencyRupee} from 'react-icons/hi'
import {BsCart} from 'react-icons/bs'

export default function Navbar() {

  return (
    <div id='navbar'>
        <div  className='navbar'>
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
            <div>
                <div><MdOutlineLocalOffer /></div>
                <p>Deals</p>
            </div>
            <div>
                <div><IoStorefrontOutline /></div>
                <p>Visit Our Store</p>
            </div>
            <div>
                <div><HiOutlineCurrencyRupee color='#008BCF'/></div>
                <p>Discounts on Premium ads</p>
            </div>
            <div>
                <div><BsCart /></div>
                <p>Cart</p>
            </div>
            <div>
                <div><IoChatbubblesSharp /></div>
                <div>Chat</div>
            </div>
            </div> 
        </div>
        <div></div>
        <div></div>
        </div>
    </div>
  )
}
