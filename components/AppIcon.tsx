//TurtleWolfe.com // //custom components
//AppIcon
//AppIcon // //custom components
//AppIcon
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  // Text,
  View,
} from 'react-native'

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Palette from '../constants/palette';

interface AppIconProps {
  // name?: keyof typeof MaterialCommunityIcons;
  // name?: (JSX attribute);
  name?: any;
  // name?: string;
  backgroundColor?: string;
  iconColor?: string;
  size?: number;
}

const AppIcon: React.FC<AppIconProps> = ({
  name = 'head',
  backgroundColor = Palette.highlight,
  iconColor = Palette.mediumGrey,
  size = 40,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        size={size * 0.6}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {
    backgroundColor: 'yellow',
  },
})

export default AppIcon