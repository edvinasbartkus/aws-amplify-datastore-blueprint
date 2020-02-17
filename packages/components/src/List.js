import React from 'react'
import { View, Text } from 'react-native'
import { DataStore } from '@aws-amplify/datastore'
import { Blog } from './models'

async function query (setBlogs) {
  const blogs = await DataStore.query(Blog)
  setBlogs(blogs)
}

export default function List () {
  const [blogs, setBlogs] = React.useState(null)
  React.useEffect(() => {
    query(setBlogs)
  }, [])

  return <View>
    <Text>{JSON.stringify(blogs)}</Text>
  </View>
}