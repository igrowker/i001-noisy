import { Box, Button, Image, Text } from "@chakra-ui/react";
import entradas from './entradas.json'; 

const Entradas = () => {
  return (
    <Box
      position="absolute"
      w={{ base: "393px", sm: "98%", md: "98%" }}
      h={{ base: "460px" }}
      top="136px"
      left={{ base: "8px", sm: "1%", md: "1%" }}
      bottom="10px"
    >
      <Box
        className="text-promo"
        position="relative"
        w="321px"
        h="71px"
        top="13px"
        left="43px"
        textAlign="left"
        fontFamily="Lato"
        fontWeight="400"
        fontSize="22px"
        lineHeight="26.4px"
        color="#000000"
      >
        Todo lo que necesitas para vivir tu festival, en un solo lugar.
      </Box>
      <Box
        className="text-slogan"
        position="relative"
        w="351px"
        h="64px"
        top="-20px"
        left="44px"
        fontFamily="Lato"
        fontWeight="800"
        fontSize="24px"
        lineHeight="64px"
        color="#FF1086"
      >
        Are you ready?
      </Box>
      <Box
        className="last-entries"
        position="relative"
        w="184px"
        h="26px"
        top="-20px"
        left="48px"
        fontFamily="Lato"
        fontWeight="700"
        fontSize="16px"
        lineHeight="19.2px"
        color="#1A202C"
      >
        Últimas entradas
        <Box
          className="circle-add"
          position="relative"
          w="24px"
          h="24px"
          left="126px"
          top="-17px"
        >
          <Image src="./images-svg/circleAdd.svg" alt="circle" />
        </Box>
        {entradas.map((entradas, index) => (
        
        <Box
          key={index} 
          className="card-purple600"
          position="relative"
          w="320px"
          h="320px"
          bg="#6B46C1"
          top="-15px"
          left="-40px"
          borderRadius="15px"
          boxShadow="rgba(151, 71, 255, 1) 0px 0px 25px 0px"
        >
          <Image
            src={entradas.img}
            alt={entradas.title}
            w="296px"
            h="142px"
            position="relative"
            borderRadius="9px"
            objectFit="cover"
            top="15px"
            left="12px"
          ></Image>
          <Box
            className="text-fecha"
            position="relative"
            w="100px"
            h="26px"
            left="226px"
            top="20px"
            fontFamily="Lato"
            fontWeight="400"
            fontSize="13px"
            color="#FFFFFF"
          >
           {entradas.date}
          </Box>
          <Box
            className="title-fest"
            position="relative"
            w="150px"
            h="26px"
            left="30px"
            top="20px"
            fontFamily="Lato"
            fontWeight="700"
            fontSize="20px"
            lineHeight="24px"
            color="#FFFFFF"
          >
            {entradas.title}
          </Box>
          <Box
            className="text-description"
            position="relative"
            w="275px"
            h="46px"
            left="30px"
            top="20px"
          >
            <Text
              fontFamily="Lato"
              fontWeight="400"
              fontSize="13px"
              lineHeight="15.6px"
              color="#FFFFFF"
              overflow="hidden"
            >
              {entradas.description}
            </Text>
          </Box>
          <Button size="sm"
                  position="absolute"
                  w="85px"
                  h="32px"
                  left="117.5px"
                  top="272px"
                  color="#1A202C"
                  bg="#F6E05E"
                  borderRadius="6px">
            Entradas
          </Button>
        </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Entradas;
