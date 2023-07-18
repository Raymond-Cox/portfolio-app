import React, { useCallback, useEffect, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { IThemeContext, ThemeContext, ThemeColor } from './ThemeContext'
import Theme from './Theme'
import { storage } from '../localStorage/storage'
import { useColorScheme } from 'react-native'

/**
 * Manages selected theme, and provides theme + themeToggle to
 * Child components via context
 */
export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeColor, setThemeColor] = useState<ThemeColor>(
    storage.getNumber('themeColor') || ThemeColor.Light
  )
  const systemTheme = useColorScheme()

  /**
   * Toggles between light/dark theme
   * updates localStorage value
   */
  const toggleTheme = useCallback((themeValue: ThemeColor) => {
    storage.set('themeColor', themeValue)
    setThemeColor(themeValue)
  }, [])

  /**
   * Reads system theme from user
   * Sets/stores initial theme value to it
   */
  useEffect(() => {
    if (!storage.contains('themeColor')) {
      const initialTheme =
        systemTheme === 'dark' ? ThemeColor.Dark : ThemeColor.Light

      toggleTheme(initialTheme)
    }
  }, [toggleTheme, systemTheme])

  const memodValue = useMemo<IThemeContext>(
    () => ({
      themeColor,
      theme: Theme[themeColor],
      toggleTheme
    }),
    [themeColor, toggleTheme]
  )

  return (
    <ThemeContext.Provider value={memodValue}>{children}</ThemeContext.Provider>
  )
}
