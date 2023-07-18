import React from 'react'
import { StatusBar } from 'react-native'
import { useTheme } from '../../hooks'

export default function ThemedStatusBar() {
  const { theme } = useTheme()

  return <StatusBar barStyle={theme.statusBarTextColor} />
}
