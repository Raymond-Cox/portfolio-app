import React from 'react'
import { Flex } from '../atoms'
import { AppButton } from '../molecules'
import { Icons } from '../../constants'

export default function AppsContainer() {
  return (
    <Flex>
      <AppButton iconName={Icons.settings}>Settings</AppButton>
    </Flex>
  )
}
