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
    textColor: 'black',
    navColor: 'rgb(255, 255, 255)',
    bgColor: 'rgb(220, 220, 220)',
    homeBGImg: Images.lightBG,
    statusBarTextColor: 'dark-content',
    inputBGColor: 'rgb(255, 255, 255)',
    inputBorderColor: 'rgb(50, 50, 50)'
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
