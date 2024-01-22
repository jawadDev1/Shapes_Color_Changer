import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LeftTriangle({ color }) {
  return (
    <View>
      <Text style={styles.leftTriangleColorText}>{color}</Text>
      <View style={[styles.leftTriangle, {borderBottomColor: color}]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  leftTriangleColorText: {
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
        alignSelf: 'center',
        marginBottom: 11,
      },
      leftTriangle: {
        height: 0,
        width: 0,
        backgroundColor: 'transparent',
        borderLeftWidth: 70,
        borderRightWidth: 70,
        borderBottomWidth: 120,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        transform: [{rotate: '-90deg'}],
        marginTop: 9,
      }
})