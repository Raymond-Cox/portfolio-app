import React, { PropsWithChildren } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import { useTheme } from '../../hooks'

interface IThemedText extends PropsWithChildren<TextProps> {
  variant?: 'header' | 'default' | 'subtext'
}
export default function ThemedText({
  variant = 'default',
  style,
  children,
  ...rest
}: IThemedText) {
  const { theme } = useTheme()
  const variantStyles = styles[variant]

  return (
    <Text {...rest} style={[variantStyles, style, { color: theme.textColor }]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16
  },
  header: {
    fontSize: 20
  },
  subtext: {
    fontSize: 14
  }
})
