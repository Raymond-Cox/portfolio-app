import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export function initializeIcons() {
  library.add(faGear)
}

interface IIcons {
  [key: string]: IconName
}

export const Icons: IIcons = {
  settings: 'gear'
}
