import React from "react";
import MakeFriends from "./make-friends/make-friends";
import Footer from "./footer/footer";
import { Box, Flex } from "@chakra-ui/react";





const Landing = () => {
  return (
    <Flex
      direction={{ base: "row", md: "row" }} // Columna en móvil, fila en web
      justify="center" // Centrar horizontalmente
      align="center" // Centrar verticalmente
      minHeight="100vh" // Altura mínima de la pantalla
    >
        {/* Componente de Make Friends */}
       
    
      <MakeFriends></MakeFriends>
      <Footer></Footer>

      
    </Flex>
  );
}


export default Landing;