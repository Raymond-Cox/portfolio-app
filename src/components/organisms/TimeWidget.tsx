import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { DateTime } from 'luxon'
import { ThemedText } from '../atoms'
import { TextSize } from '../../constants'

export default function TimeWidget() {
  const [now, setNow] = useState(DateTime.now())

  /**
   * Updates time every 1 second
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(DateTime.now())
    }, 1000)

    // Cleanup function on component dismount
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <View style={styles.container}>
      <ThemedText size={TextSize.xxl}>
        {now.toLocaleString(DateTime.TIME_WITH_SECONDS)}
      </ThemedText>
      <ThemedText size={TextSize.xl}>
        {now.toLocaleString(DateTime.DATE_FULL)}
      </ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly'
  }
})
