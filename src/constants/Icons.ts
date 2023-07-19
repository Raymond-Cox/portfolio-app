import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import { faCircleExclamation, faGear } from '@fortawesome/free-solid-svg-icons'

export function initializeIcons() {
  library.add(faGear, faCircleExclamation)
}

interface IIcons {
  [key: string]: IconName
}

export const Icons: IIcons = {
  settings: 'gear',
  exclamation: 'circle-exclamation'
}
