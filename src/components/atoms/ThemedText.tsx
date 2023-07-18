import React, { PropsWithChildren } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import { useTheme } from '../../hooks'

interface IThemedText extends PropsWithChildren<TextProps> {
  variant?: 'header' | 'default'
}
export default function ThemedText({
  variant = 'default',
  children,
  ...rest
}: IThemedText) {
  const { theme } = useTheme()
  const variantStyles = variant === 'default' ? styles.text : styles.header

  return (
    <Text {...rest} style={[variantStyles, { color: theme.textColor }]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  },
  header: {
    fontSize: 20
  }
})
