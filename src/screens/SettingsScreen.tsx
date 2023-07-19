import React from 'react'
import { PaddedSafeInset, ChangeThemeDropdown, ThemedText } from '../components'
import { useTheme } from '../hooks'
import { StyleSheet, View } from 'react-native'
import { Sizes, TextSize } from '../constants'

export default function SettingsScreen() {
  const { theme } = useTheme()

  return (
    <PaddedSafeInset style={{ backgroundColor: theme.bgColor }}>
      <View style={styles.container}>
        <ThemedText size={TextSize.lg} style={styles.text}>
          Theme
        </ThemedText>
        <ChangeThemeDropdown />
      </View>
    </PaddedSafeInset>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginRight: Sizes.padding
  }
})
