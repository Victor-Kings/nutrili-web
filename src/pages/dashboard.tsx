import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Sidebar/>
        </Flex>
    )
}