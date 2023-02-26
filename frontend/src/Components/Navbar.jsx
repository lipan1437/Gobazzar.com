import React from 'react'
import './Navbar.css'
import gobazaar from '../gobazaar.png'
import {BiShoppingBag} from 'react-icons/bi'
import {BsSearch,BsPerson,BsFillBagFill} from 'react-icons/bs'
import {VscDesktopDownload} from 'react-icons/vsc'
import {MdOutlineLocalOffer,MdMiscellaneousServices} from 'react-icons/md'
import {IoStorefrontOutline,IoChatbubblesSharp} from 'react-icons/io5'
import {IoMdArrowDropright} from 'react-icons/io'
import {HiOutlineCurrencyRupee} from 'react-icons/hi';
import {ImBooks} from 'react-icons/im'
import {BsCart} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu,GiSofa} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'
import {AiFillCar,AiOutlineHome,AiFillBulb} from 'react-icons/ai'
import {FaBuysellads,FaMobileAlt} from 'react-icons/fa'
import {RiMotorbikeFill,RiAdminFill} from 'react-icons/ri'
import {ChevronDownIcon} from '@chakra-ui/icons'
import {Select,InputGroup,InputRightAddon,InputLeftAddon,Input,Button,Divider, Center,
Drawer,DrawerCloseButton,DrawerContent,useDisclosure,DrawerOverlay} from '@chakra-ui/react'


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
                <div>
                    {/* <GiHamburgerMenu /> */}
                    <DrawerExample />
                </div>
                <div><Link to={'/'}><img src={gobazaar} alt="Go Bazzar" /></Link></div>
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
                    <div><Link to='/login'><CgProfile /></Link></div>
                    <p><Link to='/login'>Login/Register</Link></p>
                </div>
                <div className='navbar232'>
                    <Button  colorScheme="yellow" borderRadius={'0px'}>Admin Page</Button>
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
          <div id="navbar3">
     <ul id="nav-links">
          <li>
               <p ><Link to="/products">MOBILES <ChevronDownIcon /></Link></p>
               <div class="megamenu">
                    <ul>
                        {/* /products */}
                         <li><Link to="/topselling">Mobile Phones<Center><IoMdArrowDropright /></Center></Link></li>
                         <li><Link to='/products'> Used Mobiles</Link> </li>
                    </ul>
                    <ul>
                          <li>Top Brands (Used/New)<Center><IoMdArrowDropright /></Center></li>
                          <li>Samsung Mobiles</li>
                          <li>Iphones</li>
                          <li>Mi Mobiles</li>
                          <li>Motorola Phones</li>
                          <li>LG Phones</li>
                    </ul>
                    <ul>
                          <li>Tablets<Center><IoMdArrowDropright /></Center></li>
                          <li>Android Tablets</li>
                          <li>4G Tablets</li>
                          <li>Apple Tablets</li>
                    </ul>
                    <ul>
                          <li>Mobile Accessories<Center><IoMdArrowDropright /></Center></li>
                          <li>Bluetooth/Headsets</li>
                          <li>Earphones</li>
                          <li>Memory Cards</li>
                    </ul>
                    <ul>
                           <li>Top Models (Used)<Center><IoMdArrowDropright /></Center></li>
                           <li>Used Iphone 7</li>
                           <li>Used Iphone 6</li>
                           <li>Used Redmi Note 4</li>
                    </ul>
                    <ul>
                           <li>Shop By Choice <Center><IoMdArrowDropright /></Center></li>
                           <li>4G Ready</li>
                           <li>Selfie Phones</li>
                           <li>Great Battery Life</li>
                           <li>High RAM</li>
                    </ul>
                    <ul>
                           <li>Wearable Devices<Center><IoMdArrowDropright /></Center></li>
                           <li>Smart Bands</li>
                           <li>Smart Watches</li>
                    </ul>
               </div>
          </li>
          <li>
                 <p> FURNITURE & DECORE<ChevronDownIcon /></p>
               <div class="megamenu">
                    <ul>
                          <li>All Furniture <Center><IoMdArrowDropright /></Center></li>
                          <li>Used Furniture</li>
                          <li>Refurbished Furniture</li>
                          <li>Brand New Furniture</li>
                          <li>Unboxed Furniture</li>
                    </ul>
                    <ul>
                            <li>Living Room <Center><IoMdArrowDropright /></Center></li>
                            <li>Sofa Sets</li>
                            <li>Diwans</li>
                            <li>TV Units</li>
                            <li>Sofa Cum Bed</li>
                            <li>Recliners</li>
                            <li>Shoe Racks</li>
                            <li>Center Tables</li>
                    </ul>
                    <ul>
                           <li>Dining Room <Center><IoMdArrowDropright /></Center></li>
                           <li>Dining Tables</li>
                           <li>Dining Chairs</li>
                           <li>Cabinets</li>
                    </ul>
                    <ul>
                           <li>Bed Room<Center><IoMdArrowDropright /></Center></li>
                           <li>Bed Sets</li>
                           <li>Mattresses</li>
                           <li>Bedside Tables</li>
                           <li>Dressing Tables</li>
                           <li>Wardrobes & Showcases</li>
                           <li>Almirahs</li>
                    </ul>
                    <ul>
                           <li>Office Furniture<Center><IoMdArrowDropright /></Center></li>
                           <li>Office Chairs</li>
                           <li>Office Tables</li>
                           <li>Conference Tables</li>
                           <li>Computer Tables</li>
                    </ul>
                    <ul>
                           <li>Kids' Furniture<Center><IoMdArrowDropright /></Center></li>
                           <li>Beds</li>
                           <li>Cradle & Cots</li>
                           <li>Chairs</li>
                    </ul>
               </div>
          </li>
          <li>
               <p>ELECTRONICS<ChevronDownIcon /></p>
               <div class="megamenu">
                    <ul>
                          <li>Televisions <Center><IoMdArrowDropright /></Center></li>
                          <li>LED - Full HD</li>
                          <li>HD Ready</li>
                          <li>LED - Ultra HD(4K)</li>
                          <li>OMLED</li>
                          <li>Curved TV</li>
                    </ul>
                    <ul>
                          <li>Laptops & Desktop <Center><IoMdArrowDropright /></Center></li>
                          <li>Laptops</li>
                          <li>Desktops</li>
                          <li>2 In 1 Laptops</li>
                    </ul>
                    <ul>
                          <li>Cameras<Center><IoMdArrowDropright /></Center></li>
                          <li>DSLR Cameras</li>
                          <li>SLR Camera</li>
                          <li>Camera Accessories</li>
                          <li>Camera Lenses</li>
                          <li>Digital Cameras</li>
                    </ul>
                    <ul>
                           <li>TVs By Screen Size<Center><IoMdArrowDropright /></Center></li>
                           <li>Below 32 Inch</li>
                           <li>32 Inch To 39 Inch</li>
                           <li>40 Inch To 47 Inch</li>
                           <li>48 Inch To 54 Inch</li>
                           <li>55 Inch & Above</li>
                    </ul>
                    <ul>
                           <li>Playstation Consoles<Center><IoMdArrowDropright /></Center></li>
                           <li>Sony PS4</li>
                           <li>Sony PS3</li>
                           <li>XBox</li>
                           <li>Sony Playstation</li>
                    </ul>
                    <ul>
                           <li>Storage<Center><IoMdArrowDropright /></Center></li>
                           <li>External Hard Drives</li>
                           <li>Pen Drives</li>
                    </ul>
               </div>
          </li>
          
          <li>
          <p>HOME APPLIANCES<ChevronDownIcon /></p>
               <div class="megamenu">
                    <ul>
                           <li>Refrigerators <Center><IoMdArrowDropright /></Center></li>
                           <li>Single Door</li>
                           <li>Double Door</li>
                           <li>Multi Door</li>
                           <li>Stabilizers</li>
                           <li>Small Fridge</li>
                    </ul>
                    <ul>
                          <li>Air Conditioners<Center><IoMdArrowDropright /></Center></li>
                          <li>Split ACs</li>
                          <li>Window ACs</li>
                          <li>Coolers</li>
                          <li>Table Fans</li>
                          <li>Ceiling Fans</li>
                    </ul>
                    <ul>
                           <li>Kitchen Appliances<Center><IoMdArrowDropright /></Center></li>
                           <li>Water Purifiers</li>
                           <li>Mixer/Grinder/Juicer</li>
                           <li>Induction Cook Tops</li>
                           <li>Dish Washers</li>
                           <li>Electric Cookers</li>
                           <li>Coffee Makers</li>
                           <li>Gas Stoves</li>
                           <li>Electric Kettles</li>
                           <li>Electric Tandoor</li>
                    </ul>
                    <ul>
                           <li>Small Appliances<Center><IoMdArrowDropright /></Center></li>
                           <li>Microwaves & OTG</li>
                           <li>Air Purifiers</li>
                           <li>Irons</li>
                           <li>Vacuum Cleaners</li>
                           <li>Sewing Machines</li>
                           <li>Room Heaters</li>                         
                    </ul>
                    <ul>
                          <li>Washing Machines<Center><IoMdArrowDropright /></Center></li>  
                          <li>Semi-Automatic</li>  
                          <li>Fully-Automatic</li>  
                          <li>Top Load</li>             
                    </ul>
               </div>
          </li>
          <li>
          <p>KIDS & TOYS<ChevronDownIcon /></p>
               <div class="megamenu">
                    <ul>
                          <li>Baby & Infants<Center><IoMdArrowDropright /></Center></li>
                          <li>Prams Walkers And Strollers</li>
                          <li>Cradle & Cots</li>
                          <li>Chairs</li>
                          <li>Bedding</li>
                          <li>Baby Carriers</li>
                          <li>Baby Car Seats</li>
                          <li>Baby High Chairs</li>
                    </ul>
                    <ul>
                           <li> Toys & Games<Center><IoMdArrowDropright /></Center></li>
                           <li>Games & Puzzles</li>
                           <li>Soft Toys</li>
                           <li>Toy Vehicles</li>
                           <li>Remote Control Toys</li>
                           <li>Educational Toys</li>
                           <li>Music Toys</li>
                           <li>Inflatable Toys</li>
                           <li>Lego & Building Blocks</li>                       
                    </ul>
                    <ul>
                           <li>Kids Learning<Center><IoMdArrowDropright /></Center></li>
                           <li>Kids Story Books</li>
                           <li>Kids Rhymes</li>
                           <li>Binoculars</li>
                           <li>Telescopes</li>
                           <li>Microscopes</li>
                           <li>Abacus</li>               
                    </ul>
                    <ul>
                            <li>Kids' Bicycles<Center><IoMdArrowDropright /></Center></li>
                            <li>Tricycles</li>
                            <li>Kids Bicycles</li>
                            <li>Kids Battery Car</li>
                    </ul>
               </div>
          </li>
          <li>
            <p>SPORTS, HOBBIES & FASHION<ChevronDownIcon /></p>
            <div className="megamenu">
               <ul>
                      <li>Sports Equipment<Center><IoMdArrowDropright /></Center></li>
                      <li>Badminton</li>
                      <li>Basketball</li>
                      <li>Cricket Bat & Kit</li>
                      <li>Camping & Hiking</li>
                      <li>Football & Accessories</li>
                      <li>Pool & Snooker</li>
                      <li>Skating</li>
                      <li>Swimming</li>
                      <li>Table Tennis</li>
                      <li>Tennis</li>
               </ul>
               <ul>
                      <li>Fitness Equipment<Center><IoMdArrowDropright /></Center></li>
                      <li>Treadmills</li>
                      <li>Bicycle & Accessories</li>
                      <li>Elliptical & Crosstrainers</li>
                      <li>Exercise Bikes</li>
                      <li>Dumbbells</li>
                      <li>Barbells</li>              
               </ul>
               <ul>
                      <li>Fashion<Center><IoMdArrowDropright /></Center></li>
                      <li>Clothing</li>
                      <li>Watches</li>
                      <li>Jewellery</li>
                      <li>Fashion Accessories</li>
                      <li>Health & Beauty</li>
                      <li>Gifts & Stationary  </li>                  
               </ul>
               <ul>
                      <li>Musical Instruments<Center><IoMdArrowDropright /></Center></li>
                      <li>Drums</li>
                      <li>Flute</li>
                      <li>Guitar</li>
                      <li>Harmonica</li>
                      <li>Keyboard & Synthesizers</li>
                      <li>Harmonium</li>
                      <li>Piano</li>
                      <li>Trumpet   </li>                 
               </ul>
            </div>
          </li>
     </ul>
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


