import { Box, SimpleGrid } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
    return (
        <Flex direction="row" h="100vh">
            <Sidebar />
            <Flex flex="1" flexDirection="column" mr={4} mb={4}>
                <SimpleGrid columns={2} spacingY="10px" pt={4}>
                    <Box p={4} borderRadius={8} width="500px" height="180px" backgroundColor="green">  </Box>
                </SimpleGrid>
                <SimpleGrid columns={2} width="100%" h="100%" spacingX={4} spacingY={4} justifyContent="space-evenly" mt={4}>
                    <Box borderRadius={8} backgroundColor="red">OK</Box>
                    <Box borderRadius={8} backgroundColor="red">999</Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}