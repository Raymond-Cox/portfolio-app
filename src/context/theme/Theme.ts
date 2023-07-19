import { ColorValue, ImageURISource } from 'react-native'
import { Images } from '../../constants'
import { ThemeColor } from './ThemeContext'

type Shadows = {
  shadowColor: string
  shadowOpacity: number
}

export type TTheme = {
  textColor: string
  bgColor: ColorValue
  navColor?: string
  homeBGImg: ImageURISource
  statusBarTextColor: 'dark-content' | 'light-content'
  inputBGColor: string
  inputBorderColor: string
  shadows: Shadows
}

interface ITheme {
  [ThemeColor.Light]: TTheme
  [ThemeColor.Dark]: TTheme
}

const Theme: ITheme = {
  [0]: {
    textColor: '#24292f',
    navColor: '#f6f8fa',
    bgColor: 'rgb(255, 255, 255)',
    homeBGImg: Images.lightBG,
    statusBarTextColor: 'dark-content',
    inputBGColor: 'rgb(243, 244, 246)',
    inputBorderColor: 'rgba(31, 35, 40,0.15)',
    shadows: {
      shadowColor: 'rgb(0,0,0)',
      shadowOpacity: 0.1
    }
  },
  [1]: {
    textColor: 'rgb(173, 186, 199)',
    navColor: 'rgb(28, 33, 40)',
    bgColor: 'rgb(34, 39, 46)',
    homeBGImg: Images.darkBG,
    statusBarTextColor: 'light-content',
    inputBGColor: 'rgb(68,76,86)',
    inputBorderColor: 'rgb(117, 130, 143)',
    shadows: {
      shadowColor: 'rgb(120,140,150)',
      shadowOpacity: 0.2
    }
  }
}

export default Theme
