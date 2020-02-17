import React from 'react'
import { View, SafeAreaView } from 'react-native'
import List from './List'
import Create from './Create'

// Amplify
import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

export default function App () {
  return <SafeAreaView>
    <List />
    <Create />
  </SafeAreaView>
}
