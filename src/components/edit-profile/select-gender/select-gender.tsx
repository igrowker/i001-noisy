import {
  Box,
  Divider,
  HStack,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import React, { Dispatch, SetStateAction } from "react";
import { profileData } from "@/types/edit-profile";

export default function SelectGender({
  profileData,
  setProfileData,
}: {
  profileData: any;
  setProfileData: Dispatch<SetStateAction<profileData>>;
}) {

  function handleSelect(value: string) {
    const data = profileData;
    const find = data.favGender.find( (f:string) => f === value)
    if(find){
      return alert("No se admiten datos repetidos");
    }
    if (profileData.favGender.length < 3) {
      data.favGender.push(value);
      setProfileData(() => ({
        ...data,
      }));
    } else {
      return alert("Solo puedes seleccionar 3 generos");
    }
  }

  function handleRemove(value: string) {
    const data = profileData;
    const removedData = data.favGender.filter( (f:string) => f !== value)
    data["favGender"] = removedData
    setProfileData(() => ({
      ...data,
    }));
  }

  return (
    <Box display={"flex"} flexDir={"column"} gap={2} fontSize={"sm"}>
      <Text>Escoge tus tres géneros favoritos: </Text>
      <HStack spacing={1} display={"flex"} flexWrap={"wrap"}>
        {profileData.favGender.map((tag: string, index: any) => (
          <Tag size={"md"} key={index} variant="solid" colorScheme="yellow">
            <TagLabel>{tag}</TagLabel>
            <TagRightIcon
              cursor={"pointer"}
              onClick={() => handleRemove(tag)}
              as={CloseIcon}
            />
          </Tag>
        ))}
      </HStack>
      <Divider />
      <HStack spacing={1} display={"flex"} flexWrap={"wrap"}>
        {[
          "Reggaeton",
          "Rock",
          "FolkMetal",
          "Punk",
          "Indie",
          "Retro",
          "Trap",
          "HipHop",
          "Cumbia",
          "Folklore",
        ].map((tag, index) => (
          <Tag
            onClick={() => {
              handleSelect(tag);
            }}
            size={"md"}
            key={index}
            variant="outline"
            cursor={"pointer"}
            colorScheme="blue"
          >
            <TagLabel>{tag}</TagLabel>
            <TagRightIcon as={AddIcon} />
          </Tag>
        ))}
      </HStack>
    </Box>
  );
}
