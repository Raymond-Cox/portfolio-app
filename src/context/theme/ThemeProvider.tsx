import React, { useCallback, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { IThemeContext, ThemeContext, ThemeColor } from './ThemeContext'
import Theme from './Theme'

/**
 * Manages selected theme, and provides theme + themeToggle to
 * Child components via context
 */
export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeColor, setThemeColor] = useState<ThemeColor>(ThemeColor.Light)

  /**
   * Toggles between light/dark theme
   */
  const toggleTheme = useCallback(() => {
    setThemeColor(
      themeColor === ThemeColor.Light ? ThemeColor.Dark : ThemeColor.Light
    )
  }, [themeColor])

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
