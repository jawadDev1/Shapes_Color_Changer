import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Circle({ color }) {
  return (
    <View>
      <Text style={styles.circleColorText}>{ color }</Text>
      <View style={[styles.circle, {backgroundColor: color}]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    circleColorText: {
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
        alignSelf: 'center',
        marginBottom: 11,
    },
    circle: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
    }
})