//TurtleWolfe.com // //custom components
//AppScreen
//AppScreen // //custom components
//AppScreen
//TurtleWolfe.com // //custom components
import React from 'react'
// import Constants from "expo-constants";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppScreenProps {
  children?: React.ReactNode;
  style?: {};
}

const AppScreen: React.FC<AppScreenProps> = ({
  children = <Text>default AppScreen</Text>,
  style,
}) => {
  return (
    // <View style={styles.container}>
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
  },
  screen: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    width: '100%',
  },
  view: {
    flex: 1,
  },
})

export default AppScreen