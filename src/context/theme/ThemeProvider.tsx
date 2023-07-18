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
  const toggleTheme = useCallback(() => {
    const newColor =
      themeColor === ThemeColor.Light ? ThemeColor.Dark : ThemeColor.Light

    storage.set('themeColor', newColor)
    setThemeColor(newColor)
  }, [themeColor])

  /**
   * Reads system theme from user
   * Sets/stores initial theme value to it
   */
  useEffect(() => {
    function setInitialTheme() {
      const initialTheme =
        systemTheme === 'dark' ? ThemeColor.Dark : ThemeColor.Light

      storage.set('themeColor', initialTheme)
      setThemeColor(initialTheme)
    }

    if (!storage.contains('themeColor')) {
      setInitialTheme()
    }
  }, [systemTheme])

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
