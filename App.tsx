import React from 'react'
// import type { PropsWithChildren } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { useIsDarkMode } from './src/hooks'

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App() {
  const isDarkMode = useIsDarkMode()
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
      // style={backgroundStyle}
      >
        <View>
          <Text>Hell</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App
