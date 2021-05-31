import { Avatar, Box, Stack, Text, Link, Flex } from "@chakra-ui/react";

export function Sidebar() {

    return (
        <>
            <Box as="aside" w="64" mr="8" bgColor="blue.300" h="100vh">
                <Flex flex="1" justifyContent="center" pt="51px">
                    <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" width="113px" height="113px" border="6px solid white"/>
                </Flex>
                <Stack spacing="12" align="flex-start" flex="1">
                    <Box  w="100%">
                        <Flex flex="1" w="100%" justifyContent="center" pt="10px" direction="column">
                            <Text fontWeight='normal' color="white" fontSize="20px" alignSelf="center">JOAOZINHO PEREIRA</Text>
                            <Link alignSelf="center">
                                <Text mt="2" fontWeight="medium">Sair</Text>
                            </Link>
                        </Flex>
                        <Stack spacing='4' mt='8' align="stretch">
                            <Link display='flex' align="center">
                                <Text mt="4" fontWeight="medium">Dashboard</Text>
                            </Link>
                        </Stack>
                    </Box>

                </Stack>
            </Box>
        </>
    );
}