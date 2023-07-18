import React from 'react'
import { PaddedSafeInset, ChangeThemeDropdown, ThemedText } from '../components'
import { useTheme } from '../hooks'
import { StyleSheet, View } from 'react-native'
import { Sizes } from '../constants'

export default function SettingsScreen() {
  const { theme } = useTheme()

  return (
    <PaddedSafeInset style={{ backgroundColor: theme.bgColor }}>
      <View style={styles.container}>
        <ThemedText variant="header" style={styles.text}>
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
