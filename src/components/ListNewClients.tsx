import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Flex,
  Avatar,
  Text,
  AccordionIcon,
  SimpleGrid,
  AccordionPanel,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { IClients } from "../interfaces/clientes.interface";

interface IProps {
  clients: IClients[];
}
export function ListNewClients(props: IProps) {
  return (
    <Accordion allowMultiple borderColor="gray.50" bg="yellow">
      <div style={{height:"90%", backgroundColor:"blue"}}>
      {props.clients.map((values) => (
        <AccordionItem outline="0" boxShadow="none" key={values._id}>
          <div>
            <AccordionButton>
              <Flex
                flex="1"
                width="100%"
                flexDirection="row"
                alignItems="center"
              >
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  width="57px"
                  height="57px"
                  border="3px solid#EBF5FF"
                />
                <Text color="gray.200" pl="5%">
                  {values.name} - {values.idade} anos
                </Text>
                <Text color="gray.50" flex="1" textAlign="end" pr="2%">
                  {values.data}
                </Text>
              </Flex>
              <AccordionIcon color="gray.50" />
            </AccordionButton>
          </div>
          <AccordionPanel color="gray.200" h="360px">
            <SimpleGrid>
              <Flex flex="1" flexDirection="column">
                <Text>Informações: </Text>
                <Text>CPF: {values.cpf} </Text>
                <Text>Endereço: {values.endereco} </Text>
              </Flex>

              <Flex pt="4%">
                <Flex flex="1" flexDirection="column">
                  <Text>Altura: {values.medicao.altura} cm</Text>
                  <Text>IMC: {values.medicao.imc} </Text>
                  <Text>Medida A: {values.medicao.medida_a}</Text>
                  <Text>Medida B: {values.medicao.medida_b}</Text>
                </Flex>
                <Flex flex="1" flexDirection="column">
                  <Text>Peso: {values.medicao.peso} Kg </Text>
                  <Text>Medida C: {values.medicao.medida_c}</Text>
                  <Text>Medida D: {values.medicao.medida_d}x</Text>
                </Flex>
              </Flex>

              <Grid pt="4%" templateColumns="repeat(5,1fr)">
                <GridItem colStart={2} colEnd={5} h="10">
                  <Flex Flex="1" justifyContent="space-evenly">
                    <Button>ACEITAR</Button>
                    <Button>NEGAR</Button>
                  </Flex>
                </GridItem>
              </Grid>
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      ))}
      </div>
    </Accordion>
  );
}
