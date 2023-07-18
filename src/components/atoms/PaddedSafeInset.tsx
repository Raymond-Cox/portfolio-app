import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import type { IView } from '../../types'
import { GlobalStyles } from '../../styles'

export default function PaddedSafeInset({ children, style, ...rest }: IView) {
  return (
    <SafeAreaView style={GlobalStyles.container} {...rest}>
      <View style={[styles.padded, style]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  padded: {
    padding: 15
  }
})
