import React from "react";
import MakeFriends from "./make-friends/make-friends";
import Footer from "./footer/footer";
import { Flex } from "@chakra-ui/react";
import Alojamiento from "./alojamiento/alojamiento";





const Landing = () => {
  return (
    <Flex
      direction={{ base: "row", md: "row" }} 
      justify="center" 
      align="center" 
      minHeight="100vh" 
    >
        
       
    
      <MakeFriends></MakeFriends>
      <Alojamiento></Alojamiento>
      <Footer></Footer>

      
    </Flex>
  );
}


export default Landing;