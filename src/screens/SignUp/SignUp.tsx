import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

export default function SignUp() {
  return (
    <ScrollView style={styles.container}>
      <Text>Sign up</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
