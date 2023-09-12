import {Box,Text,Input,Button} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/ProductReducer/action';

const Doing = () => {
  const [inputValue, setInputValue] = useState('');
  const [tableData, setTableData] = useState([]);
  const dispatch=useDispatch()
  const product=useSelector((state)=>state.ProductReducer.data)
  const data=product.columns
  console.log(data)
  useEffect(()=>{
      dispatch(getData())
    },[])
    const handleClick=()=>{
      if (inputValue.trim() !== '') {
        setTableData([...tableData, inputValue]);
        setInputValue(''); // Clear the input box
      }
      
    }
  return (
    <Box border="1px solid white" w="25%" h="auto" bg="white" borderRadius="10px">
    <Box w="auto" fontWeight="bold" textAlign="start">Doing</Box>
    
    { data ? data[2]?.cards?.map((da)=>{
          return (<Box  border="1px solid grey" borderRadius="10px" mt="5px" key={da.id}>
                <Text>{da.title}</Text>
                <Text>{da.description}</Text>
            </Box>)
            }) : null}
           { tableData.map((va)=>{
              return (<Box>{va}</Box>)
            })}
           <Box display="flex" justifyContent="space-evenly">
            <Input type="text" placeholder="Add here..." value={inputValue} onChange={(e)=>setInputValue(e.target.value)} ></Input>
            <Button onClick={handleClick}>Add</Button>
            </Box>
    
</Box>
  )
}

export default Doing