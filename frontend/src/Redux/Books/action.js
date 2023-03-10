import axios from "axios"
import { EDIT_BOOK_SUCCESS, GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes"

export const getBooksRequestAction = () =>{
    return {type:GET_BOOKS_REQUEST}
}

export const getBooksSuccessAction = (payload) =>{
    return {type:GET_BOOKS_SUCCESS,payload}
}

export const getBooksFailureAction = () =>{
    return {type:GET_BOOKS_FAILURE}
}

const editBookSuccess = () =>{
  return {type:EDIT_BOOK_SUCCESS}
}
// http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books
//common are all get request
export const getBooks = (param={})=>(dispatch) =>{
      dispatch(getBooksRequestAction())
      axios.get(`https://alive-foal-long-johns.cyclic.app/posts`,param).then((res)=>{
        console.log(res)
        dispatch(getBooksSuccessAction(res.data))
      }).catch((err)=>{
        dispatch(getBooksFailureAction())
      })
}

export const editBook =(id,bookData) =>(dispatch)=>{
  // console.log(id)
     return axios.patch(`http://localhost:8080/posts/${id}`,bookData).then(()=>{
         dispatch(editBookSuccess())
      })
}
// let obj = {
//   params:{
//     category:["Novel", "Motivational"],
//     _sort:"release_year",
//     _order:"asc"
//   }
// }

//category = "Novel&category=Motivational"