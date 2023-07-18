import React from 'react'
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin'
import { NavigationContainer } from '@react-navigation/native'
import { ThemedStatusBar } from './src/components'
import { ThemeProvider, storage } from './src/context'
import { initializeIcons } from './src/constants'
import MainNavigation from './src/screens/MainNavigation'

if (__DEV__) {
  initializeMMKVFlipper({ default: storage })
}

initializeIcons()

function App() {
  return (
    <ThemeProvider>
      <ThemedStatusBar />
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
