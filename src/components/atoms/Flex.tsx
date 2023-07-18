import React from 'react'
import { View } from 'react-native'
import { IView } from '../../types'
import { GlobalStyles } from '../../styles'

export default function Flex({ children, style, ...rest }: IView) {
  const extraStyles = Array.isArray(style) ? [...style] : style

  return (
    <View style={[GlobalStyles.container, extraStyles]} {...rest}>
      {children}
    </View>
  )
}
