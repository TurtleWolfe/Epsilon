//TurtleWolfe.com // //custom components
//AppErrorMessage
//AppErrorMessage // //custom components
//AppErrorMessage
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
} from 'react-native'

import AppText from "../AppText";
import defaultStyles from "../../constants/styles";

interface AppErrorMessageProps {
  // error?: any;
  error?: string;
  visible?: boolean;
} // typeScript

const AppErrorMessage: React.FC<AppErrorMessageProps> = ({
  error,
  visible,
}) => {
  if (!visible || !error) return null;

  return (
    <AppText
      style={styles.error}>
      {error}
    </AppText>
  )
} // AppErrorMessage component

const styles = StyleSheet.create({
  error: {
    // color: "red"
    color: defaultStyles.palette.danger
  },
}) // style sheet for AppErrorMessage

export default AppErrorMessage
// default export of AppErrorMessage