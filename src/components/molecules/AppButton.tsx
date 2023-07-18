import React, { PropsWithChildren } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../atoms'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

interface IAppButton extends PropsWithChildren {
  iconName: IconName
  size?: number
  color?: string
}

export default function AppButton({
  iconName,
  size = 40,
  color,
  children
}: IAppButton) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
        <FontAwesomeIcon icon={iconName} size={size} color={color} />
      </View>
      <ThemedText variant="subtext" numberOfLines={2}>
        {children}
      </ThemedText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 100,
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    height: 60,
    width: 60,
    marginBottom: 5,
    shadowColor: 'rgba(0, 0, 0, .6)',
    shadowRadius: 10,
    elevation: 3
  }
})
