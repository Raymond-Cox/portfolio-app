import React from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { useTheme } from '../hooks'
import { Flex, PaddedSafeInset, ThemedText } from '../components'
import { GlobalStyles } from '../styles'
import { AppsContainer } from '../components/organisms'

export default function HomeScreen() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Flex>
      <ImageBackground source={theme.homeBGImg} style={GlobalStyles.container}>
        <PaddedSafeInset>
          <ThemedText variant="header">Hello</ThemedText>
          <TouchableOpacity onPress={toggleTheme}>
            <ThemedText>Toggle theme</ThemedText>
          </TouchableOpacity>
          <AppsContainer />
        </PaddedSafeInset>
      </ImageBackground>
    </Flex>
  )
}
