import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Weather } from '../../api'
import { ThemedText } from '../atoms'
import { useQuery } from '@tanstack/react-query'
import { Sizes } from '../../constants'
import { useTheme } from '../../hooks'

export default function WeatherWidget() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather
  })
  const { theme } = useTheme()

  async function fetchWeather() {
    const weather = new Weather()

    return weather.sevenDayForecast()
  }

  function _renderData() {
    console.log(error)
    /** @ts-ignore */
    if (isLoading) return <ActivityIndicator size="large" />

    if (isError) return <ThemedText>{error.toString()}</ThemedText>

    const { current_weather, hourly_units } = data
    return (
      <ThemedText>
        {current_weather?.temperature}
        {hourly_units?.temperature_2m}
      </ThemedText>
    )
  }
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.inputBGColor,
          shadowColor: theme.shadowColor,
          shadowOpacity: theme.shadowOpacity
        }
      ]}>
      {_renderData()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Sizes.borderRadius,
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 3
  }
})
