"use client"
import { Box, Button, Center, Input, InputGroup, InputLeftAddon, InputRightAddon, Textarea } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const EditarEvento = () =>{

    const box2Input = {
        display: "flex",
        marginTop: "18px",
        justifyContent: "space-between"
    }

    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%)",
            width: '375px',
            borderRadius: '6px',
            }}>
            
            <Box width={323} mt={21} display={"flex"} flexDirection={"column"}  justifyItems={"center"}>
                <h2 style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "24px",
                }}>Editar Evento</h2>
                <form action="">
                    <Input type="text" mt={11} defaultValue={"Tomorrowland"}></Input>
                    <Input type="text" mt={18} defaultValue={"Río de Janeiro, BR"}></Input>
                    <Box style={box2Input} flexDirection={"row"}>
                        <Input w={"47%"} type="number" defaultValue={"10000"}></Input>
                        <Input w={"47%"} type="text" defaultValue={"Electrónica"}></Input>
                    </Box>
                    <Box style={box2Input} flexDirection={"row"}>
                        <Input w={"47%"} type="date" defaultValue={"20/07/2024"}></Input>
                        <Input w={"47%"} type="text" defaultValue={"8 a.m."}></Input>
                    </Box>
                    <Box style={box2Input} flexDirection={"row"}>
                        <Input w={"47%"} type="text" defaultValue={"€ 250 VIP"}></Input>
                        <Input w={"47%"} type="text" defaultValue={"All access"}></Input>
                    </Box>
                    <Box style={box2Input} flexDirection={"row"}>
                        <Input w={"47%"} type="text" defaultValue={"€ 100 sencilla"}></Input>
                        <Input w={"47%"} type="text" defaultValue={"Gradas"}></Input>
                    </Box>
                    <Textarea mt={21} defaultValue={"Lorem Ipsum "}/>
                    <Textarea mt={21} defaultValue={"Artista1, artista2, artista3, artista4, artista5. "}/>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        }}>
                        <Button mt={29} mb={41} size={"sm"} type="submit" bg="#9F7AEA" textColor="white">
                            Guardar cambios
                        </Button>
                    </Box>
                    
                </form>
            </Box>
            <FaXmark style={{
                position: "absolute",
                top: "14px",
                right: "11px",
                width: "27px",
                height: "27px",
            }} />
        </Box>
    )
}

export default EditarEvento;