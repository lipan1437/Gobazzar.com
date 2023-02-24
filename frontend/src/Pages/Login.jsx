import { Box, Button, FormControl, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { login } from '../Redux/Authentication/action'

export default function Login() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const dispatch = useDispatch()
const navigate = useNavigate();
const location = useLocation()
// console.log("Login-page",location)
  const loginHandler = () =>{
     let userData = {
      email,
      password
     }
     dispatch(login(userData)).then(()=>{
      navigate(location.state,{replace:true})
     })
  }
  return (
  <Box w={"100%"}>
    <FormControl isRequired w={"30%"} m={"auto"}>
      <Heading>Login</Heading>
      <div>
        <label htmlFor="">Email</label>
        <Input isInvalid errorBorderColor='blue.300' type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Password</label>
        <Input isInvalid errorBorderColor='blue.300' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <Button bg={"blue.400"} onClick={loginHandler}>Login</Button>
    </FormControl>
  </Box>  
  )
}
