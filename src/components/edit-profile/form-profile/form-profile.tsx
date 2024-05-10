import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Tag,
  TagLabel,
  TagRightIcon,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { profileData } from "@/types/edit-profile";

export default function FormProfile({
  profileData,
  setProfileData,
}: {
  profileData: any;
  setProfileData: Dispatch<SetStateAction<profileData>>;
}) {
  const [formInput, setformInput] = useState({
    favFestivals: "",
    favArtist: "",
  });

  function handleInput(e: any) {
   
    const {
      target: { name, value },
      _reactName,
      key,
    } = e;
    if (_reactName === "onKeyDown") {
      if (key === "Enter") {
        if (value === "") {
          return;
        }
        e.preventDefault();
        const data = profileData;
        const find = data[name].find((f: string) => f === value);
        if (find) {
          return alert("No se admiten datos repetidos");
        }
        data[name].push(value);
        setProfileData(() => ({
          ...data,
        }));
        setformInput((prevData) => ({
          ...prevData,
          [name]: "",
        }));
      }
    }
    if (_reactName === "onChange") {
      setProfileData((prevData: any) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }

  function handleRemove(name: string, value: string) {
    const data = profileData;
    console.log(data, name);
    const removedData = data[name].filter((f: string) => f !== value);
    data[name] = removedData;
    setProfileData(() => ({
      ...data,
    }));
  }

  return (
    <Box display={"flex"} flexDir={"column"} gap={3}>
      <Box display={"flex"} gap={4}>
        <FormControl>
          <FormLabel fontSize={"sm"}>Nombre</FormLabel>
          <Input
            name="name"
            type="text"
            onChange={handleInput}
            value={profileData["name"]}
            rounded={"md"}
            py={{ base: 4, sm: 0, md: 0, lg: 0 }}
            size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
            placeholder="Tu nombre"
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"sm"}>Apellidos</FormLabel>
          <Input
            name="lastName"
            type="text"
            onChange={handleInput}
            value={profileData["lastName"]}
            rounded={"md"}
            py={{ base: 4, sm: 0, md: 0, lg: 0 }}
            size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
            placeholder="Tus apellidos"
          ></Input>
        </FormControl>
      </Box>
      <Box display={"flex"} gap={4}>
        <FormControl>
          <FormLabel fontSize={"sm"}>De dónde eres?</FormLabel>
          <Input
            name="place"
            type="text"
            onChange={handleInput}
            value={profileData["place"]}
            rounded={"md"}
            py={{ base: 4, sm: 0, md: 0, lg: 0 }}
            size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
            placeholder="Ciudad, país"
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"sm"}>Edad</FormLabel>
          <Input
            name="age"
            onChange={handleInput}
            value={profileData["age"]}
            type="number"
            min={16}
            rounded={"md"}
            py={{ base: 4, sm: 0, md: 0, lg: 0 }}
            size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
            placeholder="Edad"
          ></Input>
        </FormControl>
      </Box>
      <Box display={"flex"} flexDir={"column"} gap={3}>
        <FormControl>
          <FormLabel fontSize={"sm"}>Tus festivales</FormLabel>
          <Input
            onChange={(e) => {
              setformInput((prevDates) => ({
                ...prevDates,
                [e.target.name]: e.target.value,
              }));
            }}
            value={formInput.favFestivals}
            name="favFestivals"
            rounded={"md"}
            onKeyDown={handleInput}
            py={{ base: 4, sm: 0, md: 0, lg: 0 }}
            size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
            placeholder="Escribe los tres festivales que más te gusten"
          ></Input>
          <HStack spacing={1} mt={1} display={"flex"} flexWrap={"wrap"}>
            {profileData.favFestivals.map((tag: string, index: any) => (
              <Tag size={"md"} key={index} variant="solid" colorScheme="gray">
                <TagLabel>{tag}</TagLabel>
                <TagRightIcon
                  cursor={"pointer"}
                  onClick={() => handleRemove("favFestivals", tag)}
                  as={CloseIcon}
                />
              </Tag>
            ))}
          </HStack>
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"sm"}>
            Cuáles son tus artistas favoritos?
          </FormLabel>
          <Input
            onChange={(e) => {
              setformInput((prevDates) => ({
                ...prevDates,
                [e.target.name]: e.target.value,
              }));
            }}
            onKeyDown={handleInput}
            value={formInput.favArtist}
            name="favArtist"
            rounded={"md"}
            py={{ base: 4, sm: 0, md: 0, lg: 0 }}
            size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
            placeholder="Escribe los tres artistas que más te gusten"
          ></Input>
          <HStack spacing={1} mt={1} display={"flex"} flexWrap={"wrap"}>
            {profileData.favArtist.map((tag: string, index: any) => (
              <Tag size={"md"} key={index} variant="solid" colorScheme="gray">
                <TagLabel>{tag}</TagLabel>
                <TagRightIcon
                  cursor={"pointer"}
                  onClick={() => handleRemove("favArtist", tag)}
                  as={CloseIcon}
                />
              </Tag>
            ))}
          </HStack>
        </FormControl>
      </Box>
    </Box>
  );
}
