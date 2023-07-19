export interface SevenDayForecast {
  current_weather: CurrentWeather
  elevation: number
  generationtime_ms: number
  hourly: Hourly
  hourly_units: HourlyUnits
  latitude: number
  longitude: number
  timezone: string
  timezone_abbreviation: string
  utc_offset_seconds: number
}

interface CurrentWeather {
  is_day: number
  temperature: number
  time: Date
  weathercode: number
  winddirection: number
  windspeed: number
}

interface Hourly {
  temperature_2m: number[]
  time: Date[]
}

interface HourlyUnits {
  temperature_2m: string
  time: string
}
