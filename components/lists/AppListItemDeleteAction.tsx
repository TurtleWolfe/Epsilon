//TurtleWolfe.com // //custom components
//AppListItemDeleteAction
//AppListItemDeleteAction // //custom components
//AppListItemDeleteAction
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  // Pressable,
  // PressableProps,
  StyleSheet,
  // Text,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  View,
} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Palette from '../../constants/palette';

interface AppListItemDeleteActionProps {
  // onPress?: string;
  // onPress?: PressableProps["onPress"];
  onPress?: (event: GestureResponderEvent) => void;
}

const AppListItemDeleteAction: React.FC<AppListItemDeleteActionProps> = ({
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={Palette.white}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.danger,
    width: 70,
    // width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: 'yellow',
  },
})

export default AppListItemDeleteAction