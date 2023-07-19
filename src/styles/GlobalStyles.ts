import { StyleSheet } from 'react-native'
import { Sizes } from '../constants'

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  gap: {
    gap: Sizes.padding
  },
  row: {
    flexDirection: 'row'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  spaceEvenly: {
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  shadows: {
    // Reminder, you still need to add
    // shadowColor and shadowOpacity via theme
    shadowRadius: 15,
    elevation: 3
  }
})

export default GlobalStyles
