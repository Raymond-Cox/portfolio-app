import React, { PropsWithChildren } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../atoms'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp, TRoute } from '../../types'

interface IAppButton extends PropsWithChildren {
  route: TRoute
  iconName: IconName
  size?: number
  color?: string
}

export default function AppButton({
  route,
  iconName,
  size = 40,
  color,
  children
}: IAppButton) {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  function onPress() {
    navigation.navigate(route)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.button}>
        <FontAwesomeIcon icon={iconName} size={size} color={color} />
      </View>
      <ThemedText variant="subtext" numberOfLines={2} style={styles.text}>
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
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
