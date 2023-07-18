import { ColorValue, ImageURISource } from 'react-native'
import Images from '../../constants/Images'
import { ThemeColor } from './ThemeContext'

export type TTheme = {
  textColor: ColorValue
  homeBGImg: ImageURISource
  statusBarTextColor: 'dark-content' | 'light-content'
}

interface ITheme {
  [ThemeColor.Light]: TTheme
  [ThemeColor.Dark]: TTheme
}

const Theme: ITheme = {
  [0]: {
    textColor: 'black',
    homeBGImg: Images.lightBG,
    statusBarTextColor: 'dark-content'
  },
  [1]: {
    textColor: 'white',
    homeBGImg: Images.darkBG,
    statusBarTextColor: 'light-content'
  }
}

export default Theme
