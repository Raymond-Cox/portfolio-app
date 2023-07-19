import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useQuery } from '@tanstack/react-query'
import { WeatherAPI } from '../../api'
import { ThemedText } from '../atoms'
import { Icons, Sizes, TextSize, WeatherCodes } from '../../constants'
import { useTheme } from '../../hooks'
import { GlobalStyles } from '../../styles'

export default function WeatherWidget() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather
  })
  const { theme } = useTheme()

  async function fetchWeather() {
    const weather = new WeatherAPI()

    return weather.sevenDayForecast()
  }

  function _renderData() {
    if (isLoading) return <ActivityIndicator size="large" />
    if (isError)
      return (
        <TouchableOpacity
          /** @ts-ignore */
          onPress={refetch}
          style={[
            GlobalStyles.container,
            GlobalStyles.center,
            styles.errorContainer
          ]}>
          <FontAwesomeIcon
            icon={Icons.exclamation}
            size={40}
            color={theme.textColor}
          />
        </TouchableOpacity>
      )

    const { current_weather, hourly_units } = data
    const { DaySVG, NightSVG } = WeatherCodes[current_weather.weathercode]

    // Uses day/night svg depending on time of day
    const WeatherIcon = current_weather.is_day ? DaySVG : NightSVG

    return (
      <View style={[GlobalStyles.container, GlobalStyles.row]}>
        <View style={[GlobalStyles.container, GlobalStyles.center]}>
          <ThemedText size={TextSize.xxl}>
            {Math.floor(current_weather.temperature)}
            {hourly_units.temperature_2m}
          </ThemedText>
        </View>

        <View style={[GlobalStyles.container, GlobalStyles.spaceEvenly]}>
          <WeatherIcon width={'65%'} height={'65%'} />
        </View>
      </View>
    )
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.inputBGColor,
          ...theme.shadows
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
    ...GlobalStyles.shadows
  },
  errorContainer: {
    width: '100%'
  }
})
