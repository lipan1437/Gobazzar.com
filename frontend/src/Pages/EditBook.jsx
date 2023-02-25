import { Button, FormLabel, Heading, Input, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
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
    setTitle("")
    setAuthor("")
    
    dispatch(editBook(id,newData)).then(()=>dispatch(getBooks()))
  }
  return (
    <div>
      <Heading textAlign={"center"}>Update Product: {id}</Heading>
        <SimpleGrid w={"30%"} m={"auto"}>

      <div>
        <FormLabel htmlFor="">Details</FormLabel>
        <Input isInvalid errorBorderColor='blue.300' type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
      </div>
      <div>
        <FormLabel htmlFor="">Name</FormLabel>
        <Input isInvalid errorBorderColor='blue.300' type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <Button w={"20%"} m={"auto"} bg={"blue.300"} onClick={handleEdit}>Submit</Button>
        </SimpleGrid>
    </div>
  )
}
