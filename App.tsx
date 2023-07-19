import React from 'react'
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemedStatusBar } from './src/components'
import { ThemeProvider, storage } from './src/context'
import { initializeIcons } from './src/constants'
import MainNavigation from './src/screens/MainNavigation'

const queryClient = new QueryClient()
initializeIcons()

if (__DEV__) {
  initializeMMKVFlipper({ default: storage })
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient })
  })
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ThemedStatusBar />
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
