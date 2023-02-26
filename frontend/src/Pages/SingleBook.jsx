import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


export default function SingleBook() {
  let {id} = useParams();
  const books = useSelector((store)=>store.bookReducer.books);
  const [book, setBook] = useState({})

  // console.log(id)
  useEffect(()=>{
    let bookData = books.find((el)=>{
     return  el._id == id
      
  });
    bookData && setBook(bookData)
  },[])

  

  return (

    <div className="main">
      <div>

        <div className="logo">
              <img  src={book.image} alt="phone"/> 
            </div>
        <div className="heading">
          <h1>Ad Details</h1>
        </div>
        <hr />
        <div className="list">
          <div className="inside_list">
          <ul>
            <li>Ad ID</li>
            <li>Model</li>
            <li>Physical Condition</li>
            <li>Purchase Year</li>
            <li>Invoice</li>
          </ul>
          <ul className="bold">
            <li>364361192</li>
            <li>Others</li>
            <li>Excellent</li>
            <li>2020</li>
            <li>Not Available</li>
          </ul>
          </div>
          <div class="vl"></div>
          <div className="inside_list">
          <ul>
            <li>Brand Name</li>
            <li>Location</li>
            <li>Condition</li>
            <li>Also Includes</li>
            <li>Seller Type</li>
          </ul>
          <ul className="bold">
            <li>Apple</li>
            <li>Jalandhar</li>
            <li>Used</li>
            <li>Charger, Data Cable</li>
            <li>Individual</li>
          </ul>
          </div>
        </div>
        <hr />
        <div className="heading">
          <h1>Description</h1>
        </div>
        <div className="des">
          <p>
            Midnight Green 91% battery health original battery original screen
            original charger with bill original apple silicon cover
          </p>
        </div>
      </div>
      <div className="right_heading">
         <div  className="used">
                <span>USED</span>
                <li>{book.title}</li>
            </div>
            <div className="inside_right_heading">
               <p>{book.post}</p>
               <span>₹{book.price}</span>
            </div>

        <div className="call">
          <div className="color">
            <button>CALL</button>
          </div>
          <div className="normal">
            <button>CHAT</button>
          </div>
        </div>
      </div>
    </div>
  );
}


