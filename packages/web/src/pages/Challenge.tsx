import React from "react"
import { RouteComponentProps, Link } from "@reach/router"

import { Page } from "../components/Page"
import { Flex, Text, Box, Heading, Button } from "@chakra-ui/core"
import { styled } from "../components/providers/ThemeProvider"

import { Border } from "../components/Border"

export const Challenge: React.FC<RouteComponentProps> = () => {
  return (
    <Page disableRedirect={true}>
      <>
        {/* Banner */}
        <StyledCoverBox
          rounded="lg"
          backgroundImage={
            `url("https://images.unsplash.com/photo-1560741282-a3ff4a507b4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2126&q=80")` ||
            ""
          }
          mt={{ base: 8, md: 0 }}
        >
          <Box
            rounded="lg"
            bg="black"
            // @ts-ignore
            opacity="0.2"
            w="100%"
            h="100%"
            position="absolute"
          />
          <Flex
            direction="column"
            h="100%"
            w="100%"
            justify="center"
            align="center"
            textAlign="center"
            // @ts-ignore
            opacity="0.99"
          >
            <Heading mb={3} fontWeight="normal">
              Wandel Challenge
            </Heading>
            <Text mb={4}>Kom samen meer in beweging</Text>
            <Link to={`/aanmelden`}>
              <Button variantColor="gray" px={8}>
                <Text
                  textTransform="uppercase"
                  letterSpacing="0.125rem"
                  fontSize="xs"
                  color="text"
                >
                  Begin
                </Text>
              </Button>
            </Link>
          </Flex>
        </StyledCoverBox>

        {/* Lead in*/}
        {/* <CourseLeadIn course={course} /> */}

        {/* Full description */}
        <Flex justify="center" align="center" mt={{ base: 0, md: 12 }}>
          <Box w={["100%", "70%"]}>
            <Border mb={{ base: 12, md: 20 }} mt={8} />
            {/* Description */}
            <Box px={4} fontSize="lg">
              <Text>Wil jij in beweging komen of meer bewegen?</Text>
              <Text> Start dan samen met de Wandel Challenge!</Text>
              <Text>
                Tijdens de Wandel Challenge wordt er op een laagdrempelige
                manier een eerste stap gezet om meer te gaan bewegen.{" "}
              </Text>
              <Text>
                De Wandel Challenge is voor iedereen die actiever wil worden,
                gezondheidswinst wil boeken of voor een betere conditie gaat.{" "}
              </Text>
              <Text mt={4}>
                Je kunt zelf kiezen voor hoe lang en met wie je de challenge
                wilt uitvoeren.
              </Text>
              <Text>
                Door de challenge samen met je vrienden, familie en/of collega's
                maak je het leuker en heb je een grotere kans van slagen.
              </Text>
              <Text>
                De challenge zal gefaciliteerd worden in een chat applicatie (op
                dit moment WhatsApp).
              </Text>
              <Text>
                Elke dag zullen er wat tips en weetjes met jullie gedeeld
                worden.{" "}
              </Text>
              <Text>
                Een digitale coach jullie ondersteunen wanneer daar behoefte aan
                is.
              </Text>
              <Text mt={8} fontWeight="bold">
                Voordelen
              </Text>
              <Text mt={4}>
                • Wandelen verlaagt het risico op diabetes. Na langere tijd
                zitten neemt de insulinegevoeligheid af. Dagelijks wandelen
                verlaagt het risico op diabetes met 58%.
              </Text>
              <Text mt={4}>
                • Wandelen is goed voor hart- en bloedvaten. Met wandelen
                verlaagt u de bloeddruk en het cholesterolgehalte, het risico op
                hartproblemen daalt aanzienlijk als u al één keer per week een
                uur wandelt.
              </Text>
              <Text mt={4}>
                • Wandelen ontspant. Zoek een mooie omgeving in de buurt op,
                denk aan een bos, een park of het strand. Kijk eens om u heen en
                laat u afleiden door alle mooie plaatjes van de natuur. Een half
                uur wandelen per dag verlaagt tevens de gevolgen van stress,
                zoals een hoge bloeddruk.
              </Text>
              <Text mt={4}>
                • Wandelen verbetert uw nachtrust. Dagelijks wandelen stimuleert
                uw dag- en nachtritme. Daarnaast zorgt wandelen voor meer
                ontspanning. Hierdoor slaapt u makkelijker in en door.
              </Text>
              <Link to={`/aanmelden`}>
                <Button variantColor="blue" px={8} my={8}>
                  <Text fontSize="md" color="white">
                    Begin
                  </Text>
                </Button>
              </Link>{" "}
            </Box>
          </Box>
        </Flex>
      </>
    </Page>
  )
}

const StyledCoverBox = styled(Box)`
  position: relative;
  height: 40vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: ${p => p.theme.colors.white};
`
