import { Box, Text , Image} from "@chakra-ui/react";







const Footer = () => {
  return (
    <Box className="border"
      width={{ base: "430px", sm:"100%",md: "100%" }}
      height="125px"
      position="absolute"
      top="1473px"
      borderRadius="4px"
      bg="#1A202C"
      boxShadow="rgb(0,0,0,0.04) 0px 10px 10px -5px"
    >
      <Box className="Black-Footer"
        position="relative"
        width="100%"
        height="100%"
        borderRadius="4px"
        border="1px solid #000000"
      >
        <Box className="Text_footer"
        position="absolute" 
        width="144px" 
        height="18px" 
        left="27px">
          <Text
            color="#F7FAFC"
            fontFamily="Lato"
            fontSize="15px"
            fontWeight="700"
            lineHeight="18px"
            top="1489px"
            mt="10px"
          >
            Noisy App
          </Text>
        </Box>
        <Box className="Comment-footer"
          position="relative"
          width="130px"
          height="60px"
          left="27px"
          top="30px"
        >
          <Text
            color="#FFFFFF"
            fontFamily="Lato"
            fontSize="12px"
            fontWeight="400"
            lineHeight="15.4px"
            textAlign="left"
            mt="10px"
            letterSpacing="0.7px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
        <Box
          className="Copyrite"
          position="relative"
          width={{ base: "312px", sm:"100%", md: "100%" }}
          height="19px"
          left="58px"
          top="30px"
        >
          <Text
            color="#A0AEC0"
            fontFamily="Lato"
            fontSize="10px"
            fontWeight="400"
            lineHeight="12px"
            letterSpacing="0.7px"
            textAlign="center"
          >
            NoisyApp ® 2024 - Todos los derechos reservados.
          </Text>
        </Box>
        <Box className="social" 
             marginLeft={{ base: "334px", sm:"85%", md: "85%" }} 
             display="flex" 
             alignItems="center"
             marginTop="-60px">
          <Image src="/images-svg/facebook.svg" bg="white" borderRadius="2px"  alt="Facebook" w="24px" h="24px" mr="14px"/>
          <Image src="/images-svg/instagram.svg" hoverflow="hidden" bg="white" borderRadius="2px"   alt="Instagram" w="24px" h="24px" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
