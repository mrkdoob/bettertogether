import React from "react"
import { Flex, Box, Image, Text } from "@chakra-ui/core"
import { RouteComponentProps, } from "@reach/router"

import { colors } from '../lib/colors'

export const Demo: React.FC<RouteComponentProps> = () => {
  return (
    <Flex
      h="Calc(100vh - 120px)"
      w={{ base: "100vw", md: "100%" }}
      align="center"
      justifyContent="flex-start"
      p={{ base: 10, lg: "10%" }}
      direction="column"
      mt="120px"
    >
      <Flex fontWeight="semibold" fontSize="4xl" pb={8}>
        <Text color={colors[0]}>D</Text>
        <Text color={colors[1]}>e</Text>
        <Text color={colors[2]}>m</Text>
        <Text color={colors[3]}>o</Text>
      </Flex>
      <Box w={["100%", "700px"]}>
        <Text fontSize="md" mb={8}>Via WhatsApp zullen we samen een groepschat opzetten waarin u uw collega's, vrienden en/of familie in kunt uitnodigen om aan deze challenge mee te doen.</Text>
        <Image src="https://i.imgur.com/d4j0Ir5.png" />
        <Text fontSize="md" mt={16} mb={8}>Via WhatsApp zullen we samen een groepschat opzetten waarin u uw collega's, vrienden en/of familie in kunt uitnodigen om aan deze challenge mee te doen.</Text>
        <Image src="https://i.imgur.com/dKjctRE.png" />
      </Box>
    </Flex>
  )
}
