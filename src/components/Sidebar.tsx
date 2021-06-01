import { Avatar, Box, Stack, Text, Link, Flex, Icon, textDecoration } from "@chakra-ui/react";
import {AiFillHome} from 'react-icons/ai'
import {BsFillPersonFill, BsFillPeopleFill} from 'react-icons/bs'
import {IoSettingsSharp} from 'react-icons/io5'

export function Sidebar() {

    return (
        <>
            <Box as="aside" w="367px" mr={4} bgColor="blue.300" h="100vh">
                <Flex flex="1" justifyContent="center" pt="51px">
                    <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" width="113px" height="113px" border="6px solid white" />
                </Flex>
                <Stack spacing="12" align="flex-start" flex="1">
                    <Box w="100%">
                        <Flex flex="1" w="100%" justifyContent="center" pt="10px" direction="column">
                            <Text fontWeight='normal' color="white" fontSize="20px" alignSelf="center">JOAOZINHO PEREIRA</Text>
                            <Link alignSelf="center">
                                <Text mt="2" fontWeight="medium" fontSize="1.2rem">Sair</Text>
                            </Link>
                        </Flex>
                        <Stack spacing='8' mt='4rem' align="stretch">
                            <Link display='flex' flex="1" align="center" _hover={{ textDecoration: "none" }}>
                                <Icon as={AiFillHome} fontSize={30} justifyContent="flex-start" ml="15%" />
                                <Text fontWeight="medium" ml="5%" textDecoration="none" fontSize="1.4rem">Home</Text>
                            </Link>
                            <Link display='flex' flex="1" align="center" _hover={{ textDecoration: "none" }}>
                                <Icon as={BsFillPersonFill} fontSize={30} justifyContent="flex-start" ml="15%" />
                                <Text fontWeight="medium" ml="5%" textDecoration="none" fontSize="1.4rem">Perfil</Text>
                            </Link>
                            <Link display='flex' flex="1" align="center" _hover={{ textDecoration: "none" }}>
                                <Icon as={AiFillHome} fontSize={30} justifyContent="flex-start" ml="15%" />
                                <Text fontWeight="medium" ml="5%" textDecoration="none" fontSize="1.4rem">Notificação</Text>
                            </Link>
                            <Link display='flex' flex="1" align="center" _hover={{ textDecoration: "none" }}>
                                <Icon as={BsFillPeopleFill} fontSize={30} justifyContent="flex-start" ml="15%" />
                                <Text fontWeight="medium" ml="5%" textDecoration="none" fontSize="1.4rem">Clientes</Text>
                            </Link>
                            <Link display='flex' flex="1" align="center" _hover={{ textDecoration: "none" }}>
                                <Icon as={IoSettingsSharp} fontSize={30} justifyContent="flex-start" ml="15%" />
                                <Text fontWeight="medium" ml="5%" textDecoration="none" fontSize="1.4rem">Configuração</Text>
                            </Link>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    );
}



{/* <Flex borderTop="2px" borderColor="gray">
<Link display='flex' align="center" margin="auto">
    <Text mt="4" fontWeight="medium">Perfil</Text>
</Link>
</Flex>
<Flex borderTop="2px" borderColor="gray">
<Link display='flex' align="center" margin="auto">
    <Text mt="4" fontWeight="medium">Notificações</Text>
</Link>
</Flex>
<Flex borderTop="2px" borderColor="gray">
<Link display='flex' align="center" margin="auto">
    <Text mt="4" fontWeight="medium">Clientes</Text>
</Link>
</Flex>
<Flex borderTop="2px" borderColor="gray">
<Link display='flex' align="center" margin="auto">
    <Text mt="4" fontWeight="medium">Configurações</Text>
</Link>
</Flex> */}