import React from "react"
import { Flex, Box, Button, Text } from "@chakra-ui/core"
import { RouteComponentProps, Link } from "@reach/router"

import { InputProto } from "../components/InputProto"
import { colors } from "../lib/colors"

export const Aanmelden: React.FC<RouteComponentProps> = () => {
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
        <Text color={colors[0]}>Wan</Text>
        <Text color={colors[1]}>del</Text>
        <Text ml={4} color={colors[2]}>
          Chall
        </Text>
        <Text color={colors[3]}>enge</Text>
      </Flex>
      <Box w={["100%", 400]}>
        <Text fontSize="md" mb={8}>
          Via WhatsApp zullen we samen een groepschat opzetten waarin u uw
          collega's, vrienden en/of familie in kunt uitnodigen om aan deze
          challenge mee te doen.
        </Text>
        <InputProto
          name="email"
          label="Telefoonnummer"
          placeholder="0623493843"
        />
        <InputProto name="password" label="Aantal deelnemers" placeholder="4" />
        <InputProto
          name="password"
          label="Beloning"
          placeholder="Samen lunchen"
        />
        <InputProto name="password" label="Duratie" placeholder="4 weken" />
        <Flex align="center" mt={8}>
          <Link to={`/demo`}>
            <Button
              variantColor="blue"
              type="submit"
              loadingText="loading"
              mr={8}
            >
              Begin
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  )
}
