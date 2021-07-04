//TurtleWolfe.com // //custom components
//AppCategoryPickerItem
//AppCategoryPickerItem // //custom components
//AppCategoryPickerItem
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  // Text,
  View,
} from 'react-native'
import AppIcon from './AppIcon'
import AppText from './AppText'

import defaultStyles from "../constants/styles";

interface AppCategoryPickerItemProps {

  // item?: React.ReactNode;
  item?: {
    backgroundColor?: string;
    icon?: string;
    label?: string;
    value?: number;
  };
  onPress?: (event: GestureResponderEvent) => void;
} // typeScript

const AppCategoryPickerItem: React.FC<AppCategoryPickerItemProps> = ({

  item = {
    backgroundColor: defaultStyles.palette.danger,
    icon: 'function',
    label: 'appPickerItem',
  },
  // label,
  onPress,
}) => {
  return (
    // null
    <View style={styles.container}>

      <AppIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />

      <AppText style={styles.label}>
        {item.label}
      </AppText>

    </View>
  )
} // AppCategoryPickerItem component

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: '33%',
  },
  label: {
    backgroundColor: 'yellow',
    marginTop: 5,
    textAlign: 'center',
  },
  // textContainer: {
  //   backgroundColor: 'yellow',
  // },
}) // style sheet for AppCategoryPickerItem

export default AppCategoryPickerItem
// default export of AppCategoryPickerItem