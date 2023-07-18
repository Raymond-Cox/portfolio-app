import { useColorScheme } from 'react-native'
// TODO: Refactor this out, move useColorScheme to default
function useIsDarkMode() {
  return useColorScheme() === 'dark'
}

export default useIsDarkMode
