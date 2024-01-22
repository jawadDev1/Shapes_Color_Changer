import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Triangle({ color }) {
  return (
    <View>
    <Text selectable={true} style={styles.triangleColorText}>{ color }</Text>
    <View style={[styles.triangle, {borderBottomColor: color}]}></View>
  </View>
  )
}

const styles = StyleSheet.create({
    triangleColorText: {
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
        alignSelf: 'center',
        marginBottom: 11,
      },
      triangle: {
        height: 0,
        width: 0,
        backgroundColor: 'transparent',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
      }
})