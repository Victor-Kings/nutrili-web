import {Box, Drawer, DrawerOverlay, useBreakpointValue, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { Avatar, Stack, Text, Link, Flex, Icon, Image } from "@chakra-ui/react";
import {AiFillHome} from 'react-icons/ai'
import {BsFillPersonFill, BsFillPeopleFill} from 'react-icons/bs'
import {IoSettingsSharp} from 'react-icons/io5'
import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";
import { SidebarNav } from './SidebarNav'

export function Sidebar() {

    const {isOpen, onClose} = useSidebarDrawer()
    const isDrawerSidebar = useBreakpointValue({
        base: true,
        xl: false,
    })

    if (isDrawerSidebar){
        return(
            <Drawer isOpen={isOpen} placement="left" isFullHeight={true} onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="blue.300" display="flex">
                        <DrawerCloseButton mt="4"/>  
                            <DrawerBody>
                                <SidebarNav/>
                            </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }
    return (
        <>
            <Box as="aside" w="316px" mr={4} bgColor="blue.300" h="100vh">
                <SidebarNav></SidebarNav>
            </Box>
        </>
    );
}
