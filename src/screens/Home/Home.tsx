import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Home() {
  const generateTicks = (num: number) => {
    let ticks = []
    for (let i = 0; i < num; i++) {
      ticks.push(<View key={i} style={styles.CircleShape} />)
    }
    return ticks
  }
  return <View style={styles.container}>{generateTicks(1000)}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 6
  },
  CircleShape: {
    width: 15,
    height: 15,
    margin: 3,
    borderRadius: 150 / 2,
    backgroundColor: 'violet',
    borderWidth: 1,
    borderColor: 'violet',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 0.5
  }
})
