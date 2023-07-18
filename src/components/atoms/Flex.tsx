import React from 'react'
import { View } from 'react-native'
import { IView } from '../../types'
import { GlobalStyles } from '../../styles'

export default function Flex({ children, style, ...rest }: IView) {
  return (
    <View style={[GlobalStyles.container, style]} {...rest}>
      {children}
    </View>
  )
}
