import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../atoms'

export default function TimeWidget() {
  return (
    <View style={styles.container}>
      <ThemedText variant="header">TimeWidget</ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 125,
    borderWidth: 1
  }
})
