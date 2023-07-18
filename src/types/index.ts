import type { PropsWithChildren } from 'react'
import type { ViewProps, ViewStyle } from 'react-native'

export interface IView extends PropsWithChildren {
  style?: ViewStyle
  rest?: ViewProps
}
