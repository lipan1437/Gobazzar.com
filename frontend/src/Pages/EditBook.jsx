import { Button, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editBook, getBooks } from '../Redux/Books/action'

export default function EditBook() {
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const books = useSelector((store)=>store.bookReducer.books)
  const dispatch = useDispatch()
  useEffect(()=>{
    const bookData = books.find((el)=>el.id===+id)
    if(bookData){
      setTitle(bookData.book_name)
      setAuthor(bookData.author)
    }
  },[])

  const handleEdit = () =>{
    //post request or patch request.. we have to make object type of it
    let newData = {
      author,
      book_name:title,
    }
    dispatch(editBook(id,newData)).then(()=>dispatch(getBooks()))
  }
  return (
    <div>
      <Heading>Edit Product: {id}</Heading>
      <div>
        <label htmlFor="">Author</label>
        <Input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Title</label>
        <Input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <Button onClick={handleEdit}>Submit</Button>
    </div>
  )
}
