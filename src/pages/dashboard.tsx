import { Box, SimpleGrid, Icon, Image } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import {Contador} from "../components/Contador";



export default function Dashboard() {

    return (
        <Flex direction="row" h="100vh">
            <Sidebar />
            <Flex flex="1" flexDirection="column" mr={4} mb={4}>
                <SimpleGrid columns={2} spacingY="10px" pt={4} spacingX={4}>
                    <SimpleGrid columns={2} borderRadius={8} maxWidth="100%"  alignItems="center" minChildWidth="200px" spacing={4}>
                            <Contador contentText = "PACIENTE" imageName= "/icons/iconPeoples.svg" valueData= {5} />
                            <Contador contentText = "APROVAÇÕES PENDENTES" imageName= "/icons/iconPeoples.svg" valueData= {5} />
                    </SimpleGrid>
                </SimpleGrid>
                <SimpleGrid columns={2} width="100%" h="100%" spacingX={4} spacingY={4} justifyContent="space-evenly" mt={4}>
                    <Box borderRadius={8} backgroundColor="red">OK</Box>
                    <Box borderRadius={8} backgroundColor="red">999</Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}