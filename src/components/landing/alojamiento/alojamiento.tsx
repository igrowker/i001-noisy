import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import alojamientos from './alojamientos.json';

const Alojamiento = () => {
  return (
    <Box
      className="boxlayout-Alojamiento"
      position="absolute"
      width={{ base: "428px", sm: "100%", md: "100%" }}
      height={{ base: "540px", sm: "100%", md: "100%" }}
      top={{ base: "936px", sm: "965px", md: "965px" }}
     
    >
      <Box
        className="boxImage-fondo"
        bgImage="url('/images-tribus/fest1.webp')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        width="100%"
        height="100%"
        border="#000000"
        overflow="hidden"
        opacity="0.5"
      ></Box>

      <Text
        className="textPromo"
        position="absolute"
        left={{ base: "28px", sm: "33%", md: "33%" }}
        fontFamily="Lato"
        fontSize="18px"
        fontWeight="800"
        color="#1A202C"
        width={371}
        height={66}
        textAlign="center"
        top={9}
      >
        ¿Tienes un alojamiento cerca de un festival y quieres rentarlo?
      </Text>

      
      {alojamientos.map((alojamiento, index) => (
        <Box
          key={index}
          width="375px"
          height="101px"
          position="absolute"
          top={`${25 + index * 22}%`}
          left={{ base: "27px", sm: "33%", md: "33%" }}
          borderRadius="15px"
          opacity="90%"
          bg="#6B46C1"
          color="#FFFFFF"
          p="15px"
          mb="20px"
          _hover={{ transform: "scale(1.2)" }}
        >
          <Box position="relative" left="-35px" top="4px">
            <Image
              src={alojamiento.icon}
              bg="#6B46C1"
              borderRadius="2px"
              alt={alojamiento.title}
              position="absolute"
              top="15px"
              left="52px"
            />
          </Box>
          <Box
            position="absolute"
            w={{ base: 200, sm: 200, md: 200 }}
            h={74}
            left="86px"
            top={6}
          >
            <Text
              fontFamily="Lato"
              fontSize={{ base: "15px" }}
              lineHeight="18px"
              color="#F7FAFC"
            >
              {`Para :`} {alojamiento.title} 
            </Text>
            <Text
              fontFamily="Lato"
              fontSize={{ base: "15px" }}
              lineHeight="18px"
              color="#F7FAFC"
            >
              {alojamiento.type} 
            </Text>
            <Text
              fontFamily="Lato"
              fontSize={{ base: "15px" }}
              lineHeight="18px"
              color="#F7FAFC"
            >
              {alojamiento.place}
            </Text>
          </Box>
          <Box position="absolute" w="58px" h="25px" left="300px" top="46px">
            <Text
              fontFamily="Lato"
              fontWeight="800"
              fontSize="12px"
              lineHeight="14.4px"
              color="#F7FAFC"
              textAlign="right"
            >{`Por Noche`}</Text>
          </Box>
          <Box position="absolute" left="310px" top="63px">
            <Text fontFamily="Lato" fontSize="24px" textAlign="right">
              {alojamiento.cost} €
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Alojamiento;
