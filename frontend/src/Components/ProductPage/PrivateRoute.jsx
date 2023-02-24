import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const isAuth = useSelector((store)=>store.authReducer.isAuth)
    const location = useLocation();
    // console.log("privateRoute",location)
    if(!isAuth){
     return <Navigate to={"/login"} state={location.pathname}replace/>
    }
  return children
  
}
