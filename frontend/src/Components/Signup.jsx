import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [fname,setFname]=useState("")
  const [lname,setLname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const toast = useToast();
  const navigate = useNavigate()

  const handleSignup=()=>{
    if(password === "" || email === "" || fname === "" || lname === ""){
      toast({
        position: 'top-right',
        title: 'Fill Properly',
        description: `Please Fill the detail in proper manner`,
        status: 'warning',
        duration: 5000,
        isClosable: true,
    })
    return;
    }
    const payload={
      name : fname+" "+lname,
      email,
      password
    }

    fetch("https://alive-foal-long-johns.cyclic.app/users/register",{
      method:"POST",
      body:JSON.stringify(payload),
      headers:{
        "Content-type":"application/json"
      }
    }).then(res=>res.json())
    .then(res=>{
      // console.log(res)
      toast({
        position: 'top-right',
        title: 'Sign Up Successfully',
        description: `Thank You Sign Up`,
        status: 'success',
        duration: 5000,
        isClosable: true,
    })
    navigate("/login")
    })
    .catch(err=>{
      toast({
        position: 'top-right',
        title: 'Somthing Wrong Will be happen',
        description: `Sorry for that`,
        status: 'warning',
        duration: 5000,
        isClosable: true,
    })
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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text"  onChange={(e)=>setFname(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name={lname} onChange={(e)=>setLname(e.target.value)}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name={email} onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name={password} onChange={(e)=>setPassword(e.target.value)}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
              onClick={handleSignup}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to='/login'><Text color={'blue.400'}>Login</Text></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}