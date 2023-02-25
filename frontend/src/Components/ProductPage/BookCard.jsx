import { Box, Button, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function BookCard({book}) {
    
  return (
    <SimpleGrid style={{border:"1px solid teal"}} w={"100%"}  >
      <Link to={`/books/${book.id}`}>
        <Image src={book.image} alt="book_cover" w={"100%"} m={"auto"}/>
      </Link>
        <Heading as='h5' size='sm' color={"blue.400"}>Details: {book.book_name}</Heading>
        <Heading as='h6' size='xs' > Name: {book.author}</Heading>
        <Heading as='h6' size='xs'>Category: {book.category}</Heading>
        <Heading as='h6' size='xs'>Price: {book.price}</Heading>
        <Heading as='h6' size='xs'>Year of released: {book.release_year}</Heading>
        <Link to={`/books/${book.id}/edit`}>
           <Button colorScheme='blue' size='sm'>Update</Button>
        </Link>
    </SimpleGrid>
  )
}
