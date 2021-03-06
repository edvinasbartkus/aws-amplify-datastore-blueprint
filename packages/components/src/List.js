import React from 'react'
import { View, Text } from 'react-native'
import { DataStore } from '@aws-amplify/datastore'
import { Blog } from './models'

async function query (setBlogs) {
  const blogs = await DataStore.query(Blog)
  setBlogs(blogs)
}

export default function List () {
  const [blogs, setBlogs] = React.useState([])
  React.useEffect(() => {
    query(setBlogs)

    const subscription = DataStore
      .observe(Blog).subscribe(() => query(setBlogs))

    return () => subscription.unsubscribe()
  }, [])

  return <View>
    {blogs.map(blog => {
      return <View key={blog.id}>
        <Text>{blog.name}</Text>
      </View>
    })}
  </View>
}