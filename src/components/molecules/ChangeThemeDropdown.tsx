import React, { useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { ThemeColor } from '../../context'
import { useTheme } from '../../hooks'
import { StyleSheet } from 'react-native'
import { GlobalStyles } from '../../styles'

/**
 * Dropdown component that manages theme changes
 */
export default function ChangeThemeDropdown() {
  const { theme, themeColor, toggleTheme } = useTheme()
  const [value, setValue] = useState(themeColor)
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState([
    { label: 'Light', value: ThemeColor.Light },
    { label: 'Dark', value: ThemeColor.Dark }
  ])

  /**
   * Updates theme in context/storage
   */
  useEffect(() => {
    toggleTheme(value)
  }, [value, toggleTheme])

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={GlobalStyles.container}
      style={{
        backgroundColor: theme.inputBGColor,
        borderColor: theme.inputBorderColor
      }}
      textStyle={[styles.text, { color: theme.textColor }]}
      dropDownContainerStyle={{
        backgroundColor: theme.inputBGColor,
        borderColor: theme.inputBorderColor
      }}
      selectedItemLabelStyle={styles.selectedLabel}
      /* @ts-ignore */
      tickIconStyle={{ tintColor: theme.textColor }}
      /* @ts-ignore */
      arrowIconStyle={{ tintColor: theme.textColor }}
    />
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  },
  selectedLabel: {
    fontWeight: 'bold'
  }
})
