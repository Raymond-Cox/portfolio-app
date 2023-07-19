import { ColorValue, ImageURISource } from 'react-native'
import { Images } from '../../constants'
import { ThemeColor } from './ThemeContext'

export type TTheme = {
  textColor: string
  bgColor: ColorValue
  navColor?: string
  homeBGImg: ImageURISource
  statusBarTextColor: 'dark-content' | 'light-content'
  inputBGColor: string
  inputBorderColor: string
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
    inputBorderColor: 'rgba(31, 35, 40,0.15)'
  },
  [1]: {
    textColor: 'rgb(173, 186, 199)',
    navColor: 'rgb(28, 33, 40)',
    bgColor: 'rgb(34, 39, 46)',
    homeBGImg: Images.darkBG,
    statusBarTextColor: 'light-content',
    inputBGColor: 'rgb(68,76,86)',
    inputBorderColor: 'rgb(117, 130, 143)'
  }
}

export default Theme
