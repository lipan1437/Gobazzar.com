import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Box, Center, SimpleGrid,Heading,Image, Button, Select} from "@chakra-ui/react"
import SidebarWithHeader from './SidebarWithHeader'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
         fetch("https://alive-foal-long-johns.cyclic.app/posts",{
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
    fetch(`https://alive-foal-long-johns.cyclic.app/posts/delete/${postID}`,{
        method:"DELETE",
        // headers:{
        //     "Authorization":localStorage.getItem("token")
        // }
    }).then(res=>console.log(res))
    .catch(err=>console.log(err))
}
    

  return (
    <div>
    <SidebarWithHeader />
    <div style={{zIndex:"-100",position:"absolute",width:"80%",margin:"0% 0% 0% 20%"}}>
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
    </div>
  )
}

export default Posts

