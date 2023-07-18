import React from 'react'
import { ImageBackground } from 'react-native'
import { useTheme } from '../hooks'
import { Flex, PaddedSafeInset } from '../components'
import { GlobalStyles } from '../styles'
import { AppsContainer } from '../components/organisms'

export default function HomeScreen() {
  const { theme } = useTheme()

  return (
    <Flex>
      <ImageBackground source={theme.homeBGImg} style={GlobalStyles.container}>
        <PaddedSafeInset>
          <AppsContainer />
        </PaddedSafeInset>
      </ImageBackground>
    </Flex>
  )
}
