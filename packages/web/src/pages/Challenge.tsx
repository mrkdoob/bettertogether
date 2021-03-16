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
              <Text>Descriptie</Text>

              <b>Voordelen</b>
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
