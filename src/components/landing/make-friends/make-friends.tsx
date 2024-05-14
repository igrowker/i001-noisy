"use client";
import {
  Box,
  Button,
  Text,
  Image,
  Link as ChakraLink,
  Stack,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import React from "react";

const MakeFriends = () => {
  const width = useBreakpointValue({ base: "100%", md: "429px" });

  const buttonSize = "sm";
  const buttonColor = "#F7FAFC";
  const buttonBg = "#9F7AEA";
  const borderRadius = "13px";
  const padding = "9";

  const cardWidth = useBreakpointValue({ base: "90px", md: "90px" });
  const largeCardHeight = useBreakpointValue({ base: "157px", md: "157px" });
  const smallCardHeight = useBreakpointValue({ base: "82px", md: "82px" });

  const linkData = [
    { text: "Cosquin Rock", src: "/images-tribus/fest2.webp" },
    { text: "Lollapaloza", src: "/images-tribus/fest5.webp" },
    { text: "Tomorrowland", src: "/images-tribus/fest6.webp" },
    { text: "Coachella", src: "/images-tribus/fest3.webp" },
  ];

  const updatedLinkData = [...linkData];
  const lastIndex = updatedLinkData.length - 1;
  [updatedLinkData[lastIndex - 1], updatedLinkData[lastIndex]] = [
    updatedLinkData[lastIndex],
    updatedLinkData[lastIndex - 1],
  ];

  return (
    <Box
      className="yelloow400"
      width={{ base: "429px", sm: "100%", md: "100%" }}
      height={{ base: "288px", sm: "320px", md: "320px" }}
      top="645px"
      bg="#ECC94B"
      position="absolute"
      boxShadow="0px 0px 10px 0px rgba(246, 224, 94, 1),0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)"
    >
      <Box
        className="boxText"
        position="relative"
        width="196px"
        height="143px"
        top="60px"
        left={{ base: "4%", sm: "30%", md: "30%" }}
      >
        <Text
          className="promoText"
          fontFamily="Lato"
          fontSize="18px"
          fontWeight="700"
          lineHeight="30.6px"
          display="-webkit-box"
          overflow="hidden"
          color="#1A202C"
          mt="10px"
          _hover={{ transform: "scale(1.2)" }}
        >
          Encuentra tu tribu,haz amigos y vive una experiencia compartida!
        </Text>
      </Box>

      <Button
        className="buttonTogether"
        size={buttonSize}
        color={buttonColor}
        width="112px"
        height="32px"
        borderRadius="6px"
        bg={buttonBg}
        position="absolute"
        left={{ base: "25%", sm: "38%", md: "38%" }}
        transform="translateX(-50%)"
        top="190px"
      >
        Ir a Juntadas
      </Button>
      <Box
        className="boxCard"
        position="absolute"
        right={{ base: "4", sm: "25%", md: "25%" }}
        top={{ base: "20px", sm: "35px", md: "35px" }}
      >
        <Stack spacing={3} direction="row">
          {updatedLinkData.slice(0, 2).map((item, index) => (
            <Box
              key={index}
              className={index % 2 === 0 ? "large-card" : "small-card"}
              height={index % 2 === 0 ? largeCardHeight : smallCardHeight}
              width={cardWidth}
              borderRadius={borderRadius}
              overflow="hidden"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Box position="relative" height="100%">
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  textAlign="center"
                  bg="transparent"
                  py={2}
                >
                  <ChakraLink textShadow="rgba(0,0,0,1)0px 0px 4px 0px">
                    <Text
                      fontSize="12px"
                      fontFamily="Lato"
                      color="#F7FAFC"
                      textShadow="rgba(0,0,0,1)0px 0px 4px 0px"
                    >
                      {item.text}
                    </Text>
                  </ChakraLink>
                </Box>
                <Image
                  src={item.src}
                  alt={`Imagen ${index + 1}`}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </Box>
            </Box>
          ))}
        </Stack>

        <Stack spacing={3} direction="row" pt="10px">
          {updatedLinkData.slice(2, 4).map((item, index) => (
            <Box
              key={index}
              className={index % 2 === 0 ? "small-card" : "large-card"}
              height={index % 2 === 0 ? smallCardHeight : largeCardHeight}
              width={cardWidth}
              borderRadius={borderRadius}
              overflow="hidden"
              position="relative"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
              top={index === 1 ? "-74px" : "unset"}
              left={index === 1 ? "1%" : "unset"}
              transform={index === 1 ? "translateX(-1%)" : "unset"}
              _hover={{ transform: "scale(1.2)" }}
            >
              <Box position="relative" height="100%">
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  textAlign="center"
                  bg="transparent"
                  py={2}
                >
                  <Link>
                    <Text
                      fontSize="12px"
                      color="#F7FAFC"
                      fontFamily="Lato"
                      textShadow="1px #000000 "
                    >
                      {item.text}
                    </Text>
                  </Link>
                </Box>
                <Image
                  src={item.src}
                  alt={`Imagen ${index + 3}`}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default MakeFriends;
