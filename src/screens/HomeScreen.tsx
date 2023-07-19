import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { useTheme } from '../hooks'
import { Flex, PaddedSafeInset } from '../components'
import { GlobalStyles } from '../styles'
import {
  AppsContainer,
  TimeWidget,
  WeatherWidget
} from '../components/organisms'

export default function HomeScreen() {
  const { theme } = useTheme()

  return (
    <Flex>
      <ImageBackground source={theme.homeBGImg} style={GlobalStyles.container}>
        <PaddedSafeInset style={GlobalStyles.gap}>
          <View
            style={[
              GlobalStyles.row,
              GlobalStyles.gap,
              styles.widgetContainer
            ]}>
            <TimeWidget />
            <WeatherWidget />
          </View>
          <AppsContainer />
        </PaddedSafeInset>
      </ImageBackground>
    </Flex>
  )
}

const styles = StyleSheet.create({
  widgetContainer: {
    height: 100
  }
})
