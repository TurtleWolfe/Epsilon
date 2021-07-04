//TurtleWolfe.com // //custom components
//ViewImageScreen
//ViewImageScreen // //custom components
//ViewImageScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Image,
  StyleSheet,
  View,
} from 'react-native'

import { MaterialCommunityIcons } from "@expo/vector-icons";
// import defaultStyles from "../../constants/styles";
import Palette from '../../constants/palette';

interface ViewImageScreenProps {
  // alpha?: string;
  // beta?: string;
  // gamma?: string[];
  // delta?: number;
  // epsilon?: number[]
  // zeta?: boolean;
  // ViewImageScreen?: string;
}

const ViewImageScreen: React.FC<ViewImageScreenProps> = ({
  // alpha,
  // beta,
  // gamma,
  // delta,
  // epsilon,
  // zeta,
  // ViewImageScreen = 'ViewImageScreen',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close"
          // color="white"
          color={Palette.darkGrey}
          size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          // color="white"
          color={Palette.darkGrey}
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/images/chair.jpg")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    alignItems: 'center',
    backgroundColor: Palette.primary,
    height: 50,
    justifyContent: 'center',
    left: 30,
    position: "absolute",
    top: 40,
    width: 50,
  },
  container: {
    backgroundColor: Palette.black,
    flex: 1,
    width: "100%",
  },
  deleteIcon: {
    alignItems: 'center',
    backgroundColor: Palette.secondary,
    height: 50,
    justifyContent: 'center',
    position: "absolute",
    right: 30,
    top: 40,
    width: 50,
  },
  image: {
    height: "100%",
    width: "100%",
  },
})

export default ViewImageScreen