import React, { useState } from 'react'
import SidebarWithHeader from './SidebarWithHeader';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export default function Admin() {

  
  return (
    <div>
      <SidebarWithHeader />
      <ResetPasswordForm />

    </div>
  )
}


 function ResetPasswordForm(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast()
  
  const handleClick = () => {
     if(email === "goBazzar@gmail.com" && password === "GoBazzar"){
        localStorage.setItem("admin",JSON.stringify("adminPage"))
        toast({
          position: 'top-right',
          title: 'Enjoy!',
          description: `You are now able to access the admin page`,
          status: 'success',
          duration: 5000,
          isClosable: true,
      })
         navigate("/admin/posts")
     }
     else{
      toast({
        position: 'top-right',
        title: 'Wrong Credencial',
        description: `Not able to access Admin Page`,
        status: 'warning',
        duration: 5000,
        isClosable: true,
    })
    return;
     }
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Enter new password
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="goBazzar@gmail.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password"  onChange={(e) => setPassword(e.target.value)} 
          placeholder="GoBazzar" 
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handleClick}
            >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}