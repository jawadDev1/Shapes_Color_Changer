import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Square({ color }) {
  return (
    <View>
      <Text style={styles.squareColorText}>{ color }</Text>
      <View style={[styles.square, {backgroundColor: color}]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    squareColorText: {
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
        alignSelf: 'center',
        marginBottom: 11,
    },
    square: {
        width: 100,
        height: 100,
    }
})