import React, { PropsWithChildren } from 'react'
import { Text, TextProps } from 'react-native'
import { useTheme } from '../../hooks'
import { TextSize } from '../../constants'

interface IThemedText extends PropsWithChildren<TextProps> {
  size?: TextSize
}

export default function ThemedText({
  size = TextSize.md,
  style,
  children,
  ...rest
}: IThemedText) {
  const { theme } = useTheme()

  return (
    <Text style={[style, { color: theme.textColor, fontSize: size }]} {...rest}>
      {children}
    </Text>
  )
}
