import { createContext } from 'react'
import Theme, { TTheme } from './Theme'

export enum ThemeColor {
  Light,
  Dark
}

export interface IThemeContext {
  theme: TTheme
  themeColor: ThemeColor
  toggleTheme: (themeValue: ThemeColor) => void
}

export const ThemeContext = createContext<IThemeContext>({
  theme: Theme[ThemeColor.Light],
  themeColor: ThemeColor.Light,
  toggleTheme: () => {}
})
