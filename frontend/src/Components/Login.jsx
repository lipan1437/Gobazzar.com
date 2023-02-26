import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    useToast,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import {Link,useNavigate} from "react-router-dom"
  
  export default function Login() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const toast=useToast()
    const navigate = useNavigate()
  
    const handleLogin=()=>{
      const payload={
        email,
        password
      }
  
      fetch(" https://alive-foal-long-johns.cyclic.app/users/login",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
          "Content-type":"application/json"
        }
      }).then(res=>res.json())
      .then((res)=>{
        
        toast({
          position: 'top-right',
          title: 'Login Successful ✔',
          description: `Thank You for Login`,
          status: 'success',
          duration: 5000,
          isClosable: true,
      })
        localStorage.setItem("token",res.token)
        // navigate("/")
      })
      .catch((err)=>{console.log(err)
      toast({
        position: 'top-right',
        title: 'Login Failed ✔',
        description: `Please Signup`,
        status: 'warning',
        duration: 5000,
        isClosable: true,
    })
    // navigate("/signUp")
  })
  
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login in to your Quikr account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel> Enter Your Email </FormLabel>
                <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Enter Your Password</FormLabel>
                <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button

                onClick={handleLogin}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Log in
                </Button>
              </Stack>

            </Stack>
            <Text align={'center'}>
                Already a user? <Link to='/signup'><Text color={'blue.400'}>Sign up</Text></Link>
              </Text>
          </Box>
        </Stack>
      </Flex>
    );
  }