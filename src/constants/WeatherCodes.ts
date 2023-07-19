import type { FC, SVGProps } from 'react'
import DayClear from '../assets/weatherIcons/day_clear.svg'
import NightClear from '../assets/weatherIcons/night_half_moon_clear.svg'
import DayPartlyCloudy from '../assets/weatherIcons/day_partial_cloud.svg'
import NightPartlyCloudy from '../assets/weatherIcons/night_half_moon_partial_cloud.svg'
import Overcast from '../assets/weatherIcons/overcast.svg'
import Mist from '../assets/weatherIcons/mist.svg'
import Fog from '../assets/weatherIcons/fog.svg'
import DayRain from '../assets/weatherIcons/day_rain.svg'
import NightRain from '../assets/weatherIcons/night_half_moon_rain.svg'
import Rain from '../assets/weatherIcons/rain.svg'
import DaySleet from '../assets/weatherIcons/day_sleet.svg'
import NightSleet from '../assets/weatherIcons/night_half_moon_sleet.svg'
import Sleet from '../assets/weatherIcons/sleet.svg'
import DaySnow from '../assets/weatherIcons/day_snow.svg'
import NightSnow from '../assets/weatherIcons/night_half_moon_snow.svg'
import Snow from '../assets/weatherIcons/snow.svg'
import Thunder from '../assets/weatherIcons/rain_thunder.svg'

interface Code {
  description: string
  /** @ts-ignore */
  DaySVG: FC<SVGProps>
  /** @ts-ignore */
  NightSVG: FC<SVGProps>
}

interface IWeatherCodes {
  [key: number]: Code
}

export const WeatherCodes: IWeatherCodes = {
  0: {
    description: 'Clear',
    DaySVG: DayClear,
    NightSVG: NightClear
  },
  1: {
    description: 'Clear',
    DaySVG: DayClear,
    NightSVG: NightClear
  },
  2: {
    description: 'Partly Cloudy',
    DaySVG: DayPartlyCloudy,
    NightSVG: NightPartlyCloudy
  },
  3: {
    description: 'Overcast',
    DaySVG: Overcast,
    NightSVG: Overcast
  },
  45: {
    description: 'Fog',
    DaySVG: Mist,
    NightSVG: Mist
  },
  46: {
    description: 'Fog',
    DaySVG: Fog,
    NightSVG: Fog
  },
  51: {
    description: 'Light Drizzle',
    DaySVG: DayRain,
    NightSVG: NightRain
  },
  53: {
    description: 'Drizzle',
    DaySVG: DayRain,
    NightSVG: NightRain
  },
  55: {
    description: 'Heavy Drizzle',
    DaySVG: Rain,
    NightSVG: Rain
  },
  56: {
    description: 'Freezing Drizzle',
    DaySVG: DaySleet,
    NightSVG: NightSleet
  },
  57: {
    description: 'Freezing Drizzle',
    DaySVG: Sleet,
    NightSVG: Sleet
  },
  61: {
    description: 'Light Rain',
    DaySVG: DayRain,
    NightSVG: NightRain
  },
  63: {
    description: 'Rain',
    DaySVG: Rain,
    NightSVG: Rain
  },
  65: {
    description: 'Heavy Rain',
    DaySVG: Rain,
    NightSVG: Rain
  },
  66: {
    description: 'Freezing Rain',
    DaySVG: Sleet,
    NightSVG: Sleet
  },
  67: {
    description: 'Heavy Freezing Rain',
    DaySVG: Sleet,
    NightSVG: Sleet
  },
  71: {
    description: 'Light Snow',
    DaySVG: DaySnow,
    NightSVG: NightSnow
  },
  73: {
    description: 'Snow',
    DaySVG: Snow,
    NightSVG: Snow
  },
  75: {
    description: 'Heavy Snow',
    DaySVG: Snow,
    NightSVG: Snow
  },
  77: {
    description: 'Light Snow',
    DaySVG: DaySnow,
    NightSVG: NightSnow
  },
  80: {
    description: 'Light Showers',
    DaySVG: DayRain,
    NightSVG: NightRain
  },
  81: {
    description: 'Showers',
    DaySVG: DayRain,
    NightSVG: NightRain
  },
  82: {
    description: 'Heavy Showers',
    DaySVG: Rain,
    NightSVG: Rain
  },
  85: {
    description: 'Light Snow Showers',
    DaySVG: DaySnow,
    NightSVG: NightSnow
  },
  86: {
    description: 'Heavy Snow Showers',
    DaySVG: Snow,
    NightSVG: Snow
  },
  95: {
    description: 'Thunderstorms',
    DaySVG: Thunder,
    NightSVG: Thunder
  },
  96: {
    description: 'Light Hail Storms',
    DaySVG: Thunder,
    NightSVG: Thunder
  },
  99: {
    description: 'Heavy Hail Storms',
    DaySVG: Thunder,
    NightSVG: Thunder
  }
}
