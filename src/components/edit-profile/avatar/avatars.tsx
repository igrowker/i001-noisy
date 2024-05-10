/* eslint-disable @next/next/no-img-element */
import { avatars, profileData } from "@/types/edit-profile";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";

export default function Avatars({setProfileData}:{setProfileData:Dispatch<SetStateAction<profileData>>}) {
  const [avatars, setAvatars] = useState<avatars>({
    avatar1: false,
    avatar2: false,
    avatar3: false,
    avatar4: false,
    avatar5: false,
    avatar6: false,
    avatar7: false,
    avatar8: false,
    avatar9: false,
    avatar10: false,
  });

  function handleChange(name: string, image:string) {
    setAvatars((prevFormData) => {
      const updatedFormData: any = { ...prevFormData };
      Object.keys(updatedFormData).forEach((key) => {
        if (key !== name) {
          updatedFormData[key] = false;
        }
      });
      setProfileData((prevData:any)=>({
        ...prevData,
         ["avatar"]:image,
       }))
      updatedFormData[name] = true;
      return updatedFormData;
    });
  }

  return (
    <Grid templateColumns={{base:"repeat(5, 1fr)",sm:"repeat(7, 1fr)", md:"repeat(10, 1fr)",lg:"repeat(10, 1fr)"}} gap={{base:3,sm:3, md:0.5,lg:0.5}}>
      <GridItem>
        <Image
          onClick={() => handleChange("avatar1","https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/utcbrniu43thfgnwasse.png")}
          boxShadow={avatars.avatar1 ? "0 0 20px rgba(255, 16, 134, 0.5)" : ""}
          width={"48px"}
          height={"48px"}
          src="https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/utcbrniu43thfgnwasse.png"
          alt=""
        />
      </GridItem>
      <GridItem>
        <Image
          onClick={() => handleChange("avatar2","https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/r5onr7onshlhoqam0wve.png")}
          boxShadow={avatars.avatar2 ? "0 0 20px rgba(255, 16, 134, 0.5)" : ""}
          width={"48px"}
          height={"48px"}
          src="https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/r5onr7onshlhoqam0wve.png"
          alt=""
        />
      </GridItem>
      <GridItem>
        <Image
          onClick={() => handleChange("avatar3","https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/pgzcdoosqengzjknvjrn.png")}
          boxShadow={avatars.avatar3 ? "0 0 20px rgba(255, 16, 134, 0.5)" : ""}
          width={"48px"}
          height={"48px"}
          src="https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/pgzcdoosqengzjknvjrn.png"
          alt=""
        />
      </GridItem>
      <GridItem>
        <Image
          onClick={() => handleChange("avatar4","https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/xmsgafflcvoefm8qgdbx.png")}
          boxShadow={avatars.avatar4 ? "0 0 20px rgba(255, 16, 134, 0.5)" : ""}
          width={"48px"}
          height={"48px"}
          src="https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/xmsgafflcvoefm8qgdbx.png"
          alt=""
        />
      </GridItem>
      <GridItem>
        <Image
          onClick={() => handleChange("avatar5","https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/gtpdyohajzbnglntfhvi.png")}
          boxShadow={avatars.avatar5 ? "0 0 20px rgba(255, 16, 134, 0.5)" : ""}
          width={"48px"}
          height={"48px"}
          src="https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/gtpdyohajzbnglntfhvi.png"
          alt=""
        />
      </GridItem>
      <GridItem>
        <Image
          onClick={() => handleChange("avatar6","https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/l9xf5gzv1bpd0uexjwby.png")}
          boxShadow={avatars.avatar6 ? "0 0 20px rgba(255, 16, 134, 0.5)" : ""}
          width={"48px"}
          height={"48px"}
          src="https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/l9xf5gzv1bpd0uexjwby.png"
          alt=""
        />
      </GridItem>

      <GridItem>
        <Image
          onClick={() => handleChange("avatar7","https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/itvoly2d03hqdpqr57nv.png")}
          boxShadow={avatars.avatar7 ? "0 0 20px rgba(255, 16, 134, 0.5)" : ""}
          width={"48px"}
          height={"48px"}
          src="https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/itvoly2d03hqdpqr57nv.png"
          alt=""
        />
      </GridItem>
      <GridItem>
        <Image
          onClick={() => handleChange("avatar8","https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/q3lhsql1moubk3mlea1c.png")}
          boxShadow={avatars.avatar8 ? "0 0 20px rgba(255, 16, 134, 0.5)" : ""}
          width={"48px"}
          height={"48px"}
          src="https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/q3lhsql1moubk3mlea1c.png"
          alt=""
        />
      </GridItem>
      <GridItem>
        <Image
          onClick={() => handleChange("avatar9","https://res.cloudinary.com/dd1gykekz/image/upload/v1715000406/images/hskqc3aevkr3232vzikd.png")}
          boxShadow={avatars.avatar9 ? "0 0 20px rgba(255, 16, 134, 0.5)" : ""}
          width={"48px"}
          height={"48px"}
          src="https://res.cloudinary.com/dd1gykekz/image/upload/v1715000406/images/hskqc3aevkr3232vzikd.png"
          alt=""
        />
      </GridItem>
      <GridItem>
        <Image
          onClick={() => handleChange("avatar10","https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/vhmozeclaw9sdqm3ezu5.png")}
          boxShadow={avatars.avatar10 ? "0 0 20px rgba(255, 16, 134, 0.5)" : ""}
          width={"48px"}
          height={"48px"}
          src="https://res.cloudinary.com/dd1gykekz/image/upload/v1715000405/images/vhmozeclaw9sdqm3ezu5.png"
          alt=""
        />
      </GridItem>
    </Grid>
  );
}
