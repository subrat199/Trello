import React from 'react'
import {Box,Text,Input,Button} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/ProductReducer/action';
const Resources = () => {
    const [alldata,setData]=useState("")
    const[val,setValue]=useState([])
    const dispatch=useDispatch()
    const product=useSelector((state)=>state.ProductReducer.data)
    const data=product.columns
    console.log(data)
    useEffect(()=>{
        dispatch(getData())
       
      },[])
      const handleClick=()=>{
        console.log(val)
        setValue({...val})
        
      }
      console.log(val)
  return (
    <Box border="1px solid red" w="25%" h="auto" bg="white" borderRadius="10px">
        <Box w="auto" fontWeight="bold" textAlign="start">Resources</Box>
        
          {  data[0].cards.map((data)=>{
          return (<Box  border="1px solid grey" borderRadius="10px" mt="5px">
                <Text>{data.title}</Text>
                <Text>{data.description}</Text>
            </Box>)
            })}
           {/* { val.map((va)=>{
              return (<Box>{va}</Box>)
            })} */}
            
            <Box display="flex" justifyContent="space-evenly">
            <Input type="text" placeholder="Add here..." value={val} onChange={(e)=>setValue(e.target.value)} ></Input>
            <Button onClick={handleClick}>Add</Button>
            </Box>
        
    </Box>
  )
}

export default Resources