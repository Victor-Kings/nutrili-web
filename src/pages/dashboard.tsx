import { Box, SimpleGrid, Icon, Image } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";


export default function Dashboard() {
    return (
        <Flex direction="row" h="100vh">
            <Sidebar />
            <Flex flex="1" flexDirection="column" mr={4} mb={4}>
                <SimpleGrid columns={2} spacingY="10px" pt={4} spacingX={4}>
                    <SimpleGrid columns={2} borderRadius={8} maxWidth="100%"  alignItems="center" minChildWidth="200px" spacing={4} >
                            <Box display="flex" flex="1" width="100%" height="100%" borderRadius={8} boxShadow="md" flexDirection="row" backgroundColor="white">
                                {/* <Icon as="../assets/iconPeoples.png" backgroundColor="green" width="96px" h="100%" borderRadius={8}></Icon> */}
                                <Image src="/icons/iconPeoples.svg" alt="me" bg="blue.200"/>
                                <Flex display="flex" flexDirection="column" justifyContent="center" justifySelf="center" alignItems="center" margin="auto">
                                    <Text fontSize="1.6rem" color="black" fontWeight="bold">5</Text>
                                    <Text fontSize="1.2rem" color="black" fontWeight="bold">Pacientes</Text>
                                </Flex>
                            </Box>
                            <Box display="flex" flex="1" width="100%" height="100%" borderRadius={8} boxShadow="md" flexDirection="row" backgroundColor="white">
                                <Icon backgroundColor="green" width="96px" h="100%" borderRadius={8}/>
                                <Flex display="flex" flexDirection="column" justifyContent="center" justifySelf="center" alignItems="center" margin="auto">
                                    <Text fontSize="1.6rem" color="black" fontWeight="bold">5</Text>
                                    <Text fontSize="1.2rem" color="black" fontWeight="bold">Aprovações Pendentes</Text>
                                </Flex>
                            </Box>
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