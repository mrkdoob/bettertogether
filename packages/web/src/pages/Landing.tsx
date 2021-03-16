import React from "react"
import { RouteComponentProps } from "@reach/router"

import { Page } from "../components/Page"
import { Flex, Text, Button, Image, SimpleGrid } from "@chakra-ui/core"
import { colors } from "../lib/colors"
import { CourseItem } from "../components/CourseItem"
import { styled } from "../components/providers/ThemeProvider"

import { Link } from "react-scroll"

interface Props extends RouteComponentProps {}

export const Landing: React.FC<Props> = () => {
  return (
    <Page disableRedirect={true}>
      <Flex
        w="100%"
        h="calc(100vh - 60px)"
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          direction="column"
          justify="center"
          align="space-between"
          w={{ base: "100%", md: "40%" }}
          fontWeight="semibold"
          fontSize="5xl"
          pb={{ base: 8, md: 64 }}
          mt={{ base: "60px", md: 0 }}
        >
          <Flex pb={4} mt={-4}>
            <Text color={colors[0]} mr={2}>
              Better{" "}
            </Text>
            <Text color={colors[1]} mr={2}>
              Together{" "}
            </Text>
          </Flex>
          <Text color="gray.400" fontSize="2xl">
            Verbeter samen je gezondheid
          </Text>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button
              size="lg"
              variant="outline"
              w="fit-content"
              mt={8}
              variantColor="blue"
            >
              Ontdek meer
            </Button>
          </Link>
        </Flex>
        <Flex align="center" w={{ base: "100vw", md: "100%" }} pb={32}>
          <Image src="https://reconnectapp-dev.s3.eu-central-1.amazonaws.com/screenshot-2020-06-29-at-12-51-03-png" />
        </Flex>
      </Flex>

      <Flex
        bg="gray.50"
        position="absolute"
        w="100%"
        left="0"
        justify="center"
        align="center"
        direction="column"
        mt="50px"
        h="250px"
      >
        <Flex
          maxW="1200px"
          w="100%"
          px={4}
          align="center"
          justify="center"
          direction={{ base: "column", md: "row" }}
          id="section1"
        >
          <Flex
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="semibold"
            flexWrap="wrap"
            justify="center"
            mb={{ base: 8, md: 0 }}
          >
            <Text color={colors[0]} mr={2}>
              Kom
            </Text>
            <Text color={colors[1]} mr={2}>
              samen
            </Text>
            <Text color={colors[2]} mr={2}>
              meer in
            </Text>
            <Text color={colors[3]} mr={2}>
              beweging.
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        mt={{ base: "calc(500px + 1rem)", md: "400px" }}
        direction={{ base: "column", md: "row" }}
      >
        <StyledImageColumn w={{ base: "100%", md: "50%" }}>
          <Image
            h="300px"
            w="400px"
            src="https://reconnectapp-dev.s3.eu-central-1.amazonaws.com/screenshot-2020-06-29-at-12-37-35-png"
          />
        </StyledImageColumn>
        <StyledTextColumn
          w={{ base: "100%", md: "50%" }}
          mt={{ base: 16, md: 0 }}
        >
          <Flex fontWeight="semibold" fontSize="2xl" mb={4}>
            <Text color={colors[0]}>Vitaler</Text>
            <Text ml={1} color={colors[1]}>
              door
            </Text>
            <Text ml={1} color={colors[2]}>
              het
            </Text>
            <Text ml={1} color={colors[3]}>
              leven
            </Text>
          </Flex>
          <Text color="gray.400" fontSize="xl">
            Langdurig zitten wordt het nieuwe roken genoemd. Onderbreek het vele
            zitten met onze speciaal ontworpen uitdagingen die jou helpen om de
            negatieve gevolgen van teveel zitten en te weinig bewegen te
            doorbreken.
          </Text>
          <Text color="gray.400" fontSize="xl">
            Wij weten dat zittend werk een grote boosdoener is en richten onze
            programma's speciaal op werknemers.
          </Text>
        </StyledTextColumn>
      </Flex>
      <Flex
        mt={{ base: 16, md: 32 }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <StyledTextColumn
          w={{ base: "100%", md: "50%" }}
          mt={{ base: 16, md: 0 }}
        >
          <Flex fontWeight="semibold" fontSize="2xl" mb={4}>
            <Text color={colors[0]}>To</Text>
            <Text color={colors[1]}>ge</Text>
            <Text color={colors[2]}>th</Text>
            <Text color={colors[3]}>er</Text>
          </Flex>
          <Text color="gray.400" fontSize="xl">
            De sociale omgeving is een belangrijke factor om meer te bewegen. Om
            succesvol nieuwe gewoontes te leren maken wij hier gebruik door
            samen met jouw collega's, vrienden en/of familie een uitdaging aan
            te gaan.
          </Text>
          <Text color="gray.400" fontSize="xl">
            Behaal zo samen jullie doelen en beloningen voor een vitaler leven.
          </Text>
        </StyledTextColumn>
        <StyledImageColumn w={{ base: "100%", md: "50%" }}>
          <Image
            w="400px"
            h="300px"
            src="https://reconnectapp-dev.s3.eu-central-1.amazonaws.com/screenshot-2020-06-29-at-12-33-46-png"
            objectFit="cover"
            // rounded="full"
          />
        </StyledImageColumn>
      </Flex>

      <Flex
        bg="gray.50"
        position="absolute"
        w="100%"
        left="0"
        justify="center"
        align="center"
        direction="column"
        mt="50px"
        h="250px"
      >
        <Flex
          maxW="1200px"
          w="100%"
          px={4}
          align="center"
          justify="center"
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="semibold"
            flexWrap="wrap"
            justify="center"
            mb={{ base: 8, md: 0 }}
          >
            <Text color={colors[0]} mr={2}>
              Kom
            </Text>
            <Text color={colors[1]} mr={2}>
              samen
            </Text>
            <Text color={colors[2]} mr={2}>
              meer in
            </Text>
            <Text color={colors[3]} mr={2}>
              beweging.
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        mt="300px"
        direction="column"
        justify="center"
        align="center"
        py={{ base: 8, md: 24 }}
      >
        <Text
          color="gray.400"
          fontWeight="semibold"
          fontSize="4xl"
          mb={8}
          textAlign="center"
        >
          Kies een challenge
        </Text>

        <SimpleGrid spacing={6} columns={{ base: 1, md: 2, lg: 3 }} p={2}>
          <CourseItem
            link="challenge"
            cover="https://images.unsplash.com/photo-1560741282-a3ff4a507b4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2126&q=80"
            category="Beweging"
            name="Wandel Challenge"
            description="Wandel samen"
          />
          <CourseItem
            link=""
            cover="https://images.unsplash.com/photo-1541625247055-1a61cfa6a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
            category="Beweging"
            name="Fiets Challenge"
            description="Probeer samen vaker de fiets te pakken in deze challenge"
          />
          <CourseItem
            link=""
            cover="https://images.unsplash.com/photo-1599470753165-40b764715bfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            category="Beweging"
            name="Vaker staan Challenge"
            description="Probeer samen het zitten te onderbreken door vaker te staan"
          />
        </SimpleGrid>
      </Flex>
    </Page>
  )
}

const StyledTextColumn = styled(Flex)`
  flex-direction: column;
  justify-content: center;
`

const StyledImageColumn = styled(Flex)`
  justify-content: center;
  align-items: center;
`
