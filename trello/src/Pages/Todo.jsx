import {Box,Text,Input,Button} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/ProductReducer/action';

const Todo = () => {
  const [alldata,setData]=useState("")
  const dispatch=useDispatch()
  const product=useSelector((state)=>state.ProductReducer.data)
  const data=product.columns
  console.log(data)
  useEffect(()=>{
      dispatch(getData())
    },[])
  return (
    <Box border="1px solid red" w="25%" h="auto" bg="white" borderRadius="10px">
    <Box w="auto" fontWeight="bold" textAlign="start">Todo</Box>
    
      {  data[1].cards.map((data)=>{
      return (<Box  border="1px solid grey" borderRadius="10px" mt="5px">
            <Text>{data.title}</Text>
            <Text>{data.description}</Text>
        </Box>)
        })}
        <Box display="flex" justifyContent="space-evenly">
        <Input type="text" placeholder="Add here..." ></Input>
        <Button>Add</Button>
        </Box>
    
</Box>
  )
}

export default Todo