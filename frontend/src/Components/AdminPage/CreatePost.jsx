import { Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import SidebarWithHeader from './SidebarWithHeader'

const CreatePost = () => {
    const[title,setTitle] = useState("")
    const[post, setPost] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImg] = useState("")
    const[price, setPrice] = useState("")
    const handleSubmit = () =>{
        const payload={
               title,
               post,
               category,
               price,
               image
        }
        fetch("http://localhost:8080/posts/create",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json",
                // "Authorization": localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <SidebarWithHeader/>
        <Heading>Add Product</Heading>
       <FormControl w={"40%"} m={"auto"} gap={"20px"}>
        <FormLabel>Enter Title</FormLabel>
        <Input isInvalid errorBorderColor='blue.300' type="text" placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <FormLabel>Enter Post</FormLabel>
        <Input isInvalid errorBorderColor='blue.300' type="text" placeholder='Enter Post'value={post} onChange={(e)=>setPost(e.target.value)}/> 
        <FormLabel>Enter Details</FormLabel>
        <Input isInvalid errorBorderColor='blue.300' type="text" placeholder='Enter Category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
        <FormLabel>Enter Price</FormLabel>
        <Input isInvalid errorBorderColor='blue.300' type="number" placeholder='enter price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <FormLabel>Enter Image URL</FormLabel>
        <Input isInvalid errorBorderColor='blue.300' type="text" placeholder='enter img url' value={image} onChange={(e)=>setImg(e.target.value)}/> <br />
        <Button bg={"blue.400"} onClick={handleSubmit}>Add Product</Button>
        </FormControl> 
    </div>
  )
}

export default CreatePost