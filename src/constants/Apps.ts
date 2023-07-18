import { IconName } from '@fortawesome/fontawesome-svg-core'
import { TRoute } from '../types'
import { Icons } from './Icons'

interface IApps {
  text: string
  route: TRoute
  iconName: IconName
}

export const Apps: IApps[] = [
  { text: 'Settings', route: 'Settings', iconName: Icons.settings }
]
