import React from 'react'
import './Navbar.css'
import gobazaar from '../gobazaar.png'
import {BiShoppingBag} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {VscDesktopDownload} from 'react-icons/vsc'
import {MdOutlineLocalOffer} from 'react-icons/md'
import {IoStorefrontOutline,IoChatbubblesSharp} from 'react-icons/io5'
import {HiOutlineCurrencyRupee} from 'react-icons/hi'
import {BsCart} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'

import {ChevronDownIcon} from '@chakra-ui/icons'
import {Select,InputGroup,InputRightAddon,InputLeftAddon,Input,Button,Divider} from '@chakra-ui/react'


export default function Navbar() {
    const location = ["All India","Ahemdabad","Bangalore","Chandigarh","Chennai",
    "Coimbatore","Delhi","Hyderabad","Kochi","Kolkata","Mumbai",
  "Pune","Guagaon","Jaipur","Lucknow","Noida","NaviMumbai","Trivandrum"]
  const data = ["Cars & Bikes","Mobiles & Tablets","Electoronic & Applications","Real Estate",
    "Services","Jobs","Home & Lifestyle","Education & Training", "Pets & Pet Care",
    "Entertainment","Events","Matrimonial"]

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
        <div className='navbar2'>
            <div className='navbar21'>
                <div><GiHamburgerMenu /></div>
                <div><img src={gobazaar} alt="Go Bazzar" /></div>
            </div>
            <div className='navbar22'>
                <div className='navbar221'> 
                <Location location ="Location" data = {location} />
                </div>
                <div className='navbar222'>
                   <div className='navbar2221'>
                    <Location location ="All Categories" data = {data} />
                   </div>
                   <div className='navbar2222'>
                   <InputGroup size='sm' height={'100%'}>
                        <Input placeholder='Search in All India' variant='unstyled' />
                         <InputRightAddon children={<BsSearch />} bg='#008BCF'color={'white'} />
                    </InputGroup>
                   </div>
                </div>
            </div>
            <div className='navbar23'>
                <div className='navbar231'>
                    <div><CgProfile /></div>
                    <p>Login/Register</p>
                </div>
                <div className='navbar232'>
                    <Button  colorScheme="yellow" borderRadius={'0px'}>Post Free Ad</Button>
                </div>
            </div>
        </div>
        <Divider orientation='horizontal'/>
        <div className='navbar3In'>
        <InputGroup>
           <InputLeftAddon children={<BsSearch />} />
           <Input type='text' placeholder='Please Enter Keyword' />
            </InputGroup>
        </div>
        <div className='navbar3'>

        </div>
        </div>
    </div>
  )
}

function Location({location,data}) {

    return(
        <Select placeholder={location} variant='unstyled'>
        {
            data.map((el) => (
        <option value='option2'>{el}</option>
            ))
        }
        </Select>
    )
}