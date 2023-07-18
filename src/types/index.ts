import type { PropsWithChildren } from 'react'
import type { ViewProps, ViewStyle } from 'react-native'

export * from './navigation.types'

export interface IView extends PropsWithChildren {
  style?: ViewStyle | ViewStyle[]
  rest?: ViewProps
}
