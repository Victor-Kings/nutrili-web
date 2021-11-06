import { Text, Flex, Input, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { AddIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { GetDataUserService } from '../../services/GetDataUserService/GetDataUserService'

interface ICardDietData {
  nameFeed: string
  foods: string[]
}
interface ICardDietProps {
  dataDiet: ICardDietData[]
  patientID: string
}

export function CardDiet({ dataDiet, patientID }: ICardDietProps) {
  const [cards, setCards] = useState<ICardDietData[]>(dataDiet)

  const [isNewFeed, setIsNewFeed] = useState(false)
  const [newFeed, setNewFeed] = useState<ICardDietData>(null)

  const [isNewFood, setIsNewFood] = useState('')
  const [newFood, setNewFood] = useState<string>('')

  console.log('NEW FOOD', newFood)

  const handlerNewFeed = () => {
    setCards([...cards, newFeed])
    setNewFeed({ nameFeed: '', foods: [] })
  }

  const deleteFeed = (value: ICardDietData) => {
    const list = cards.filter((item: ICardDietData) => item !== value)
    setCards(list)

    console.log('DELETANDO FEED', cards)
    cards.filter((element) => {
      if (element == value && element.foods.length > 0) {
        sendDataDiet()
      }
    })
  }

  const handlerNewFood = (value: ICardDietData) => {
    const auxCards = cards
    auxCards.forEach((itemCard, index) => {
      if (itemCard == value) auxCards[index].foods.push(newFood)
    })
    setCards(auxCards)
    setNewFood('')
    setIsNewFood('')

    console.log('ADICIONANDO FOOD', cards)
    auxCards.filter((element) => {
      if (element == value && element.foods.length > 0) {
        sendDataDiet()
      }
    })
  }

  const deleteFood = (value: ICardDietData, itemFood: string) => {
    cards.filter((itemCard) => {
      if (itemCard == value) {
        const indexFood = itemCard.foods.findIndex(
          (item: string) => item == itemFood
        )
        itemCard.foods.splice(indexFood, 1)
      }
    })

    setCards(cards.slice())
    console.log('DELETENADO FOOD', cards)

    cards.filter((element) => {
      if (element == value && element.foods.length > 0) {
        sendDataDiet()
      }
    })
  }

  const sendDataDiet = () => {
    new GetDataUserService().updateDataDietUser(patientID, cards)
  }

  return (
    <Flex
      backgroundColor="white"
      h="100%"
      // mr="10px"
      // ml="10px"
      // mt={{ base: '', lg: '25px' }}
      borderRadius="5px"
      justifyContent="flex-start"
      flexDir="column"
      w="100%"
    >
      <Text color="#494949" fontWeight="bold" fontSize="24px" pl="2%">
        Dieta da semana
      </Text>
      <Flex
        height="88%"
        w="98%"
        overflow="auto"
        alignSelf="center"
        flexWrap={{ base: 'wrap', xl: 'unset' }}
        css={{
          '&::-webkit-scrollbar': {
            width: '2px',
            height: '5px'
          },
          '&::-webkit-scrollbar-track': {
            width: '2px',
            height: '2px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#4ba1d3',
            borderRadius: '24px'
          }
        }}
      >
        {cards.map((value, index) => (
          <Flex
            key={`${index}-${value?.nameFeed}`}
            pt="1%"
            flexDir="column"
            alignItems="center"
            css={{
              background: '#FFFFFF',
              'box-shadow': '1px 1px 4px rgba(0, 0, 0, 0.25)',
              'border-radius': '3px'
            }}
            w="22%"
            ml="1px"
            mr="2%"
            minH="350px"
            minW="300px"
            mb="10px"
          >
            <Flex alignItems="center" justifyContent="space-between" w="90%">
              <Text color="#6F6F6F" fontSize="18px">
                {value?.nameFeed}
              </Text>
              <IconButton
                ml="20%"
                aria-label="Add feed"
                icon={<CloseIcon />}
                onClick={() => {
                  deleteFeed(value)
                }}
              />
            </Flex>
            <Flex
              flexDirection="column"
              w="92%"
              overflowY="auto"
              maxH="300px"
              css={{
                '&::-webkit-scrollbar': {
                  width: '5px'
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                  height: '10px'
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#4ba1d3',
                  borderRadius: '24px'
                }
              }}
            >
              {value.foods?.map((valueFoods, index) => (
                <>
                  <Flex
                    key={`${valueFoods}-${index}-${value?.nameFeed}`}
                    w="98%"
                    minH="40px"
                    alignSelf="center"
                    borderRadius="4px"
                    alignItems="center"
                    px="5%"
                    my="2%"
                    justifyContent="space-between"
                    css={{
                      background: '#FFFFFF',
                      'box-shadow': '1px 1px 4px rgba(0, 0, 0, 0.25)',
                      'border-radius': '3px'
                    }}
                  >
                    <Text color="#6F6F6F" fontSize="18px">
                      {valueFoods}
                    </Text>
                    <IconButton
                      variant="outline"
                      colorScheme="red"
                      aria-label="Add feed"
                      icon={<CloseIcon />}
                      borderRadius="50%"
                      fontSize="10px"
                      size="xs"
                      onClick={() => {
                        deleteFood(value, valueFoods)
                      }}
                    />
                  </Flex>

                  {index == value.foods?.length - 1 && (
                    <Flex
                      w="98%"
                      minH="40px"
                      alignSelf="center"
                      borderRadius="4px"
                      alignItems="center"
                      px="5%"
                      my="2%"
                      justifyContent="space-between"
                      css={{
                        background: '#FFFFFF',
                        'box-shadow': '1px 1px 4px rgba(0, 0, 0, 0.25)',
                        'border-radius': '3px'
                      }}
                    >
                      <Text color="#6F6F6F" fontSize="18px">
                        Adicionar Alimento
                      </Text>
                      <IconButton
                        variant="outline"
                        colorScheme="blue"
                        aria-label="Add feed"
                        icon={<AddIcon />}
                        borderRadius="50%"
                        fontSize="10px"
                        size="xs"
                        onClick={() => {
                          setIsNewFood(`${value.nameFeed}`)
                        }}
                      />
                    </Flex>
                  )}

                  {isNewFood == value.nameFeed &&
                    index == value.foods?.length - 1 && (
                      <Flex
                        w="98%"
                        minH="40px"
                        bg="blueviolet"
                        alignSelf="center"
                        borderRadius="4px"
                        alignItems="center"
                        px="5%"
                        my="2%"
                        justifyContent="space-between"
                        css={{
                          background: '#FFFFFF',
                          'box-shadow': '1px 1px 4px rgba(0, 0, 0, 0.25)',
                          'border-radius': '3px'
                        }}
                      >
                        <Input
                          textColor="blackAlpha.800"
                          borderRadius="5px"
                          type="text"
                          value={newFood}
                          onChange={(event) => setNewFood(event.target.value)}
                        />
                        <IconButton
                          variant="outline"
                          colorScheme="green"
                          aria-label="Add food"
                          icon={<CheckIcon />}
                          borderRadius="50%"
                          fontSize="10px"
                          size="xs"
                          onClick={() => {
                            handlerNewFood(value)
                          }}
                        />
                      </Flex>
                    )}
                </>
              ))}
              {value.foods?.length == 0 && (
                <Flex
                  w="98%"
                  minH="40px"
                  alignSelf="center"
                  borderRadius="4px"
                  alignItems="center"
                  px="5%"
                  my="2%"
                  justifyContent="space-between"
                  css={{
                    background: '#FFFFFF',
                    'box-shadow': '1px 1px 4px rgba(0, 0, 0, 0.25)',
                    'border-radius': '3px'
                  }}
                >
                  <Text color="#6F6F6F" fontSize="18px">
                    Adicionar Alimento
                  </Text>
                  <IconButton
                    variant="outline"
                    colorScheme="blue"
                    aria-label="Add feed"
                    icon={<AddIcon />}
                    borderRadius="50%"
                    fontSize="10px"
                    size="xs"
                    onClick={() => {
                      setIsNewFood(`${value.nameFeed}`)
                    }}
                  />
                </Flex>
              )}
              {isNewFood == value.nameFeed && value.foods?.length == 0 && (
                <Flex
                  w="98%"
                  minH="40px"
                  bg="blueviolet"
                  alignSelf="center"
                  borderRadius="4px"
                  alignItems="center"
                  px="5%"
                  my="2%"
                  justifyContent="space-between"
                  css={{
                    background: '#FFFFFF',
                    'box-shadow': '1px 1px 4px rgba(0, 0, 0, 0.25)',
                    'border-radius': '3px'
                  }}
                >
                  <Input
                    textColor="blackAlpha.800"
                    borderRadius="5px"
                    type="text"
                    value={newFood}
                    onChange={(event) => setNewFood(event.target.value)}
                  />
                  <IconButton
                    variant="outline"
                    colorScheme="green"
                    aria-label="Add food"
                    icon={<CheckIcon />}
                    borderRadius="50%"
                    fontSize="10px"
                    size="xs"
                    onClick={() => {
                      handlerNewFood(value)
                    }}
                  />
                </Flex>
              )}
            </Flex>
          </Flex>
        ))}
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          bg="blue.100"
          minW="20%"
        >
          {isNewFeed ? (
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              minW="300px"
              minH="350px"
            >
              <Text color="#6F6F6F" fontSize="18px">
                Nome da Refeição
              </Text>
              <Flex>
                <Input
                  textColor="blackAlpha.800"
                  borderRadius="5px"
                  type="text"
                  value={newFeed?.nameFeed}
                  onChange={(event) => {
                    setNewFeed({
                      nameFeed: event.target.value,
                      foods: ['Exemplo']
                    })
                  }}
                />
                <IconButton
                  aria-label="Add feed"
                  icon={<CheckIcon />}
                  onClick={() => {
                    handlerNewFeed()
                  }}
                />
              </Flex>
            </Flex>
          ) : (
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              minW="300px"
              minH="350px"
            >
              <Text color="#6F6F6F" fontSize="18px">
                Adicionar Refeição
              </Text>
              <IconButton
                aria-label="Add feed"
                icon={<AddIcon />}
                onClick={() => {
                  setIsNewFeed(true)
                }}
              />
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
