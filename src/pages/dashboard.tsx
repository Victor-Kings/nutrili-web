import {
  Avatar,
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  Icon,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { Contador } from "../components/Contador";
import { ListNewClients } from "../components/ListNewClients";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Button } from "@chakra-ui/react";
import { IClients } from "../interfaces/clientes.interface";

export default function Dashboard() {
  const newClients: IClients[] = [
    {
      _id: "60bd5abe07a5d6dde663c081",
      name: "Cox Monroe",
      idade: 10,
      data: "Sun Jun 06 2021 20:31:10 GMT-0300 (Horário Padrão de Brasília)",
      cpf: "10376874381",
      endereco: "Melrose Street, 705, Kiskimere, District Of Columbia",
      medicao: {
        altura: 171,
        imc: 23,
        medida_a: 54,
        medida_b: 16,
        peso: 99,
        medida_c: 64,
        medida_d: 84,
      },
    },
    {
      _id: "60bd5abefc84f9e7a30a2042",
      name: "Evans Stephenson",
      idade: 7,
      data: "Sun Jun 06 2021 20:31:10 GMT-0300 (Horário Padrão de Brasília)",
      cpf: "97653984866",
      endereco: "Williams Court, 448, Fowlerville, Hawaii",
      medicao: {
        altura: 152,
        imc: 22,
        medida_a: 35,
        medida_b: 10,
        peso: 54,
        medida_c: 73,
        medida_d: 55,
      },
    },
    {
      _id: "60bd5abed90506afdb6214b1",
      name: "Suarez Erickson",
      idade: 6,
      data: "Sun Jun 06 2021 20:31:10 GMT-0300 (Horário Padrão de Brasília)",
      cpf: "34208120640",
      endereco: "Canal Avenue, 197, Springdale, Maryland",
      medicao: {
        altura: 130,
        imc: 28,
        medida_a: 14,
        medida_b: 42,
        peso: 95,
        medida_c: 89,
        medida_d: 87,
      },
    },
    {
      _id: "60bd5abee42b7bfdcd33a0b2",
      name: "Velasquez Garcia",
      idade: 0,
      data: "Sun Jun 06 2021 20:31:10 GMT-0300 (Horário Padrão de Brasília)",
      cpf: "80719511567",
      endereco: "Gatling Place, 676, Grahamtown, Montana",
      medicao: {
        altura: 160,
        imc: 11,
        medida_a: 60,
        medida_b: 52,
        peso: 60,
        medida_c: 52,
        medida_d: 86,
      },
    },
    {
      _id: "60bd5abe0a2ff3deab0e7295",
      name: "Moses Hunter",
      idade: 2,
      data: "Sun Jun 06 2021 20:31:10 GMT-0300 (Horário Padrão de Brasília)",
      cpf: "33232889494",
      endereco: "Crooke Avenue, 680, Edneyville, Nevada",
      medicao: {
        altura: 113,
        imc: 16,
        medida_a: 37,
        medida_b: 59,
        peso: 74,
        medida_c: 87,
        medida_d: 72,
      },
    },
    {
      _id: "60bd5abe54809f13c733410f",
      name: "Lindsay Glass",
      idade: 4,
      data: "Sun Jun 06 2021 20:31:10 GMT-0300 (Horário Padrão de Brasília)",
      cpf: "20831385413",
      endereco: "Keen Court, 240, Blackgum, Minnesota",
      medicao: {
        altura: 188,
        imc: 14,
        medida_a: 21,
        medida_b: 22,
        peso: 33,
        medida_c: 36,
        medida_d: 96,
      },
    },
    {
      _id: "60bd5abe5522aa43a43b06d0",
      name: "Renee Cummings",
      idade: 7,
      data: "Sun Jun 06 2021 20:31:10 GMT-0300 (Horário Padrão de Brasília)",
      cpf: "25113641039",
      endereco: "Brooklyn Road, 287, Jackpot, Pennsylvania",
      medicao: {
        altura: 154,
        imc: 17,
        medida_a: 15,
        medida_b: 51,
        peso: 37,
        medida_c: 53,
        medida_d: 100,
      },
    },
  ];

  return (
    <Flex direction="row" h="100vh" >
      <Sidebar />
      <Flex flex="1" h="100vh" flexDirection="column" mr={4} mb={4} bg ="green">
        <SimpleGrid columns={2} spacingY="10px" pt={4} spacingX={4}>
          <SimpleGrid
            columns={2}
            borderRadius={8}
            maxWidth="100%"
            alignItems="center"
            minChildWidth="200px"
            spacing={4}
          >
            <Contador
              contentText="PACIENTE"
              imageName="/icons/iconPeoples.svg"
              valueData={5}
            />
            <Contador
              contentText="APROVAÇÕES PENDENTES"
              imageName="/icons/iconPeoples.svg"
              valueData={5}
            />
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid
          columns={2}
          width="100%"
          h="80vh"
          spacingX={4}
          spacingY={4}
          justifyContent="space-evenly"
          mt={4}
          pb={6}
          
        >
          <Box borderRadius={8} h="98%" backgroundColor="white" maxHeight="72%">
            <Flex
              minHeight="60px"
              maxHeight="83px"
              height="15%"
              alignItems="center"
              pl="4%"
              //position="sticky"
              //top = "0"
            >
              <Text color="gray.200" fontSize="26px">
                Aprovações Pendentes
              </Text>
            </Flex>
            <Flex
            pb={4}
            flex="1"
            h="100vh"
            overflowY="scroll"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "24px",
                background: "#B6B6B6",
              },
            }}
            maxHeight="100%"
            >
              <ListNewClients clients={newClients} />
            </Flex>
          </Box>

          <Box borderRadius={8} backgroundColor="red" >
            999
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
