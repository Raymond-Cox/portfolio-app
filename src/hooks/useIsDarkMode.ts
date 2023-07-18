import { useColorScheme } from 'react-native'

function useIsDarkMode() {
  return useColorScheme() === 'dark'
}

export default useIsDarkMode
