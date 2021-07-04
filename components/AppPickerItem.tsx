//TurtleWolfe.com // //custom components
//AppPickerItem
//AppPickerItem // //custom components
//AppPickerItem
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import AppText from "./AppText";

interface AppPickerItemProps {
  item?: {
    // backgroundColor?: string;
    // icon?: string;
    label?: string;
    value?: number;
  };
  // label?: string;
  onPress?: (event: GestureResponderEvent) => void;
  // gamma?: string[];
  // delta?: number;
  // epsilon?: number[]
  // zeta?: boolean;
  // AppPickerItem?: string;
} // typeScript

const AppPickerItem: React.FC<AppPickerItemProps> = ({

  item = {
    // background: 'black',
    // icon: 'function',
    label: 'appPickerItem',
    value: 0
  },
  // label = "appPickerItem",
  onPress = () => console.log('default appPickerItem'),
  // gamma,
  // delta,
  // epsilon,
  // zeta,
  // AppPickerItem = 'AppPickerItem',
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  )
} // app Picker Item component

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
  container: {

  },
  textContainer: {

  },
}) // style sheet for appPicker Item

export default AppPickerItem
// default export of app Picker Item
