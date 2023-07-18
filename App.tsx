import React from 'react'
import { HomeScreen } from './src/screens'
import { Flex, ThemedStatusBar } from './src/components'
import { ThemeProvider } from './src/context'
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin'
import { storage } from './src/context'

if (__DEV__) {
  initializeMMKVFlipper({ default: storage })
}

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
