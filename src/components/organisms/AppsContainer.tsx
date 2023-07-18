import React from 'react'
import { Flex } from '../atoms'
import { AppButton } from '../molecules'
import { Apps } from '../../constants'

export default function AppsContainer() {
  return (
    <Flex>
      {Apps.map(({ text, route, iconName }) => (
        <AppButton key={text} iconName={iconName} route={route}>
          {text}
        </AppButton>
      ))}
    </Flex>
  )
}
