import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { registerRootComponent } from 'expo'
import SignUp from './screens/SignUp/SignUp'

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUp />
    </SafeAreaView>
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

export default registerRootComponent(App)
