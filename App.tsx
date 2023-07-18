import React from 'react'
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin'
import { HomeScreen } from './src/screens'
import { Flex, ThemedStatusBar } from './src/components'
import { ThemeProvider, storage } from './src/context'
import { initializeIcons } from './src/constants'

if (__DEV__) {
  initializeMMKVFlipper({ default: storage })
}

initializeIcons()

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
