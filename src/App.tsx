import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { registerRootComponent } from 'expo'
import Home from './screens/Home/Home'

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default registerRootComponent(App)
