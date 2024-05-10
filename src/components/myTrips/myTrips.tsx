import { Box, Flex, theme } from "@chakra-ui/react";
import Card from "./card"

function MyTrips (){

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let data = [{
        id: 1,
        festival: "Cosquín Rock",
        from: "Córdoba Capital",
        date:  new Date('2024-07-24'),
        vehicle: "Moto",
        space: 1,
        haveExtraHelmet: true,
        allowBoy: true,
        allowGirl: true,
        allowLGTB: true,
        description: "Comparto el viaje para poder achicar gastos",
        priceForPerson: "",
        priceForTrip: "50 $",
    },{
        id: 2,
        festival: "Cosquín Rock",
        from: "Córdoba Capital",
        date:  new Date('2023-07-23'),
        vehicle: "Bus",
        space: 1,
        haveExtraHelmet: true,
        allowBoy: true,
        allowGirl: true,
        allowLGTB: true,
        description: "Comparto el viaje para poder achicar gastos",
        priceForPerson: "",
        priceForTrip: "50 $",
    },{
        id: 3,
        festival: "Cosquín Rock",
        from: "Córdoba Capital",
        date:  new Date('2023-07-23'),
        vehicle: "Moto",
        space: 1,
        haveExtraHelmet: true,
        allowBoy: true,
        allowGirl: true,
        allowLGTB: true, 
        description: "Comparto el viaje para poder achicar gastos",
        priceForPerson: "",
        priceForTrip: "50 $",
    }]

    let newData = data.filter(e => e.date >= today)
    let oldData = data.filter(e => e.date <= today)
    console.log(data)
    console.log(newData)
    console.log(oldData)
    const gray400 = theme.colors.gray[400];
    
    return(
        <Flex w={"100%"} maxWidth={800} flexDirection={"column"}>
            <Flex justifyContent={"center"} flexWrap={"wrap"}>
                {newData.map(e => (
                    <Card
                        key={e.id}
                        festival={e.festival}
                        from={e.from}
                        date={e.date.getDay()+'/'+e.date.getMonth()}
                        vehicle={e.vehicle}
                        space={e.space}
                        haveExtraHelmet={e.haveExtraHelmet}
                        allowBoy={e.allowBoy}
                        allowGirl={e.allowGirl}
                        allowLGTB={e.allowLGTB}
                        description={e.description}
                        priceForPerson={e.priceForPerson}
                        priceForTrip={e.priceForTrip}
                        active= {true}
                    />
                ))}
            </Flex>
            <line style={{
                border: "1px solid",
                borderColor: gray400,
                marginTop: "29px",
                marginBottom: "9px"
            }} />
            <Flex  display={"flex"} justifyContent={"center"} flexWrap={"wrap"} opacity={0.5}>
                {oldData.map(e => (
                    <Card
                        key={e.id}
                        festival={e.festival}
                        from={e.from}
                        date={e.date.getDay()+'/'+e.date.getMonth()}
                        vehicle={e.vehicle}
                        space={e.space}
                        haveExtraHelmet={e.haveExtraHelmet}
                        allowBoy={e.allowBoy}
                        allowGirl={e.allowGirl}
                        allowLGTB={e.allowLGTB}
                        description={e.description}
                        priceForPerson={e.priceForPerson}
                        priceForTrip={e.priceForTrip}
                        active= {false}
                    />
                ))}

            </Flex>
        </Flex>
    )
}

export default MyTrips;