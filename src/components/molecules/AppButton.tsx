import React, { PropsWithChildren } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../atoms'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp, TRoute } from '../../types'
import { Sizes, TextSize } from '../../constants'
import { useTheme } from '../../hooks'
import { GlobalStyles } from '../../styles'

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
  const { theme } = useTheme()
  const navigation = useNavigation<HomeScreenNavigationProp>()

  function onPress() {
    navigation.navigate(route)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.button, theme.shadows]}>
        <FontAwesomeIcon icon={iconName} size={size} color={color} />
      </View>
      <ThemedText size={TextSize.sm} numberOfLines={2} style={styles.text}>
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
    borderRadius: Sizes.borderRadius,
    backgroundColor: 'white',
    height: 60,
    width: 60,
    marginBottom: 5,
    ...GlobalStyles.shadows
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
