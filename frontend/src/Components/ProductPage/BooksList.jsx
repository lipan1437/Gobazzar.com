import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BookCard from './BookCard'
// import styles from "../../Styles.module.css"
import styled from "styled-components"
import { useLocation, useSearchParams } from 'react-router-dom'
import { getBooks } from '../../Redux/Books/action'
export default function BooksList() {
const dispatch = useDispatch()
const books = useSelector((store)=>store.bookReducer.books)
const location = useLocation()
const [searchParams] = useSearchParams();

console.log(location)
    useEffect(()=>{
      const order = searchParams.get("order")
        let paramObj= {
            params:{
                category: searchParams.getAll("category"),
                _sort: order &&  "release_year",
                _order: order, //asc or desc
            },
        }
      dispatch(getBooks(paramObj))
  
    },[location.search])
  return (
    <DivWrapper>
        {books.length>0 && books.map((el)=>{
            return <BookCard key={el.id} book={el}/>
        })}
    </DivWrapper>
  )
}

//module.css
const DivWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
`
