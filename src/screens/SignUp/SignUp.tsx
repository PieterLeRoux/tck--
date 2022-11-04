import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function SignUp() {
  const [name, onChangeName] = useState('')
  const [date, onChangeDate] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to tck--</Text>
      <Text style={styles.body}>Please enter the following details to get started:</Text>
      <TextInput style={styles.input} onChangeText={onChangeName} value={name} placeholder="Name" />
      <TextInput style={styles.input} onChangeText={onChangeDate} value={date} placeholder="Date" />
      <Button title="Submit" onPress={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 16
  },
  input: {
    height: 50,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})
