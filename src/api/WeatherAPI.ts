import axios from 'axios'
import type { SevenDayForecast } from '../types'

export default class WeatherAPI {
  url: string
  constructor() {
    this.url =
      'https://api.open-meteo.com/v1/forecast?hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto&latitude=42.6459&longitude=-85.2908'
  }

  async sevenDayForecast(): Promise<SevenDayForecast> {
    const result = await axios.get(this.url)

    return result.data
  }
}
