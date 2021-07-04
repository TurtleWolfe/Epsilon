//TurtleWolfe.com // //custom components
//AppActivityIndicator
//AppActivityIndicator // //custom components
//AppActivityIndicator
//TurtleWolfe.com // //custom components
import React from 'react'
import LottieView from "lottie-react-native";

interface AppActivityIndicatorProps {
  visible?: boolean;
} // typeScript

const AppActivityIndicator: React.FC<AppActivityIndicatorProps> = ({
  visible = false,
}) => {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
} // AppActivityIndicator component

export default AppActivityIndicator
// default export of AppActivityIndicator