//TurtleWolfe.com // //custom components
//UploadScreen
//UploadScreen // //custom components
//UploadScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Modal,
  StyleSheet,
  // Text,
  View,
} from 'react-native'
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

// import colors from "../config/colors";
import defaultStyles from '../../constants/styles';

interface UploadScreenProps {
  onDone?: any;
  progress?: number;
  visible?: boolean;
} // typeScript

const UploadScreen: React.FC<UploadScreenProps> = ({
  onDone,
  progress = 0,
  visible = false,
}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={defaultStyles.palette.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            // source={require("../assets/animations/done.json")}
            source={require("../../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  )
} // UploadScreen component

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
}) // style sheet for UploadScreen

export default UploadScreen
// default export of UploadScreen