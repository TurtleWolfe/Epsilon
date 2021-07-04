//TurtleWolfe.com // //custom components
//AppButton
//AppButton // //custom components
//AppButton
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import palette from '../constants/palette';

interface AppButtonProps {
  color?: keyof typeof palette;
  title?: string;
  onPress?: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({
  color = 'primary',
  title = 'default App Button',
  onPress = () => console.log('default AppButton'),
}) => {
  return (
    // <View style={styles.container}>
    <TouchableOpacity
      style={[styles.button, { backgroundColor: palette[color] }]}
      onPress={onPress}
    >
      <Text
        style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
    // </View> 
  )
}

const styles = StyleSheet.create({
  // container: {
  //   // backgroundColor: 'yellow',
  // },
  button: {
    backgroundColor: palette.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: palette.white,
    fontSize: 18,
    textTransform: "uppercase",
    // fontWeight: "bold",
    fontWeight: "900",
    fontFamily: "CharterBoldItalic",
  },
})

export default AppButton