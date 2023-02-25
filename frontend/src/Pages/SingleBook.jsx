import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import BookCard from '../Components/ProductPage/BookCard';

export default function SingleBook() {
  let {id} = useParams();
  const books = useSelector((store)=>store.bookReducer.books);
  const [book, setBook] = useState({})


  useEffect(()=>{
    let bookData = books.find((el)=>el.id === +id);
    bookData && setBook(bookData)
  },[])
  return (
  <div style={{width:"100%"}}>
   
     <h1>Single Product {id}</h1>
     <div style={{width:"30%", margin:"auto"}}>
     <BookCard book={book}/>
     
     </div>

  </div>
  )
}


