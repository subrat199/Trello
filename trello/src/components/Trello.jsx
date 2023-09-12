import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Resources from "../Pages/Resources";
import Todo from "../Pages/Todo";
import Doing from "../Pages/Doing";
import Done from "../Pages/Done";

function GradientBox() {
  return (
<Box>
<Box
      w="75%"
      h="500px"
      m="auto"
      mt="10px"
      bgGradient="linear(to-b, #4083b7, #5ac5e5)"
    >
    <Navbar/>

    <Box display="flex" justifyContent="space-evenly" w="95%" m="auto" gap="5px" >
    <Resources/>
    <Todo/>
    <Doing/>
    <Done/>
    </Box>

    </Box>

</Box>
  );
}

export default GradientBox;
