import { Box, Button, Container, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Avatar from "./avatar/avatar";
import FormProfile from "./form-profile/form-profile";
import SelectGender from "./select-gender/select-gender";
import { profileData } from "@/types/edit-profile";

export default function EditProfile() {
  const [profileData, setProfileData] = useState<profileData>({
    avatar: "",
    name: "",
    lastName: "",
    place: "",
    age: null,
    favFestivals: [],
    favArtist: [],
    favGender: [],
  });
  function handleSubmit(e: any) {
    e.preventDefault();
    alert("Cambios subidos");
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        gap={4}
        p={10}
        boxShadow={"md"}
      >
        <Box display={"flex"} flexDir={"column"} gap={4} maxW={"500px"}>
          <Text fontWeight={"semibold"} fontSize={"lg"} as={"h1"}>
            Mi Perfil
          </Text>
          <Avatar setProfileData={setProfileData}></Avatar>
          <FormProfile
            profileData={profileData}
            setProfileData={setProfileData}
          ></FormProfile>
          <SelectGender
            profileData={profileData}
            setProfileData={setProfileData}
          ></SelectGender>{" "}
          <Box
            display={"flex"}
            justifyContent={"center"}
          >
            <Button type="submit" w={{
              base: "60%",
              sm: "40%",
              md: "100%",
              lg: "100%",
            }} color={"white"} bgColor={"#9F7AEA"}>
              Guardar cambios
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
}
