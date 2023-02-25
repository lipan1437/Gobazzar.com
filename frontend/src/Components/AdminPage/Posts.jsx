import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Box, Center, SimpleGrid,Heading,Image, Button, Select} from "@chakra-ui/react"

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
         fetch("http://localhost:8080/posts",{
            headers:{
                // "Authorization":localStorage.getItem("token")
                "Content-type":"application/json"
            }
         }).then(res=>res.json())
         .then(res=>{
            console.log(res)
            setPosts(res)
         })
         .catch(err=>console.log(err))
    },[posts])
    console.log(posts)
const deletePost =(postID)=>{
    fetch(`http://localhost:8080/posts/delete/${postID}`,{
        method:"DELETE",
        // headers:{
        //     "Authorization":localStorage.getItem("token")
        // }
    }).then(res=>console.log(res))
    .catch(err=>console.log(err))
}
    
    // const updatePost =(userID)=>{
    //    fetch(`https://rich-gold-agouti-sari.cyclic.app/posts/update/${userID}`,{
    //      method:"PATCH",
    //      headers:{
    //         "Authorization":localStorage.getItem("token")
    //      }
    //    })
    // }
  return (
    <div>
        <h3>All Posts you can see over here</h3>
        <hr />
        <div>
        <SimpleGrid  mt={3} p={5} columns={{base: 1,sm: 2,md: 3,lg: 4,}} spacing='15px' w={"100%"}>
             {posts? posts && posts.map((data,id) => (
          <Box w="100%" h="100%" cursor="pointer" bg="white" boxShadow="2xl" p={3} key={id}>
               <Center> <Image w="100%" h="40%" src={data.image} /></Center>
                <Heading size="xs" mt={2} >
                    {data.title}
                </Heading>
                <Heading  size="xs" mt={2}>
                  {data.post}
                </Heading>
                <Heading  size="xs" mt={2}>
                 Price: {data.price}
                </Heading>
                <Button onClick={()=>deletePost(data._id)}>delete</Button>
          </Box>      
          )):<h2>Not found</h2>}
        </SimpleGrid>
        </div>
    </div>
  )
}

export default Posts

