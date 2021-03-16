import React from "react"
import { Flex } from "@chakra-ui/core"

import { AppProvider } from "../components/providers/AppProvider"
import { Navbar } from "../components/Navbar"
import { Router } from "@reach/router"
import { Landing } from "../pages/Landing"
import { Challenge } from '../pages/Challenge'
import { Aanmelden } from '../pages/Aanmelden'
import { Demo } from '../pages/Demo'


export function Application() {
  return (
    <AppProvider>
      <React.Suspense fallback={null}>
        {/* <CheckAuth> */}
        <Flex>
          <Navbar />
          <Router>
            <Landing path="/" />
            <Challenge path="/challenge" />
            <Aanmelden path="/aanmelden" />
            <Demo path="/demo" />
          </Router>
        </Flex>
        {/* </CheckAuth> */}
      </React.Suspense>
    </AppProvider>
  )
}
