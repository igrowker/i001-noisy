import { Box } from '@chakra-ui/react';
import { FaTrash, FaMotorcycle, FaBus, FaCar } from 'react-icons/fa';
import React, { CSSProperties } from 'react';

interface CardProps {
    festival: string;
    from: string;
    date: string;
    vehicle: string
    space: Number;
    haveExtraHelmet: boolean;
    allowBoy: boolean;
    allowGirl: boolean;
    allowLGTB: boolean;
    description: string
    priceForPerson: String;
    priceForTrip: String;
    active: boolean;
}

interface VehicleStyleProps extends Partial<CSSProperties> {
    color: string;
}

const vehicleStyle: VehicleStyleProps = {
    position: "absolute", top: 19, right: 29, zIndex: 5, width: "20px", color: "#A0AEC0"
};

const Card: React.FC<CardProps> = ({ festival, from, date, vehicle, space, haveExtraHelmet, allowBoy, allowGirl, allowLGTB, description, priceForPerson, priceForTrip, active}) =>{
    let iconComponent;
    
    const Acompaniante = (allowBoy && allowGirl && allowLGTB) ? "Todos" : (allowBoy ? "Boy " : "") + (allowGirl ? "Girl " : "") + (allowLGTB ? "LGTB " : "");

    if (active === true) {
        vehicleStyle.color = "#FF1086"
    } else {
        vehicleStyle.color = "#A0AEC0"
    }

    if (vehicle === "Bus") {
        iconComponent = <FaBus style={vehicleStyle} />;
      } else if (vehicle === "Moto") {
        iconComponent = <FaMotorcycle style={vehicleStyle} />;
      } else {
        iconComponent = <FaCar style={vehicleStyle} />;
      }

    return(
        <Box 
            width={333} 
            padding={"13px 12px 14px 21px"} 
            border={"1px solid"} 
            borderColor={"#E2E8F0"} 
            borderRadius={8}
            margin={"20px"}
            position={"relative"}
            shadow={"0px 1px 2px 0px #0000000F"}
            boxShadow= {"0px 1px 3px 0px #0000001A"}
        >
            <h3 style={{fontSize:"12px", fontWeight:700, marginBottom:"12px"}}>{festival}</h3>
            <p style={{fontSize:"12px", fontWeight:400}}>El {date} desde {from}</p>
            <p style={{fontSize:"12px", fontWeight:400}}>{vehicle}, {space.toString()} asiento disponible {vehicle === "Moto" ? (haveExtraHelmet === true ? ", casco extra disponible" : ", casco extra no disponible") : ""}</p>
            <p style={{fontSize:"12px", fontWeight:400}}>Acompañante: {Acompaniante} </p>
            <p style={{fontSize:"12px", fontWeight:400}}>Descripción: {description}</p>
            {priceForPerson === "" ? (
                <p style={{fontSize:"12px", fontWeight:400}}>
                    Tarifa: Por el viaje {priceForTrip}
                </p>
            ) : (
                <p style={{fontSize:"12px", fontWeight:400}}>
                    Tarifa: Por persona {priceForPerson}
                </p>
            )}
            <FaTrash style={{position: "absolute", bottom:9, right:18, zIndex:5, cursor:"pointer"}} />
            {iconComponent}
        </Box>
    )
}

export default Card;