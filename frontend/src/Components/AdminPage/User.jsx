
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SidebarWithHeader from './SidebarWithHeader';

import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';

export default function User() {
    const [posts,setPosts] = useState([])
    const navigate = useNavigate();

  

    useEffect(()=>{
        fetch("https://alive-foal-long-johns.cyclic.app/users/register/detail",{
           headers:{
               // "Authorization":localStorage.getItem("token")
               "Content-type":"application/json"
           }
        }).then(res=>res.json())
        .then(res=>{
        //    console.log(res)
           setPosts(res)
        })
        .catch(err=>console.log(err))
   },[posts])

   let value = localStorage.getItem("admin");
   if(value){
     navigate("/admin")
   } 
  return (
    <>
    <SidebarWithHeader />

    <div>
        <div style={{zIndex:"-100",position:"absolute",width:"80%",margin:"0% 0% 0% 20%"}}>
            <div className='divWrapper' style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
            {
               posts &&  posts.map((el,i) => (
                  <SocialProfileWithImage  key={i} data ={el} />
        )) 
            }
            </div>
        </div>
       
    </div>
    </>
  )
}



  
function SocialProfileWithImage({data}) {

    const handleClick = (id) => {
        fetch(`https://alive-foal-long-johns.cyclic.app/users/delete/${id}`,{
        method:"DELETE",
        // headers:{
        //     "Authorization":localStorage.getItem("token")
        // }
    }).then(res=>console.log(res))
    .catch(err=>console.log(err))
    }
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          {/* <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          /> */}
          <Flex justify={'center'} mt={-12}>
            
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {/* {data.name} */}
              </Heading>
              <Text color={'gray.500'}>{data.name}</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontSize={'sm'} color={'gray.500'}>
                  {data.email}
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }} 
              onClick={() => handleClick(data._id)}
              >
              Delete
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }



//   @media only screen and (min-width : 900px) and (max-width : 1100px){
//     grid-template-columns: repeat(3,1fr);
//   }
//   @media only screen and (min-width : 550px) and (max-width : 899px){
//     grid-template-columns: repeat(2,1fr);
//   }
//   @media only screen and (max-width :549px){
//     grid-template-columns: repeat(1,1fr);
//   }