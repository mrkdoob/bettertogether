import React from "react"
import { Text, Flex } from "@chakra-ui/core"

import { styled } from "./providers/ThemeProvider"
import { colors } from "../lib/colors"

export const Navbar: React.FC = () => {
  return (
    <>
      <StyledSidebar
        p={{ base: 2, lg: 3 }}
        display={{ base: "none", md: "flex" }}
      >
        <Flex fontSize="xl">
          <Text color={colors[0]}>Bet</Text>
          <Text color={colors[1]}>ter</Text>
          <Text ml={1} color={colors[2]}>
            Tog
          </Text>
          <Text color={colors[3]}>ether</Text>
        </Flex>
      </StyledSidebar>
    </>
  )
}

const StyledSidebar = styled(Flex)`
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.semibold};
  z-index: ${p => p.theme.zIndices.sticky};
  border-bottom: 1px solid ${p => p.theme.colors.gray[100]};
`
