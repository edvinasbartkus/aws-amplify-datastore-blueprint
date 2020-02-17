import { AppRegistry } from 'react-native'
import App from 'components/src/App'

AppRegistry.registerComponent('blueprint', () => App)
AppRegistry.runApplication('blueprint', {
  rootTag: document.getElementById('root')
})

