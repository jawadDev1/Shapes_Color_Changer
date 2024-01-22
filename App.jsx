import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Triangle from './components/Triangle';
import Square from './components/Square';
import Circle from './components/Circle';
import LeftTriangle from './components/LeftTriangle';

export default function App() {
  const [bgColor, setBgColor] = useState('#000000');
  const [triangleColor, setTriangleColor] = useState('#cf000f');
  const [squareColor, setSquareColor] = useState('#cf000f');
  const [circleColor, setCircleColor] = useState('#cf000f');
  const [leftTriangleColor, setLeftTriangleColor] = useState('#cf000f');

  function gerenateColor() {
    let color = '#';
    let hexString = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
      color += hexString.charAt(Math.round(Math.random() * hexString.length));
    }
    return color;
  }

  function changeShapesColor() {
    setBgColor(gerenateColor());
    setTriangleColor(gerenateColor());
    setSquareColor(gerenateColor())
    setCircleColor(gerenateColor())
    setLeftTriangleColor(gerenateColor());
  }

  return (
    
    <View style={[styles.container, { backgroundColor: bgColor}]}>
      <Text style={styles.heading}>Shapes Color Changer</Text>
      <View style={styles.shapesContainer}>
        <View style={styles.shapesRow}>
          <Triangle color={triangleColor}/>
          <Square color={squareColor}/>
        </View>
        <TouchableOpacity onPress={changeShapesColor} style={styles.btn}>
          <Text style={styles.btnText}>Click Me</Text>
        </TouchableOpacity>
        <View style={styles.shapesRow}>
          <Circle color={circleColor}/>
          <LeftTriangle color={leftTriangleColor}/>
        </View>
      </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginTop: 12,
  },
  shapesContainer: {
    height: '80%',
    paddingHorizontal: 10,
    paddingVertical: 12,
    justifyContent: 'space-around',
  },
  shapesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    width: 140,
    backgroundColor: 'green',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 7,
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 25,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
  },
});
