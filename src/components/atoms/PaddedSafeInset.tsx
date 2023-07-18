import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHeaderHeight } from '@react-navigation/elements'
import type { IView } from '../../types'
import { GlobalStyles } from '../../styles'
import { Sizes } from '../../constants'

export default function PaddedSafeInset({ children, style, ...rest }: IView) {
  const { bottom, top } = useSafeAreaInsets()
  const headerHeight = useHeaderHeight()
  const paddingTop = calcTop()
  function calcTop() {
    if (!headerHeight) return top + Sizes.padding

    return Sizes.padding
  }

  return (
    <View
      style={[
        GlobalStyles.container,
        styles.padded,
        { paddingTop, paddingBottom: bottom },
        style
      ]}
      {...rest}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  padded: {
    paddingHorizontal: Sizes.padding
  }
})
