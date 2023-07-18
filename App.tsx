import React from 'react'
import { HomeScreen } from './src/screens'
import { Flex, ThemedStatusBar } from './src/components'
import { ThemeProvider } from './src/context'

function App() {
  return (
    <ThemeProvider>
      <Flex>
        <ThemedStatusBar />
        <HomeScreen />
      </Flex>
    </ThemeProvider>
  )
}

export default App
