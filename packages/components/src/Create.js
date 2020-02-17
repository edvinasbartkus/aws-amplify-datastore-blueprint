import React from 'react'
import { View, TextInput, Button } from 'react-native'

import { DataStore } from '@aws-amplify/datastore'
import { Blog } from './models'

export default function Create () {
  const [name, setName] = React.useState('')
  const onSave = React.useCallback(async () => {
    const save = await DataStore.save(
      new Blog({
        name
      })
    )

    console.log(save)
  }, [name])

  return <View>
    <TextInput style={{height: 40, borderColor: 'grey', borderWidth: 1, color: 'black'}} value={name} onChangeText={setName} />
    <Button title='Create' onPress={onSave} />
  </View>
}