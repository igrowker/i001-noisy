import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Avatars from './avatars'

export default function Avatar({setProfileData}:{setProfileData:any}) {
  return (
    <Box display={"flex"} flexDir={"column"} gap={2} mb={4}>
        <Text as={"h6"} fontSize={"small"}>Escoge un avatar</Text>
        <Box display={"flex"} justifyContent={{base:"center",sm:"start",md:"center",lg:"center"}}>
        <Avatars setProfileData={setProfileData}></Avatars>
        </Box>
    </Box>
  )
}
