import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'
import { HomeScreen, SettingsScreen } from '.'
import { useTheme } from '../hooks'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function MainNavigation() {
  const { theme } = useTheme()

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.navColor
        },
        headerTintColor: theme.textColor
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}