function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
      <GiHamburgerMenu ref={btnRef} onClick={onOpen}/>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color={'gray'} />

                <div className='drawerHeader'>
                    <img src={gobazaar} alt="" />
                </div>
                <div className='dBody'></div>
                <div className="dbodyAll">
                <div>
                    <div><Link to='/login'><CgProfile /></Link></div>
                    <p><Link to='/login'>Login/Register</Link></p>
                </div>
                <div>
                    <div><BsPerson /></div>
                    <p>My Account</p>
                </div>
                <div>
                    <div><RiAdminFill /></div>
                    <p>Admin Page</p>
                </div>
                <div>
                    <div><FaBuysellads/></div>
                    <p>My Ads</p>
                </div>
            </div>
            <div className="dbodyAll" >
                <p color='gray'>Categories</p>
                <div>
                    <div><MdMiscellaneousServices /></div>
                    <p>Services</p>
                </div>
                <div>
                    <div><BsFillBagFill /></div>
                    <p>Jobs</p>
                </div>
                <div>
                    <div><AiFillCar /></div>
                    <p>Cars</p>
                </div>
                <div>
                    <div><RiMotorbikeFill /></div>
                    <p>Bikes</p>
                </div>
                <div>
                    <div><GiSofa /></div>
                    <p>Furniture & Decore</p>
                </div>
                <div>
                    <div><AiOutlineHome /></div>
                    <p>Home</p>
                </div>
                <div>
                    <div><AiFillBulb /></div>
                    <p>Electronics</p>
                </div>
                <div>
                    <div><FaMobileAlt /></div>
                    <p>Mobile</p>
                </div>
                <div>
                    <div><ImBooks /></div>
                    <p>Books</p>
                </div>
            </div>     

          </DrawerContent>
        </Drawer>
      </>
    )
  }