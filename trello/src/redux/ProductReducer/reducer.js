import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    data: [],
  }
  export const reducer =(state=initialState,{type,payload})=>{
    switch(type){
        case DATA_REQUEST :
            return {...state,isLoading:true}
        case DATA_FAILURE :
            return {...state,isError:true,isLoading:false}
        case DATA_SUCCESS :
            return {...state,isLoading:false,data:payload}
        default :
            return state
    }
  }